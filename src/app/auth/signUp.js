"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import backimg from "../assets/images/auth/Backgroundimg1.png";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);

  // State for inputs
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);

  // State for errors
  const [errors, setErrors] = useState({});

  // Validation logic
  const validateEmail = (value) => {
    if (!value.includes("@")) {
      return "Email must contain @";
    }
    return "";
  };

  const validatePhone = (value) => {
    if (!/^[9876]\d{9}$/.test(value)) {
      return "Phone number must start with 9, 8, 7, or 6 and be 10 digits";
    }
    return "";
  };

  const validatePassword = (value) => {
    if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(value)) {
      return "Password must have 8+ chars, 1 uppercase, 1 number, 1 special char";
    }
    return "";
  };

  // Handle validations live
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setErrors((prev) => ({ ...prev, email: validateEmail(value) }));
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setPhone(value);
    setErrors((prev) => ({ ...prev, phone: validatePhone(value) }));
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setErrors((prev) => ({ ...prev, password: validatePassword(value) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailError = validateEmail(email);
    const phoneError = validatePhone(phone);
    const passwordError = validatePassword(password);
    const agreeError = !agree ? "You must agree to the terms" : "";

    setErrors({
      email: emailError,
      phone: phoneError,
      password: passwordError,
      agree: agreeError,
    });

    if (!emailError && !phoneError && !passwordError && !agreeError) {
      alert("✅ Sign Up Successful!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-md rounded-lg flex max-w-4xl w-full overflow-hidden">
        {/* Left Side Image */}
        <div className="w-1/2 hidden md:block relative h-[600px]">
          <Image
            src={backimg}
            alt="Signup"
            fill
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Side Form */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center relative">
          {/* Close Button */}
          <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl">
            ✖
          </button>

          <h2 className="text-3xl font-semibold mb-8 text-gray-800 text-center">
            Sign Up
          </h2>

          <form onSubmit={handleSubmit}>
            {/* Email */}
            <input
              type="email"
              placeholder="mymail@gmail.com"
              value={email}
              onChange={handleEmailChange}
              className="w-full border border-gray-300 rounded-md px-4 py-3 mb-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mb-2">{errors.email}</p>
            )}

            {/* Phone */}
            <input
              type="tel"
              placeholder="+91"
              value={phone}
              onChange={handlePhoneChange}
              maxLength={10}
              className="w-full border border-gray-300 rounded-md px-4 py-3 mb-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mb-2">{errors.phone}</p>
            )}

            {/* Password */}
            <div className="relative mb-1">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500"
              >
                👁
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mb-2">{errors.password}</p>
            )}

            {/* Terms & Conditions */}
            <label className="flex items-center mb-2 text-sm text-gray-600">
              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                className="mr-2"
              />
              I agree with{" "}
              <Link href="#" className="text-blue-600 ml-1 hover:underline">
                Terms & Conditions
              </Link>
            </label>
            {errors.agree && (
              <p className="text-red-500 text-sm mb-4">{errors.agree}</p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition"
            >
              SIGN UP
            </button>
          </form>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-600 hover:underline">
              LOG IN
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}


