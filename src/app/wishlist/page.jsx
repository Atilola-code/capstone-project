'use client'
import { useContext, useEffect } from 'react'
import { SidebarContext } from '../providers'
import { LiaTimesSolid } from "react-icons/lia"
import { FaTrashAlt } from "react-icons/fa"

export default function Wishlist() {
    const {addWishItem, setAddWishItem, openWish, setOpenWish, addItemCart, setAddItemCart} = useContext(SidebarContext)


    useEffect(() => {
      const storedWishlist = localStorage.getItem("addWishItem");
      if (storedWishlist) {
        const parsedWishlist = JSON.parse(storedWishlist);
        if (parsedWishlist.length > 0) {
          setAddWishItem(parsedWishlist);
        }
      }
    }, []);
    

      useEffect(() => {
        localStorage.setItem("addWishItem", JSON.stringify(addWishItem))
      }, [addWishItem])

      const handleRemove = (id) => {
        const updatedWishlist = addWishItem.filter(item => item.id !== id)
        setAddWishItem(updatedWishlist)
      }

      function handleClearWish() {
        localStorage.removeItem("addWishItem");
        setAddWishItem([]);
      }
      function handleWish() {
        setOpenWish(!openWish)
    }


    const handleAddToCart = (item) => {
  // Check if item already in cart
  const isInCart = addItemCart.find(addItemCart => addItemCart.cartItemId === item.cartItemId);
  
  if (isInCart) {
    // Update quantity if already in cart
    const updatedCart = addItemCart.map(addItemCart =>
      addItemCart.cartItemId === item.cartItemId
        ? { ...addItemCart, quantity: addItemCart.quantity + item.quantity }
        : addItemCart
    );
    setAddItemCart(updatedCart);
  } else {
    // Otherwise, add it fresh
    setAddItemCart([...addItemCart, item]);
  }
};
      
    
  return (
    <div className='w-1/2 h-screen shadow-2xl bg-[#E3D7FD] text-black py-8 px-6 rounded-lg absolute right-0 top-18 overflow-y-auto'>
         <div>
              <div className=' flex justify-between items-center text-2xl font-serif'>
                <h2 className='text-[#5106e6c5] font-sans font-semibold'>Wish</h2>
                <LiaTimesSolid className='text-[#5106e6c5]' onClick={handleWish}/>
              </div>
            </div>
        {
           addWishItem.length === 0 
           ?
           (
             <h2 className='text-center text-3xl font-bold'>Your wishlist is empty</h2>
           )
           :
           (
            <table className='text-center w-full border-collapse border border-gray-300'>
                <caption className='text-2xl font-bold text-[#5106e6c5] py-4'>Your Wishlist</caption>
                <thead>
                    <tr className='bg-[#B39BE1] text-white'>
                        <th className='border border-[#5106e6c5]'>Title</th>
                        <th className='border border-[#5106e6c5]'>Quantity</th>
                        <th className='border border-[#5106e6c5]'>Price</th>
                        <th className='border border-[#5106e6c5]'>Description</th>
                        <th className='border border-[#5106e6c5]'>Delete</th>
                    </tr>

                </thead>
                <tbody>
                    {addWishItem.map(item => (
                  <tr key={item.id}  className='border-b border-[#5106e6c5]'>
                            <td className='text-center text-lg font-normal font-sans'>{item.title}</td>
                            <td className='text-center text-lg font-normal font-sans'>{item.quantity}</td>
                            <td className='text-center text-lg font-normal font-sans'>₦{(item.price * item.quantity).toLocaleString()}</td>
                            <td className='text-center text-lg font-normal font-sans'>{item.desc}</td>
                            <td className='p-3 mt-16 flex justify-center items-center'><button onClick={() => handleRemove(item.id)} className='text-[#5106e6c5]' title='Remove' ><FaTrashAlt className='size-6 text-[#5106e6c5]' />
                            </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
           )
        }
      <div className='flex justify-center items-center mt-8 gap-16'>
      <button onClick={() => handleAddToCart()} className='border-2 border-[#5106e6c5] text-[#5106e6c5] p-4 cursor-pointer rounded-2xl shadow-2xl mx-4 px-6'>Add to Cart</button>
        <button className=' border-2 border-red-500 text-red-500 p-4 cursor-pointer rounded-2xl mx-4 shadow-2xl px-6' onClick={handleClearWish}>Clear Wishlist</button>
      </div>
    </div>
  )
}
