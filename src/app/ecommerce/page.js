"use client";
import { useState } from "react";
import Image from "next/image";
import backgroundImage from "../assets/images/appointment/appointmentBackgroundImage.png";

export default function Ecommerce() {
  // Step 1: Array of products
  const products = [
    {
      id: 1,
      name: "Cement Mix",
      desc: "Strong Bond",
      price: "₹450 / bag",
      oldPrice: "₹500 / bag",
      image: "/src/app/assets/images/ecommerce/cement.png",
      tag: "Sale",
    },
    {
      id: 2,
      name: "Ready-Mix Concrete",
      desc: "Best Quality",
      price: "₹5,200 / m³",
      image: "/src/app/assets/images/ecommerce/concrete.png",
      tag: "New",
    },
    {
      id: 3,
      name: "Steel TMT Bars",
      desc: "Premium Strength",
      price: "₹68,000 / ton",
      oldPrice: "₹70,000 / ton",
      image: "/src/app/assets/images/ecommerce/steel.png",
    },
    {
      id: 4,
      name: "Clay Bricks",
      desc: "Eco Friendly",
      price: "₹8 / brick",
      image: "/src/app/assets/images/ecommerce/bricks.png",
    },
    // 👉 Add the remaining products here
  ];

  // Step 2: State for cart
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center justify-center">
        <Image
          src={backgroundImage}
          alt="Background"
          fill
          className="object-cover brightness-40"
          priority
        />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold text-white mb-2">E-Commerce</h1>
          <p className="text-sm text-gray-200">
            Home / <span className="text-white">E-Commerce</span>
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg overflow-hidden relative"
            >
              {/* Badge */}
              {product.tag && (
                <span className="absolute top-2 left-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded">
                  {product.tag}
                </span>
              )}

              {/* Product Image */}
              <div className="w-full h-48 relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h2 className="font-semibold text-lg">{product.name}</h2>
                <p className="text-sm text-gray-500">{product.desc}</p>
                <div className="mt-2">
                  <span className="text-blue-600 font-bold">{product.price}</span>
                  {product.oldPrice && (
                    <span className="ml-2 text-gray-400 line-through">
                      {product.oldPrice}
                    </span>
                  )}
                </div>

                {/* Buttons */}
                {cart.some((item) => item.id === product.id) ? (
                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="mt-4 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
                  >
                    Remove from Cart
                  </button>
                ) : (
                  <button
                    onClick={() => addToCart(product)}
                    className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
