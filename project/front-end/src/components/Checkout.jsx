import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../redux/reducer/cartSlice";
import { CreditCard, Calendar, Lock, CheckCircle, Loader } from "lucide-react";

const Checkout = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const subtotal = cart.reduce(
    (acc, item) =>
      acc +
      (item.price - (item.price * item.discountPercentage) / 100) *
        item.quantity,
    0
  );
  const total = subtotal;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate payment processing
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      dispatch(clearCart());

      // Redirect after showing success message
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }, 2000);
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md w-full animate-fade-in-up">
          <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Payment Successful!
          </h2>
          <p className="text-gray-500 mb-8">
            Thank you for your purchase. You will be redirected to the home page
            shortly.
          </p>
          <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 overflow-hidden">
            <div className="bg-green-500 h-1.5 rounded-full animate-progress"></div>
          </div>
        </div>
      </div>
    );
  }

  if (cart.length === 0 && !success) {
    // Handle direct access to checkout with empty cart
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-bold text-gray-900">
            Your cart is empty
          </h2>
          <button
            onClick={() => navigate("/")}
            className="mt-4 text-cyan-600 hover:underline"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Payment Form */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <CreditCard className="mr-2 h-6 w-6 text-cyan-600" />
              Payment Details
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cardholder Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Card Number
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="cardNumber"
                    required
                    maxLength="19"
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all"
                    placeholder="0000 0000 0000 0000"
                    value={formData.cardNumber}
                    onChange={handleChange}
                  />
                  <CreditCard className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Expiration Date
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="expiry"
                      required
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all"
                      placeholder="MM/YY"
                      value={formData.expiry}
                      onChange={handleChange}
                    />
                    <Calendar className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    CVV
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="cvv"
                      required
                      maxLength="3"
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all"
                      placeholder="123"
                      value={formData.cvv}
                      onChange={handleChange}
                    />
                    <Lock className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-6 bg-black text-white py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:hover:translate-y-0 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {loading ? (
                  <>
                    <Loader className="h-5 w-5 animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <span>Pay ${total.toFixed(2)}</span>
                )}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-fit">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Order Details
            </h2>
            <div className="space-y-4 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center bg-gray-50 p-3 rounded-lg"
                >
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 bg-white rounded-md overflow-hidden">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 line-clamp-1 w-40">
                        {item.title}
                      </p>
                      <p className="text-sm text-gray-500">
                        Qty: {item.quantity}
                      </p>
                    </div>
                  </div>
                  <p className="font-semibold text-gray-900">
                    $
                    {(
                      (item.price -
                        (item.price * item.discountPercentage) / 100) *
                      item.quantity
                    ).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 mt-6 pt-6 space-y-3">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span className="font-medium text-green-600">Free</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-lg font-bold text-gray-900">Total</span>
                <span className="text-2xl font-bold text-cyan-600">
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
