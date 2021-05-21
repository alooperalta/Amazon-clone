import React from 'react'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/solid'
import Currency from 'react-currency-formatter'
import { useDispatch } from 'react-redux'
import { addToBasket, removeFromBasket } from '../slices/basketSlice'

function CheckoutProducts({ title, id, price, description, category, image, hasPrime, rating }) {
    
    const dispatch = useDispatch();
    const addItemToBasket = () => {
        const product = {
            title,
            id, 
            price, 
            description, 
            category, 
            image, 
            hasPrime, 
            rating
        }
        dispatch(addToBasket(product))
    }

    const removeItemFromBasket = () => {
        dispatch(removeFromBasket({id}))
    } 

    return (
        <div className='grid grid-cols-5'>
            <Image 
                src={image}
                width={200}
                height={200}
                objectFit='contain'
            />    

            {/* Middle */}
            <div className="col-span-3 mx-5">
            <p>{title}</p>
            
                <div className="flex">  
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <StarIcon key={i} className='h-5 text-yellow-500' />
                    ))}
                </div>
                <p className='text-xs my-2 line-clamp-3'>{description}</p>
                <Currency quantity={price} currency="INR" />

                {hasPrime && (
                    <div className="flex items-center space-x-2">
                        <img loading='lazy' className="w-12" src="https://links.papareact.com/fdw" />
                        <p className='text-xs text-gray-500'>FREE Next Day Delivery</p>
                    </div>    
                )}
            </div>

            <div className="flex flex-col space-y-2 my-auto justify-self-end">
                <button className='button mt-auto' onClick={addItemToBasket}>Add to basket</button> 
                <button className='button mt-auto' onClick={removeItemFromBasket}>Remove from Basket</button> 
            </div>
        </div>
    )
}

export default CheckoutProducts
