import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Check, ChevronRight, Shield, Calendar, CreditCard as CreditCardIcon, DollarSign } from 'lucide-react';

const Payment = () => {
  const navigate = useNavigate();
  
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    cardholderName: '',
    expiryDate: '',
    cvv: ''
  });
  const [billingAddress, setBillingAddress] = useState({
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: ''
  });
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  // Mock trip summary data
  const tripSummary = {
    destination: 'Paris, France',
    dates: 'June 15 - June 22, 2025',
    duration: 7,
    travelers: 2,
    car: {
      model: 'Toyota Camry',
      pricePerDay: 50
    },
    guide: {
      name: 'Maria Rodriguez',
      pricePerDay: 80
    },
    touristSpots: ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame Cathedral'],
    subtotal: 910,
    taxes: 91,
    total: 1001
  };

  const handleCardDetailsChange = (e) => {
    const { name, value } = e.target;
    setCardDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleBillingAddressChange = (e) => {
    const { name, value } = e.target;
    setBillingAddress(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would process the payment here
    console.log('Payment submitted:', {
      paymentMethod,
      cardDetails,
      billingAddress
    });
    
    // Navigate to the confirmation page
    navigate('/package-overview');
  };

  // Format card number with spaces
  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    
    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Payment</h1>
          
          {/* Step indicator */}
          <div className="mb-8">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-8 h-8 bg-green-600 text-white rounded-full">
                <Check size={16} />
              </div>
              <div className="h-1 flex-1 bg-green-600 mx-2"></div>
              <div className="flex items-center justify-center w-8 h-8 bg-green-600 text-white rounded-full">
                <Check size={16} />
              </div>
              <div className="h-1 flex-1 bg-green-600 mx-2"></div>
              <div className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full">
                3
              </div>
              <div className="h-1 flex-1 bg-gray-300 mx-2"></div>
              <div className="flex items-center justify-center w-8 h-8 bg-gray-300 text-gray-600 rounded-full">
                4
              </div>
            </div>
            <div className="flex justify-between mt-2 text-sm">
              <div className="text-green-600 font-medium">Trip Details</div>
              <div className="text-green-600 font-medium">Car & Guide</div>
              <div className="text-blue-600 font-medium">Payment</div>
              <div className="text-gray-500">Confirmation</div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Payment Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <div className="flex items-center mb-6">
                  <CreditCard className="text-blue-600 mr-3" size={24} />
                  <h2 className="text-xl font-semibold">Payment Method</h2>
                </div>
                
                <form onSubmit={handleSubmit}>
                  {/* Payment Method Selection */}
                  <div className="mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div
                        className={`border rounded-lg p-4 cursor-pointer ${
                          paymentMethod === 'credit-card' 
                            ? 'border-blue-500 bg-blue-50' 
                            : 'border-gray-200 hover:border-blue-300'
                        }`}
                        onClick={() => setPaymentMethod('credit-card')}
                      >
                        <div className="flex items-center">
                          <input
                            type="radio"
                            id="credit-card"
                            name="paymentMethod"
                            checked={paymentMethod === 'credit-card'}
                            onChange={() => setPaymentMethod('credit-card')}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                          />
                          <label htmlFor="credit-card" className="ml-2 flex items-center">
                            <CreditCardIcon size={18} className="mr-2" />
                            Credit Card
                          </label>
                        </div>
                      </div>
                      <div
                        className={`border rounded-lg p-4 cursor-pointer ${
                          paymentMethod === 'paypal' 
                            ? 'border-blue-500 bg-blue-50' 
                            : 'border-gray-200 hover:border-blue-300'
                        }`}
                        onClick={() => setPaymentMethod('paypal')}
                      >
                        <div className="flex items-center">
                          <input
                            type="radio"
                            id="paypal"
                            name="paymentMethod"
                            checked={paymentMethod === 'paypal'}
                            onChange={() => setPaymentMethod('paypal')}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                          />
                          <label htmlFor="paypal" className="ml-2">
                            PayPal
                          </label>
                        </div>
                      </div>
                      <div
                        className={`border rounded-lg p-4 cursor-pointer ${
                          paymentMethod === 'apple-pay' 
                            ? 'border-blue-500 bg-blue-50' 
                            : 'border-gray-200 hover:border-blue-300'
                        }`}
                        onClick={() => setPaymentMethod('apple-pay')}
                      >
                        <div className="flex items-center">
                          <input
                            type="radio"
                            id="apple-pay"
                            name="paymentMethod"
                            checked={paymentMethod === 'apple-pay'}
                            onChange={() => setPaymentMethod('apple-pay')}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                          />
                          <label htmlFor="apple-pay" className="ml-2">
                            Apple Pay
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {paymentMethod === 'credit-card' && (
                    <>
                      {/* Card Details */}
                      <div className="mb-6">
                        <h3 className="font-medium text-gray-700 mb-4">Card Details</h3>
                        <div className="space-y-4">
                          <div>
                            <label htmlFor="cardNumber" className="block text-gray-700 text-sm font-medium mb-2">
                              Card Number
                            </label>
                            <input
                              type="text"
                              id="cardNumber"
                              name="cardNumber"
                              value={cardDetails.cardNumber}
                              onChange={(e) => {
                                const formattedValue = formatCardNumber(e.target.value);
                                setCardDetails({...cardDetails, cardNumber: formattedValue});
                              }}
                              placeholder="1234 5678 9012 3456"
                              maxLength="19"
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              required
                            />
                          </div>
                          <div>
                            <label htmlFor="cardholderName" className="block text-gray-700 text-sm font-medium mb-2">
                              Cardholder Name
                            </label>
                            <input
                              type="text"
                              id="cardholderName"
                              name="cardholderName"
                              value={cardDetails.cardholderName}
                              onChange={handleCardDetailsChange}
                              placeholder="John Doe"
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              required
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label htmlFor="expiryDate" className="block text-gray-700 text-sm font-medium mb-2">
                                Expiry Date
                              </label>
                              <div className="relative">
                                <Calendar className="absolute left-3 top-3 text-gray-400" size={16} />
                                <input
                                  type="text"
                                  id="expiryDate"
                                  name="expiryDate"
                                  value={cardDetails.expiryDate}
                                  onChange={handleCardDetailsChange}
                                  placeholder="MM/YY"
                                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  required
                                />
                              </div>
                            </div>
                            <div>
                              <label htmlFor="cvv" className="block text-gray-700 text-sm font-medium mb-2">
                                CVV
                              </label>
                              <input
                                type="text"
                                id="cvv"
                                name="cvv"
                                value={cardDetails.cvv}
                                onChange={handleCardDetailsChange}
                                placeholder="123"
                                maxLength="4"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Billing Address */}
                      <div className="mb-6">
                        <h3 className="font-medium text-gray-700 mb-4">Billing Address</h3>
                        <div className="space-y-4">
                          <div>
                            <label htmlFor="address" className="block text-gray-700 text-sm font-medium mb-2">
                              Address
                            </label>
                            <input
                              type="text"
                              id="address"
                              name="address"
                              value={billingAddress.address}
                              onChange={handleBillingAddressChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              required
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label htmlFor="city" className="block text-gray-700 text-sm font-medium mb-2">
                                City
                              </label>
                              <input
                                type="text"
                                id="city"
                                name="city"
                                value={billingAddress.city}
                                onChange={handleBillingAddressChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                              />
                            </div>
                            <div>
                              <label htmlFor="state" className="block text-gray-700 text-sm font-medium mb-2">
                                State/Province
                              </label>
                              <input
                                type="text"
                                id="state"
                                name="state"
                                value={billingAddress.state}
                                onChange={handleBillingAddressChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label htmlFor="zipCode" className="block text-gray-700 text-sm font-medium mb-2">
                                ZIP/Postal Code
                              </label>
                              <input
                                type="text"
                                id="zipCode"
                                name="zipCode"
                                value={billingAddress.zipCode}
                                onChange={handleBillingAddressChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                              />
                            </div>
                            <div>
                              <label htmlFor="country" className="block text-gray-700 text-sm font-medium mb-2">
                                Country
                              </label>
                              <select
                                id="country"
                                name="country"
                                value={billingAddress.country}
                                onChange={handleBillingAddressChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                              >
                                <option value="">Select a country</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="UK">United Kingdom</option>
                                <option value="AU">Australia</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                                <option value="JP">Japan</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  
                  {/* Terms and Conditions */}
                  <div className="mb-6">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="terms"
                          name="terms"
                          type="checkbox"
                          checked={agreeToTerms}
                          onChange={() => setAgreeToTerms(!agreeToTerms)}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          required
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="terms" className="text-gray-700">
                          I agree to the <a href="#" className="text-blue-600 hover:text-blue-800">Terms and Conditions</a> and <a href="#" className="text-blue-600 hover:text-blue-800">Privacy Policy</a>
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  {/* Security Note */}
                  <div className="mb-6 flex items-center p-4 bg-gray-50 rounded-lg">
                    <Shield className="text-green-600 mr-3" size={20} />
                    <p className="text-sm text-gray-600">
                      Your payment information is encrypted and secure. We never store your full credit card details.
                    </p>
                  </div>
                  
                  {/* Submit Button */}
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={!agreeToTerms || (paymentMethod === 'credit-card' && (!cardDetails.cardNumber || !cardDetails.cardholderName || !cardDetails.expiryDate || !cardDetails.cvv))}
                      className={`flex items-center py-3 px-8 rounded-md font-bold ${
                        agreeToTerms && (paymentMethod !== 'credit-card' || (cardDetails.cardNumber && cardDetails.cardholderName && cardDetails.expiryDate && cardDetails.cvv))
                          ? 'bg-blue-600 hover:bg-blue-700 text-white'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      Complete Payment
                      <ChevronRight size={20} className="ml-2" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
                <h2 className="text-lg font-semibold mb-4">Trip Summary</h2>
                
                <div className="space-y-4">
                  <div>
                    <p className="font-medium">{tripSummary.destination}</p>
                    <p className="text-gray-600 text-sm">{tripSummary.dates}</p>
                    <p className="text-gray-600 text-sm">{tripSummary.duration} days, {tripSummary.travelers} travelers</p>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4">
                    <p className="font-medium mb-2">Selected Services:</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Car: {tripSummary.car.model}</span>
                        <span>${tripSummary.car.pricePerDay} × {tripSummary.duration} days</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Guide: {tripSummary.guide.name}</span>
                        <span>${tripSummary.guide.pricePerDay} × {tripSummary.duration} days</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4">
                    <p className="font-medium mb-2">Tourist Spots:</p>
                    <ul className="list-disc list-inside text-sm text-gray-600">
                      {tripSummary.touristSpots.map((spot, index) => (
                        <li key={index}>{spot}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between mb-2">
                      <span>Subtotal</span>
                      <span>${tripSummary.subtotal}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span>Taxes & Fees</span>
                      <span>${tripSummary.taxes}</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg mt-4">
                      <span>Total</span>
                      <span>${tripSummary.total}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;