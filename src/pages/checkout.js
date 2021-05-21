import React from 'react'
import Header from '../components/Header'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { selectItems, selectTotal } from '../slices/basketSlice'
import CheckoutProducts from '../components/CheckoutProducts'
import Currency from 'react-currency-formatter'
import { useSession } from 'next-auth/client'

function checkout() {
    const [session] = useSession();
    const items = useSelector(selectItems)
    const total = useSelector(selectTotal)
    // const total = 
    return (
        <div className='bg-gray-100'>
            <Header />

            <main className="lg:flex max-w-screen-2xl mx-auto">

            {/* Left Section */}

            <div className="flex-grow m-5 shadow-sm">
                <Image
                    src='https://links.papareact.com/ikj'
                    height={250}
                    width={1020}
                    objectFit='contain'
                />
            </div>

            <div className='flex flex-col p-5 space-y-10 bg-white'>
                <h1 className="text-3xl border-b pb-4">{items.length===0?"Your Amazon basket is empty": "Shopping Basket"}</h1>
            
                {items.map((item, i)=> (
                    <CheckoutProducts 
                        key={i}
                        title={item.title}
                        id={item.id}
                        price={item.price}
                        description={item.description}
                        category={item.category}
                        image={item.image}
                        hasPrime={item.hasPrime}
                        rating={item.rating}
                    />
                ))}

            </div>

            {/* Right Section */}
            <div className='flex flex-col bg-white p-10 shadow-md'>
                {items.length > 0 && (
                    <>
                        <h2 className="whitespace-nowrap">Subtotal ({items.length} items): {' '}
                            <span>
                                <Currency quantity={total} currency="INR" />
                            </span>
                        </h2>
                        <button 
                            disabled={!session}
                            className={`button mt-2 ${!session && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'}`}>
                            {!session ? 'Sign in to checkout' : 'Proceed to Checkout'}
                        </button>
                    </>
                )}
            </div>
            </main>
        </div>
    )
}

export default checkout
