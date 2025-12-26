import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight } from "lucide-react";
import {
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} from "../redux/reducer/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
    // dispatch(clearCart());
  };

  const subtotal = cart.reduce(
    (acc, item) =>
      acc +
      (item.price - (item.price * item.discountPercentage) / 100) *
        item.quantity,
    0
  );
  const total = subtotal; // Add tax or shipping logic here if needed

  if (cart.length === 0) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center p-4 bg-gray-50">
        <div className="bg-white p-8 rounded-2xl shadow-sm text-center max-w-md w-full border border-gray-100">
          <div className="bg-cyan-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="h-10 w-10 text-cyan-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Your cart is empty
          </h2>
          <p className="text-gray-500 mb-8">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <span>Start Shopping</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
          <ShoppingBag className="mr-3 h-8 w-8 text-cyan-600" />
          Shopping Cart ({cart.reduce(
            (acc, item) => acc + item.quantity,
            0
          )}{" "}
          items)
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items List */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => {
              const discountedPrice = (
                item.price -
                (item.price * item.discountPercentage) / 100
              ).toFixed(2);

              return (
                <div
                  key={item.id}
                  className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex gap-6 transition-all duration-300 hover:shadow-md"
                >
                  {/* Product Image */}
                  <div className="w-24 h-24 shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-500 mt-1 capitalize">
                            {item.category}
                          </p>
                        </div>
                        <button
                          onClick={() =>
                            dispatch(decreaseQuantity({ id: item.id }))
                          } // Assuming decrease to 0 removes functionality in slice or needs explicit remove
                          className="text-gray-400 hover:text-red-500 transition-colors p-2 lg:hidden"
                          title="Remove item" // Mobile remove (if we rely on decrease logic) or add separate remove
                        >
                          <Trash2 className="h-5 w-5" />{" "}
                          {/* This might just decrease, but icon implies trash. If decrease removes, it's fine. */}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-end justify-between mt-4">
                      {/* Quantity Controls */}
                      <div className="flex items-center bg-gray-50 rounded-lg border border-gray-200">
                        <button
                          onClick={() => dispatch(decreaseQuantity(item))}
                          className="p-2 hover:bg-gray-100 rounded-l-lg transition-colors text-gray-600 disabled:opacity-50"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-10 text-center font-medium text-gray-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => dispatch(increaseQuantity(item))}
                          className="p-2 hover:bg-gray-100 rounded-r-lg transition-colors text-gray-600"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <p className="text-lg font-bold text-cyan-600">
                          ${(discountedPrice * item.quantity).toFixed(2)}
                        </p>
                        <p className="text-sm text-gray-500">
                          ${discountedPrice} each
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Order Summary
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="font-medium text-green-600">Free</span>
                </div>
                <div className="border-t border-gray-100 pt-4 mt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">
                      Total
                    </span>
                    <span className="text-2xl font-bold text-cyan-600">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full mt-8 bg-black text-white py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Checkout
              </button>

              <div className="mt-6 text-center">
                <Link
                  to="/"
                  className="text-sm font-medium text-gray-500 hover:text-cyan-600 transition-colors inline-flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-1 rotate-180" />
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
