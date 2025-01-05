"use client";


import React, { useState } from "react";
import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcAmex } from "react-icons/fa";
export default function Payment() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Payment Data:", formData);
    alert("Payment submitted successfully!");
    // يمكنك هنا إرسال البيانات إلى الخادم باستخدام axios أو fetch
  };

  return (
<div div className=" bg-gray-100">
    <div className="min-h-screen flex items-center justify-center  bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg mb-7 mt-7 shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6">Payment Form</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-gray-700">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>

          {/* City */}
          <div>
            <label className="block text-gray-700">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>

          {/* Postal Code */}
          <div>
            <label className="block text-gray-700">Postal Code</label>
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>

          {/* Card Number */}
          <div>
            <label className="block text-gray-700">Card Number</label>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>

          {/* Expiry Date */}
          <div>
            <label className="block text-gray-700">Expiry Date</label>
            <input
              type="text"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
              placeholder="MM/YY"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>

          {/* CVV */}
          <div>
            <label className="block text-gray-700">CVV</label>
            <input
              type="text"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-800 transition duration-300"
          >
            Submit Payment
          </button>
        </form>
      </div>
    </div>
      <h2 className="text-2xl  ml-7 font-bold mb-4">Payment Details</h2>
      <div className="flex space-x-4  ml-7">
        <FaCcVisa size={40} className="text-blue-600" />
        <FaCcMastercard size={40} className="text-red-600" />
        <FaCcPaypal size={40} className="text-blue-500" />
        <FaCcAmex size={40} className="text-green-600" />
      </div>
    </div>
  );
}

