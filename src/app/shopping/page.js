import HeroSection from "../../components/HeroSection";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa6";


export default function CartPage() {
  const products = [
    {
      name: "Burger",
      price: 35.0,
      image: "/food1.png",
      quantity: 1,
      total: 221.0,
    },
    {
      name: "Fresh Lime",
      price: 25.0,
      image: "/food2.png",
      quantity: 1,
      total: 521.0,
    },
    {
      name: "Pizza",
      price: 15.0,
      image: "/food3.png",
      quantity: 1,
      total: 421.0,
    },
    {
      name: "Chocolate Muffin",
      price: 45.0,
      image: "/food4.png",
      quantity: 1,
      total: 521.0,
    },
    {
      name: "Cheese Butter",
      price: 16.0,
      image: "/food5.png",
      quantity: 1,
      total: 325.0,
    },
  ];

  return (
    <>
    <HeroSection header={'shopping cart'} title={'shopping cart'} />

    <div className="max-w-7xl mx-auto p-10">
  {/* Product Table */}
  <div className="overflow-x-auto">
    <table className="w-full border-collapse  ">
      <thead>
        <tr className="">
          <th className="text-left p-4 border-b border-gray-200">Product</th>
          <th className="text-left p-4 border-b border-gray-200">Price</th>
          <th className="text-left p-4 border-b border-gray-200">Quantity</th>
          <th className="text-left p-4 border-b border-gray-200">Total</th>
          <th className="text-left p-4 border-b border-gray-200">Remove</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={index} className="hover:bg-gray-50">
            {/* Product */}
            <td className="flex items-start gap-4 p-4 border-b border-gray-200">
              <div className="relative w-16 h-16">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <div>
                <span className="font-medium text-gray-700">{product.name}</span>
                <div className="flex gap-1 text-sm text-primary items-center">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </td>

            {/* Price */}
            <td className="p-4 border-b border-gray-200 text-gray-700">
              ${product.price.toFixed(2)}
            </td>

            {/* Quantity */}
            <td className="p-4 border-b">
              <div className="flex w-[120px] items-center border border-gray-300 rounded-3xl overflow-hidden">
                <button className="px-3 py-1 text-lg">-</button>
                <span className="px-4 py-1 text-lg">{product.quantity}</span>
                <button className="px-3 py-1 text-lg">+</button>
              </div>
            </td>

            {/* Total */}
            <td className="p-4 border-b border-gray-200 text-gray-700">
              ${product.total.toFixed(2)}
            </td>

            {/* Remove */}
            <td className="p-4 border-b border-gray-200">
              <button className="text-red-500 text-lg font-bold">×</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  {/* Coupon Code and Total Bill Section */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
    {/* Coupon Code */}
    <div>
      <h2 className="text-lg font-bold text-gray-700 mb-4">Coupon Code</h2>
      <p className="text-gray-500 text-sm mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
        pellentesque bibendum non.
      </p>
      <div className="w-full" >
      <div className="flex flex-col sm:flex-row items-center">
        <input
          type="text"
          placeholder="Enter Here code"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md"
        />
        <button className="bg-primary mt-10 sm:mt-0 text-white px-6 py-2 rouned-md sm:rounded-r-md">
          Apply
        </button>
      </div>
      </div>
    </div>

    {/* Total Bill */}
    <div className="rounded-sm">
      <div className="border border-gray-400">
        <div className="p-6">
          <h2 className="text-lg font-bold text-gray-700 mb-4">Total Bill</h2>

          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-600">Cart Subtotal</span>
            <span className="font-medium text-gray-700">$120.00</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-600">Shipping Charge</span>
            <span className="font-medium text-gray-700">$00.00</span>
          </div>
        </div>
        <hr className="w-full border bg-gray-400" />
        <div className="p-6">
          <div className="flex justify-between items-center">
            <span className="font-bold text-gray-700">Total Amount</span>
            <span className="font-bold text-primary">$205.00</span>
          </div>
        </div>
      </div>

      <button className="bg-primary text-white w-full py-3 rounded-md font-medium mt-10">
        Proceed to Checkout
      </button>
    </div>
  </div>
</div>

    </>
  );
}
