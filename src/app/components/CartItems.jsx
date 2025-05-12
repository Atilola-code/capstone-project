import React, { useContext } from 'react'
import { LiaTimesSolid } from "react-icons/lia"
import { FaTrashAlt } from "react-icons/fa";
import { SidebarContext } from '../providers'

export default function CartItems() {

    const {openCart, setOpenCart, addItemCart, setAddItemCart, incrementQuantity, decrementQuantity, addToCart} = useContext(SidebarContext)
    const handleRemove = (cartItemId) => {
      const updatedCart = addItemCart.filter(item => item.cartItemId !== cartItemId)
      setAddItemCart(updatedCart)
    }
    
    const totalPrice = addItemCart.reduce((total, item) => total + (item.price * item.quantity), 0
  )
  
    
    function handleCart() {
        setOpenCart(!openCart)
    }
    function handleItemIncrement(cartItemId) {
      incrementQuantity(cartItemId)
    }
  
    function handleItemDecrement(cartItemId) {
      decrementQuantity(cartItemId)
    }

    function handleClearCart() {
      localStorage.removeItem("cartItems");
      setAddItemCart([]);
    }
    
  return (
    <div className='w-1/2 h-screen shadow-2xl bg-[#E3D7FD] text-black py-8 px-6 rounded-lg absolute right-0 top-18 overflow-y-auto'>
    <div>
      <div className=' flex justify-between items-center text-2xl font-serif'>
        <h2 className='text-[#5106e6c5]'>Cart</h2>
        <LiaTimesSolid className='text-[#5106e6c5]' onClick={handleCart}/>
      </div>
    </div>
     
        {addItemCart.length > 0 ? (

          <table className='text-center w-full border-collapse'>
            <caption className='text-2xl font-bold text-[#5106e6c5] py-4'>Your Cart</caption>
            <thead>
                <tr className='bg-[#B39BE1] text-white'>
                    <th className='border border-[#5106e6c5] text-left p-3'>Items</th>
                    <th className='border border-[#5106e6c5]'>Qty Change</th>
                    <th className='border border-[#5106e6c5]'>Quantity</th>
                    <th className='border border-[#5106e6c5]'>Price</th>
                    <th className='border border-[#5106e6c5]'>Delete</th>
                </tr>
            </thead>
            <tbody>
                {addItemCart.map(item => (
                  <tr key={item.cartItemId}  className='border-b border-[#5106e6c5]'>
                        <td className='text-center text-xl font-semibold'>{item.title}</td>
                        <td className='text-center text-xl font-semibold'>
                    <span className="flex items-center justify-center gap-2">
                      <button
                        onClick={() => handleItemDecrement(item.cartItemId)}
                        className="bg-[#B39BE1] text-white px-4 rounded"
                      >-</button>
                      {item.quantity}
                      <button
                        onClick={() => handleItemIncrement(item.cartItemId)}
                        className="bg-[#5106e6c5] text-white px-4 rounded"
                      >+</button>
                    </span>
                  </td>

                        <td className='text-center text-xl font-semibold'>{item.quantity}</td>
                        <td className='text-center text-xl font-semibold'>₦{(item.price * item.quantity).toLocaleString()}</td>
                        <td className='p-3 text-center'><button onClick={() => handleRemove(item.cartItemId)} className='text-[#5106e6c5]' title='Remove' ><FaTrashAlt className='size-6 text-[#5106e6c5]' />
                        </button>
                        </td>
                    </tr>
                ))}
                <tr className='bg-[#B39BE1] text-white'>
                  <td colSpan="3" className='text-left text-xl font-bold py-3 px-6'>Total</td>
                  <td className='text-center text-xl font-bold' colSpan="4">₦{totalPrice.toLocaleString()}</td>
                </tr>
            </tbody>
        </table>
) : (
  <p className='text-center text-3xl font-bold'>Your cart is empty</p>
)}
              <div className='flex items-center justify-center mt-8'>
              <button className=' bg-[#5106e6c5] text-white hover:border-2 hover:bg-neutral-100 hover:text-[#5106e6c5] p-4 cursor-pointer rounded-2xl mx-4 px-8 shadow-2xl'>Checkout</button>
              <button className=' bg-red-500 text-white p-4 hover:border-2 hover:text-red-500 hover:bg-neutral-100 cursor-pointer rounded-2xl shadow-2xl mx-4 px-8' onClick={handleClearCart}
>
  Clear Cart
</button>

              </div>
    </div>
  )
}
