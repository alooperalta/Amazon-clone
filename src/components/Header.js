import Image from "next/image";
import { SearchIcon, ShoppingCartIcon, MenuIcon } from '@heroicons/react/outline';
function Header() {
    return (
        <header>
            {/* Top Nav */}
            <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                    <Image 
                        src='https://links.papareact.com/f90'
                        width = {150}
                        height = {40}
                        objectFit="contain"
                        className="cursor-pointer"
                    />
                </div>

                {/* Search Bar */}

                <div className='hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500'>
                    <input className="p-2 h-full w-6 flex-grow rounded-l-md flex-shrink focus:outline-none" type="text" />
                    <SearchIcon className="h-12 p-4" />
                </div>

                {/* Right Side */}

                <div className='text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap'>
                    

                    <div className="link">
                        <p>Hello Anuj</p>
                        <p className="font-extrabold md:text-sm">Account & list</p>
                    </div>
                    
                    <div className="link">
                        <p>Return</p>
                        <p className="font-extrabold md:text-sm">& Orders</p>
                    </div>

                    <div className="link relative flex items-center">
                        <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold'>4</span>
                        <ShoppingCartIcon className='h-10' />
                        <p className="hidden font-extrabold md:text-sm md:inline mt-2">Basket</p>
                    </div>

                </div>

            </div>

            {/* Bottom Nav */}
            <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white test-sm">
                <p className="link flex items-center">
                    <MenuIcon className="h-6 m-1"/>
                    All
                </p>
                <p className="link">Prime Video</p>
                <p className="link">Amazon Buisness</p>
                <p className="link">Today's deals</p>
                <p className="hidden link lg:inline-flex">Electronics</p>
                <p className="hidden link lg:inline-flex">Food & Grocieries</p>
                <p className="hidden link lg:inline-flex">Prime</p>
                <p className="hidden link lg:inline-flex">Electronics</p>
                <p className="hidden link lg:inline-flex">Electronics</p>
                <p className="hidden link lg:inline-flex">Electronics</p>

            </div>
        </header>
    )
}

export default Header
