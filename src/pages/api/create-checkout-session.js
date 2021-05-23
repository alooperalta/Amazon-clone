const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
    const { items, email } = req.body;

    const transformedItems = items.map(item => ({
        quantity:1,
        description: item.description,
        price_data: {
            currency: 'inr',
            unit_amount: item.price * 100,
            product_data: {
                name: item.title,
                images: [item.image],
            },
        },
    }));

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: transformedItems,
        mode: 'payment',
        shipping_rates: ['shr_1Itz7JSJJlAd7HqL3muEkVJu'],
        shipping_address_collection: {
            allowed_countries:['CA', 'US', 'GB', 'IN']
        },
        success_url: `${process.env.HOST}/success`,
        cancel_url: `${process.env.HOST}/checkout`,
        metadata: {
            email: email,
            images: JSON.stringify(items.map(item => item.image)),
            titles: JSON.stringify(items.map(item => item.title))
        },
    });

    res.status(200).json({ id: session.id })
};