"use client";
import React from "react";
import { useCart } from "../context/CartContext";
import { Trash2, ArrowLeft, ShoppingBag, ShieldCheck, Truck, RotateCcw } from "lucide-react";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  const subtotal = cart.reduce((acc, item) => acc + parseFloat(item.price.replace(/,/g, '')), 0);
  const shipping = subtotal > 5000 ? 0 : 500;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-[#fcfcfd] py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Header Section */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-4">
            <div className="bg-[#004aad] p-3 rounded-2xl text-white">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <h1 className="text-3xl font-black text-gray-900 tracking-tight">Shopping Cart</h1>
          </div>
          <Link href="/Printers" className="group text-gray-500 hover:text-[#004aad] flex items-center gap-2 transition-all">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-semibold text-sm">Continue Shopping</span>
          </Link>
        </div>

        {cart.length === 0 ? (
          <div className="bg-white border border-gray-100 p-20 rounded-3xl shadow-sm text-center">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
               <ShoppingBag className="w-10 h-10 text-gray-300" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Your cart is feeling a bit light</h2>
            <p className="text-gray-500 mb-8 max-w-sm mx-auto">Looks like you haven't added any printers to your cart yet. Explore our latest deals.</p>
            <Link href="/Printers" className="inline-block bg-[#004aad] text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-blue-100 hover:scale-105 transition-transform">
              Shop Printers
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-10">
            
            {/* 1. Product List (Left Side) */}
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-50 flex justify-between items-center bg-gray-50/50">
                  <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">Product Details</span>
                  <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">Total</span>
                </div>
                
                <div className="divide-y divide-gray-50">
                  {cart.map((item, index) => (
                    <div key={index} className="p-6 flex flex-col sm:flex-row items-center gap-6 group">
                      {/* Product Image */}
                      <div className="w-24 h-24 bg-gray-50 rounded-2xl flex-shrink-0 p-2 flex items-center justify-center border border-gray-100">
                        <img src={item.image} alt={item.name} className="max-w-full max-h-full object-contain mix-blend-multiply" />
                      </div>

                      {/* Product Info */}
                      <div className="flex-grow text-center sm:text-left">
                        <h3 className="font-bold text-gray-900 text-lg group-hover:text-[#004aad] transition-colors">{item.name}</h3>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-xs font-bold text-red-400 hover:text-red-600 flex items-center gap-1 mx-auto sm:mx-0 transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" /> REMOVE ITEM
                        </button>
                      </div>

                      {/* Price Tag */}
                      <div className="text-right">
                        <p className="text-xl font-black text-gray-900 italic">₹{item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-2xl border border-gray-100 flex flex-col items-center text-center">
                  <Truck className="w-5 h-5 text-[#004aad] mb-2" />
                  <span className="text-[10px] font-bold text-gray-400 uppercase">Fast Delivery</span>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-gray-100 flex flex-col items-center text-center">
                  <RotateCcw className="w-5 h-5 text-[#004aad] mb-2" />
                  <span className="text-[10px] font-bold text-gray-400 uppercase">Easy Returns</span>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-gray-100 flex flex-col items-center text-center">
                  <ShieldCheck className="w-5 h-5 text-[#004aad] mb-2" />
                  <span className="text-[10px] font-bold text-gray-400 uppercase">Secure Pay</span>
                </div>
              </div>
            </div>

            {/* 2. Order Summary (Right Side) */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 sticky top-28">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-500 font-medium">
                    <span>Subtotal</span>
                    <span>₹{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-gray-500 font-medium">
                    <span>Shipping</span>
                    <span className={shipping === 0 ? "text-green-500 font-bold" : ""}>
                      {shipping === 0 ? "FREE" : `₹${shipping}`}
                    </span>
                  </div>
                  <div className="h-px bg-gray-100 my-4"></div>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-sm font-bold text-gray-400 uppercase">Grand Total</p>
                      <p className="text-3xl font-black text-gray-900 italic">₹{total.toLocaleString()}</p>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-[#004aad] hover:bg-[#003580] text-white py-4 rounded-2xl font-black text-lg shadow-lg shadow-blue-100 transition-all flex items-center justify-center gap-3 active:scale-[0.98]">
                  Checkout Now
                </button>

                <p className="text-center text-gray-400 text-[11px] mt-6 flex items-center justify-center gap-1 leading-relaxed">
                  <ShieldCheck className="w-3 h-3" /> 
                  SSL Encrypted & 100% Secure Transactions
                </p>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}