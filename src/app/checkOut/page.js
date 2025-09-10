"use client";

import Image from "next/image";
import bgImg from "../assets/images/Section.png"; // 👉 replace with your image path

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Checkout Banner */}
      <section className="relative w-full h-56 md:h-64 lg:h-72 flex items-center justify-center">
        <Image
          src={bgImg}
          alt="Checkout background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-blue-600/60" />
        <div className="relative text-center text-white px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Check Out</h1>
          <p className="text-sm md:text-base">
            Home / E-commerce / Shop /{" "}
            <span className="text-yellow-300">Check Out</span>
          </p>
        </div>
      </section>

      {/* Billing Details and Order Summary */}
      <section className="max-w-6xl mx-auto p-4 md:p-8 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Billing Details Form */}
          <div>
            <h2 className="text-xl font-bold mb-4">Billing details</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-3 border rounded"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-3 border rounded"
              />
              <input
                type="text"
                placeholder="Company Name (Optional)"
                className="w-full p-3 border rounded"
              />
              <select className="w-full p-3 border rounded">
                <option value="">Select State</option>
                <option value="karnataka">Karnataka</option>
              </select>
              <input
                type="text"
                placeholder="Street Address"
                className="w-full p-3 border rounded"
              />
              <input
                type="text"
                placeholder="Town / City"
                className="w-full p-3 border rounded"
              />
              <select className="w-full p-3 border rounded">
                <option value="">Select Province</option>
                <option value="western">Western Province</option>
              </select>
              <input
                type="text"
                placeholder="ZIP Code"
                className="w-full p-3 border rounded"
              />
              <input
                type="text"
                placeholder="Phone"
                className="w-full p-3 border rounded"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 border rounded"
              />
              <textarea
                placeholder="Additional information"
                rows={4}
                className="w-full p-3 border rounded"
              />
            </form>
          </div>

          {/* Order Summary and Payment */}
          <div>
            <h2 className="text-xl font-bold mb-4">Your Order</h2>
            <div className="bg-white p-4 rounded shadow space-y-4">
              <div className="flex justify-between">
                <span>Electrical Wiring × 1</span>
                <span>₹3,500.00</span>
              </div>
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹3,500.00</span>
              </div>
              <div className="flex justify-between font-bold text-blue-700">
                <span>Total</span>
                <span>Rs. ₹3,50.00</span>
              </div>

              <hr />

              <div>
                <h3 className="font-semibold mb-2">Payment Methods</h3>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="payment" defaultChecked />
                    <span>Direct Bank Transfer</span>
                  </label>
                  <p className="text-sm text-gray-500">
                    Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                  </p>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="payment" />
                    <span>Cash On Delivery</span>
                  </label>
                </div>
              </div>

              <p className="text-xs text-gray-500">
                Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <a href="#" className="underline text-blue-600">privacy policy</a>.
              </p>

              <button className="w-full bg-yellow-500 text-white py-3 rounded hover:bg-yellow-600 transition">
                Place order
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
