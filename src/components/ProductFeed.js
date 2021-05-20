import React from 'react'
import Product from '../components/Product'

function ProductFeed({ products }) {
    return (
        <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto'>
            
            {products.slice(0,4).map(({title, id, price, description, category, image})=>(
               <p><Product 
                    key ={id}
                    id={id}
                    price={price}
                    title={title}
                    description={description}
                    category={category}
                    image={image} 
                /></p>
            ))}

            <img className="md:col-span-full" src="https://links.papareact.com/dyz" />
        
            <div className="md:col-span-2">
                {products.slice(4,5).map(({title, id, price, description, category, image})=>(
                <p><Product 
                        key ={id}
                        id={id}
                        price={price}
                        title={title}
                        description={description}
                        category={category}
                        image={image} 
                    /></p>
                ))}
            </div>

            {products.slice(5,products.length).map(({title, id, price, description, category, image})=>(
                <p><Product 
                        key ={id}
                        id={id}
                        price={price}
                        title={title}
                        description={description}
                        category={category}
                        image={image} 
                    /></p>
                ))}

        </div>
    )
}

export default ProductFeed
