import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { placeOrder } from '../app/orderPlaceSlice';
import { clearCart } from '../app/Cart';

function Checkout() {
    const cartItems = useSelector(store => store.cart.items);

    const subTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity || 0), 0);
    const deliveryFee = 4.99;
    const tax = subTotal * 0.1
    const total = subTotal + deliveryFee + tax

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const orderData = {
            customer: data,
            items: cartItems,
            total: total,
            placedAt: new Date().toISOString(),
        };

        dispatch(placeOrder(orderData));  // Save order to store
        dispatch(clearCart());            // Clear the cart after placing order
        toast.success("Order Placed Succefully!")
        navigate("/order-placed");        // Go to confirmation page

        // console.log("Order Placed: ", data);
        // // alert("Order Placed Succefully!");
        // navigate("/order-placed");
    }

    return (
        // <div className="max-w-4xl mx-auto p-6">
        //     <h1 className="text-3xl font-bold mb-6">Checkout</h1>

        //     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        //         {/* Shipping Details */}
        //         <div className="bg-white p-6 rounded-2xl shadow">
        //             <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
        //             <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        //                 <input
        //                     {...register("fullname", { required: "Full name is required" })}
        //                     type="text" placeholder="Full Name" className="w-full p-2 border rounded-md"
        //                 />
        //                 {errors.fullname && <p className="text-red-500 text-sm">{errors.fullname.message}</p>}

        //                 <input
        //                     {...register("address", { required: "Address is required" })}
        //                     type="text" placeholder="Address" className="w-full p-2 border rounded-md"
        //                 />
        //                 {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}

        //                 <input
        //                     {...register("city", { required: "City is required" })}
        //                     type="text" placeholder="City" className="w-full p-2 border rounded-md"
        //                 />
        //                 {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}

        //                 <input
        //                     {...register("postalCode", { required: "Postal code is required" })}
        //                     type="text" placeholder="Postal Code" className="w-full p-2 border rounded-md"
        //                 />
        //                 {errors.postalCode && <p className="text-red-500 text-sm">{errors.postalCode.message}</p>}

        //                 <input
        //                     {...register("phoneNumber", { required: "Phone number is required" })}
        //                     type="text" placeholder="Phone Number" className="w-full p-2 border rounded-md"
        //                 />
        //                 {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>}
        //             </form>
        //         </div>

        //         {/* Payment Details */}
        //         <div className="bg-white p-6 rounded-2xl shadow">
        //             <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
        //             <form className="space-y-4">
        //                 <select className="w-full p-2 border rounded-md">
        //                     <option value="">Select Payment Method</option>
        //                     <option value="cod">Cash on Delivery</option>
        //                     <option value="card">Credit/Debit Card</option>
        //                     <option value="upi">UPI</option>
        //                 </select>
        //                 {/* You can conditionally render inputs based on payment method */}
        //             </form>
        //         </div>
        //     </div>

        //     {/* Order Summary + Place Order */}
        //     <div className="mt-8 bg-white p-6 rounded-2xl shadow">
        //         <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        //         <p className="text-gray-600">Items Total: ${subTotal.toFixed(2)}</p>
        //         <p className="text-gray-600">Tax (10%): ${tax.toFixed(2)}</p>
        //         <p className="text-gray-600">Shipping: ${deliveryFee.toFixed(2)}</p>
        //         <p className="font-bold mt-2">Total: ${Total.toFixed(2)}</p>

        //         <button
        //             className="w-full mt-6 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-4 rounded-xl shadow transition" type='submit'
        //         >
        //             Place Order
        //         </button>
        //     </div>
        // </div>


        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Checkout</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className="bg-white p-6 rounded-2xl shadow space-y-4">
                    <h2 className="text-xl font-semibold mb-2">Shipping Information</h2>

                    <input
                        {...register("fullName", { required: "Full Name is required" })}
                        placeholder="Full Name"
                        className="w-full p-2 border rounded-md"
                    />
                    {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}

                    <input
                        {...register("address", { required: "Address is required" })}
                        placeholder="Address"
                        className="w-full p-2 border rounded-md"
                    />
                    {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}

                    <input
                        {...register("city", { required: "City is required" })}
                        placeholder="City"
                        className="w-full p-2 border rounded-md"
                    />
                    {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}

                    <input
                        {...register("postalCode", {
                            required: "Postal Code is required",
                            pattern: { value: /^[0-9]{6}$/, message: "Enter valid 6-digit PIN" }
                        })}
                        placeholder="Postal Code"
                        className="w-full p-2 border rounded-md"
                    />
                    {errors.postalCode && <p className="text-red-500 text-sm">{errors.postalCode.message}</p>}

                    <input
                        {...register("phone", {
                            required: "Phone number is required",
                            pattern: { value: /^[0-9]{10}$/, message: "Enter a valid 10-digit number" }
                        })}
                        placeholder="Phone Number"
                        className="w-full p-2 border rounded-md"
                    />
                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                </div>

                <div className="bg-white p-6 rounded-2xl shadow space-y-4">
                    <h2 className="text-xl font-semibold mb-2">Payment Method</h2>

                    <select
                        {...register("paymentMethod", { required: "Please select a payment method" })}
                        className="w-full p-2 border rounded-md"
                    >
                        <option value="">Select Payment Method</option>
                        <option value="cod">💵Cash on Delivery (COD)</option>
                        <option value="card">💳Credit/Debit Card</option>
                        <option value="upi">UPI</option>
                    </select>
                    {errors.paymentMethod && <p className="text-red-500 text-sm">{errors.paymentMethod.message}</p>}
                </div>

                <div className="md:col-span-2 bg-white p-6 rounded-2xl shadow mt-4">
                    <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
                    <p className="text-gray-600">Items Total: ${subTotal.toFixed(2)}</p>
                    <p className="text-gray-600">Tax (10%): ${tax.toFixed(2)}</p>
                    <p className="text-gray-600">Shipping: ${deliveryFee.toFixed(2)}</p>
                    <p className="font-bold mt-2">Total: ${(total + 50).toFixed(2)}</p>

                    <button
                        type="submit"
                        className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
                    >
                        Place Order
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Checkout
