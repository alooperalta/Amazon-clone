
import { buffer } from 'micro'
import * as admin from 'firebase-admin'

// Secure a connection to firebase
const serviceAccount = require('../../../permissions.json')
const app = !admin.apps.length ? admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
}) : admin.app()

// Stripe

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const endpointSecurit = process.env.STRIPE_SIGNING_SECRET

const fullfillOrder = async (session) => {
    console.log('Fullfilling Order!!!')
        try{
            console.log(JSON.stringify(session.metadata) + '        titles')
        }
        catch(error){
            console.log(error.message)
        }
    return app
        .firestore()
        .collection('users')
        .doc(session.metadata.email)
        .collection('orders')
        .doc(session.id)
        .set({
            amount: session.amount_total / 100, 
            amount_shipping: session.total_details_amount_shipping / 100,
            images: JSON.parse(session.metadata.images),
            titles: JSON.parse(session.metadata.titles),
            timestamp: admin.firestore.FieldValue.serverTimestamp()
        })
        .then(() => {
            console.log(`SUCCESS: Order ${session.id} has been added to DB!`)
        })
        .catch(e=>console.log(e.message + " Yeh error aaya hai Firebase se"))
}

export default async (req, res) => {
    if(req.method === 'POST'){
        const requestBuffer = await buffer(req)
        const payload = requestBuffer.toString()
        const sig = req.headers["stripe-signature"]

        let event;

        // Verify (came from stripe)
        try{
            event = await stripe.webhooks.constructEvent(payload, sig, endpointSecurit)
        }catch(e){
            console.log('ERROR', e.message)
            return res.status(400).send({message: "Webhook error: " + e.message })
        }
        if(event.type === "checkout.session.completed"){
            const session = event.data.object

            // Fullfill the order
            return fullfillOrder(session).then(() => res.status(200)).catch(e => {console.log(e.message + 'helloo error' ); res.status(400)})
        }
    }
}

export const config = {
    api: {
        bodyParser: false,
        externalResolver: true
    }
}