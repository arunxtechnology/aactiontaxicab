import { useState, useRef, useEffect } from 'react';
import { Phone, CalendarCheck, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import RateCalculator from '../components/RateCalculator';

// EmailJS Configuration - You'll need to set these up at https://www.emailjs.com/
// Free tier: 200 emails/month, works on any hosting platform
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

const Reservation = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [calculatedDistance, setCalculatedDistance] = useState<number | null>(null);
  const [calculatedFare, setCalculatedFare] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    confirmationMethod: '',
    email: '',
    phone: '',
    pickupStreet: '',
    pickupStreet2: '',
    pickupCity: '',
    pickupState: 'North Carolina',
    pickupZip: '',
    destStreet: '',
    destCity: '',
    destState: 'North Carolina',
    destZip: '',
    pickupDate: '',
    pickupHour: '',
    pickupMinute: '',
    pickupPeriod: 'AM',
    passengers: '1',
    comments: '',
    isAirportTrip: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error when user starts typing
    if (submitError) setSubmitError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    // Format the data for the email template
    const pickupTime = `${formData.pickupHour}:${formData.pickupMinute} ${formData.pickupPeriod}`;
    const pickupAddress = `${formData.pickupStreet}${formData.pickupStreet2 ? ', ' + formData.pickupStreet2 : ''}, ${formData.pickupCity}, ${formData.pickupState} ${formData.pickupZip}`;
    const destAddress = `${formData.destStreet}, ${formData.destCity}, ${formData.destState} ${formData.destZip}`;

    const templateParams = {
      customer_name: formData.name,
      customer_phone: formData.phone,
      customer_email: formData.email || 'Not provided',
      confirmation_method: formData.confirmationMethod,
      pickup_address: pickupAddress,
      destination_address: destAddress,
      pickup_date: formData.pickupDate,
      pickup_time: pickupTime,
      passengers: formData.passengers,
      is_airport_trip: formData.isAirportTrip ? 'Yes (+$5 airport fee)' : 'No',
      // Include calculated values
      calculated_distance: calculatedDistance ? `${calculatedDistance.toFixed(1)} miles` : 'Not calculated',
      estimated_fare: calculatedFare ? `$${calculatedFare.toFixed(2)}` : 'Not calculated',
      comments: formData.comments || 'None',
      to_email: 'bounkibakhalid@gmail.com', // Owner's email
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Email error:', error);
      setSubmitError('Failed to submit reservation. Please call us directly at (919) 924-6908.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="font-inter min-h-screen bg-soft-gray py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="font-poppins font-bold text-3xl sm:text-4xl text-deep-navy mb-4">
              Reservation Submitted!
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Thank you for choosing AAction Taxi Cab. We have received your reservation request and will contact you shortly via your preferred method to confirm the details.
            </p>
            <div className="bg-soft-gray rounded-lg p-6 mb-6">
              {calculatedFare && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                  <h3 className="text-blue-900 font-semibold mb-2">Estimated Fare</h3>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-gray-600 text-xs">Distance</p>
                      <p className="text-blue-800 font-bold">{calculatedDistance?.toFixed(1)} miles</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-xs">Total</p>
                      <p className="text-blue-800 font-bold text-xl">${calculatedFare.toFixed(2)}</p>
                    </div>
                  </div>
                  {formData.isAirportTrip && (
                    <p className="text-blue-600 text-xs mt-2 text-center">
                      (Includes $5.00 Airport Fee)
                    </p>
                  )}
                </div>
              )}

              <div className="space-y-2 text-left">
                <p className="text-gray-700">
                  <strong className="inline-block w-24">Name:</strong> {formData.name}
                </p>
                <p className="text-gray-700">
                  <strong className="inline-block w-24">Date:</strong> {formData.pickupDate}
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Pickup Time:</strong> {formData.pickupHour}:{formData.pickupMinute} {formData.pickupPeriod}
                </p>
                <p className="text-gray-700">
                  <strong>Passengers:</strong> {formData.passengers}
                </p>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <p className="text-gray-600 mb-4">Questions about your reservation?</p>
                <a
                  href="tel:9199246908"
                  className="inline-flex items-center space-x-2 bg-taxi-yellow hover:bg-yellow-500 text-deep-navy font-medium px-6 py-3 rounded-lg transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (919) 924-6908</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="font-inter">
      <section className="bg-gradient-to-br from-deep-navy via-blue-900 to-deep-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-poppins font-bold text-4xl sm:text-5xl mb-6">
              Make a <span className="text-taxi-yellow">Reservation</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Book your ride with AAction Taxi Cab - fast, reliable, and professional service
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-soft-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <RateCalculator
              pickupAddress={`${formData.pickupStreet}${formData.pickupStreet2 ? ', ' + formData.pickupStreet2 : ''}, ${formData.pickupCity}, ${formData.pickupState} ${formData.pickupZip}`.trim()}
              destAddress={`${formData.destStreet}, ${formData.destCity}, ${formData.destState} ${formData.destZip}`.trim()}
              isAirportTrip={formData.isAirportTrip}
              onCalculate={(distance, fare) => {
                setCalculatedDistance(distance);
                setCalculatedFare(fare);
              }}
            />
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="block font-semibold text-dark-slate mb-2">
                  Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-taxi-yellow focus:border-transparent transition-all"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block font-semibold text-dark-slate mb-2">
                  How do you want to be notified/contacted regarding this reservation? <span className="text-red-600">*</span>
                </label>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="confirmationMethod"
                      value="Email"
                      checked={formData.confirmationMethod === 'Email'}
                      onChange={handleChange}
                      required
                      className="w-5 h-5 text-taxi-yellow focus:ring-taxi-yellow"
                    />
                    <span className="text-gray-700">Email</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="confirmationMethod"
                      value="Text Message"
                      checked={formData.confirmationMethod === 'Text Message'}
                      onChange={handleChange}
                      required
                      className="w-5 h-5 text-taxi-yellow focus:ring-taxi-yellow"
                    />
                    <span className="text-gray-700">Text Message</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="confirmationMethod"
                      value="Phone Call"
                      checked={formData.confirmationMethod === 'Phone Call'}
                      onChange={handleChange}
                      required
                      className="w-5 h-5 text-taxi-yellow focus:ring-taxi-yellow"
                    />
                    <span className="text-gray-700">Phone Call</span>
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-semibold text-dark-slate mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-taxi-yellow focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-dark-slate mb-2">
                    Phone <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-taxi-yellow focus:border-transparent transition-all"
                    placeholder="(919) 123-4567"
                  />
                </div>
              </div>

              <div className="bg-yellow-50 border border-taxi-yellow/30 rounded-lg p-4">
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="isAirportTrip"
                    checked={formData.isAirportTrip}
                    onChange={(e) => setFormData({ ...formData, isAirportTrip: e.target.checked })}
                    className="w-5 h-5 text-taxi-yellow focus:ring-taxi-yellow mt-0.5 rounded"
                  />
                  <div>
                    <span className="font-semibold text-dark-slate">This is an airport trip</span>
                    <p className="text-sm text-gray-600 mt-1">
                      Check this if your trip starts or ends at RDU Airport. An additional $5 airport fee will be added to your fare.
                    </p>
                  </div>
                </label>
              </div>

              <div className="border-t-2 border-taxi-yellow pt-8">
                <h3 className="font-poppins font-semibold text-2xl text-deep-navy mb-6">Pickup Address</h3>

                <div className="space-y-6">
                  <div>
                    <label className="block font-semibold text-dark-slate mb-2">
                      Street Address <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      name="pickupStreet"
                      value={formData.pickupStreet}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-taxi-yellow focus:border-transparent transition-all"
                      placeholder="123 Main Street"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-dark-slate mb-2">
                      Address Line 2
                    </label>
                    <input
                      type="text"
                      name="pickupStreet2"
                      value={formData.pickupStreet2}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-taxi-yellow focus:border-transparent transition-all"
                      placeholder="Apt, Suite, Unit, etc."
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block font-semibold text-dark-slate mb-2">
                        City <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        name="pickupCity"
                        value={formData.pickupCity}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-taxi-yellow focus:border-transparent transition-all"
                        placeholder="Raleigh"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-dark-slate mb-2">
                        State <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        name="pickupState"
                        value={formData.pickupState}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-taxi-yellow focus:border-transparent transition-all"
                        readOnly
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-dark-slate mb-2">
                        ZIP Code <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        name="pickupZip"
                        value={formData.pickupZip}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-taxi-yellow focus:border-transparent transition-all"
                        placeholder="27601"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t-2 border-taxi-yellow pt-8">
                <h3 className="font-poppins font-semibold text-2xl text-deep-navy mb-6">Destination Address</h3>

                <div className="space-y-6">
                  <div>
                    <label className="block font-semibold text-dark-slate mb-2">
                      Street Address <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      name="destStreet"
                      value={formData.destStreet}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-taxi-yellow focus:border-transparent transition-all"
                      placeholder="456 Airport Blvd"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block font-semibold text-dark-slate mb-2">
                        City <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        name="destCity"
                        value={formData.destCity}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-taxi-yellow focus:border-transparent transition-all"
                        placeholder="Durham"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-dark-slate mb-2">
                        State <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        name="destState"
                        value={formData.destState}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-taxi-yellow focus:border-transparent transition-all"
                        readOnly
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-dark-slate mb-2">
                        ZIP Code <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        name="destZip"
                        value={formData.destZip}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-taxi-yellow focus:border-transparent transition-all"
                        placeholder="27560"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t-2 border-taxi-yellow pt-8">
                <h3 className="font-poppins font-semibold text-2xl text-deep-navy mb-6">Pickup Details</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block font-semibold text-dark-slate mb-2">
                      Pickup Date (MM/DD/YYYY) <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="date"
                      name="pickupDate"
                      value={formData.pickupDate}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-taxi-yellow focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-dark-slate mb-2">
                      Number of Passengers <span className="text-red-600">*</span>
                    </label>
                    <select
                      name="passengers"
                      value={formData.passengers}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-taxi-yellow focus:border-transparent transition-all"
                    >
                      <option value="1">1 Passenger</option>
                      <option value="2">2 Passengers</option>
                      <option value="3">3 Passengers</option>
                      <option value="4">4 Passengers</option>
                      <option value="5">5 Passengers</option>
                      <option value="6">6 Passengers</option>
                      <option value="7">7 Passengers</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-dark-slate mb-2">
                    Pickup Time <span className="text-red-600">*</span>
                  </label>
                  <div className="grid grid-cols-3 gap-4">
                    <select
                      name="pickupHour"
                      value={formData.pickupHour}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-taxi-yellow focus:border-transparent transition-all"
                    >
                      <option value="">Hour</option>
                      {Array.from({ length: 12 }, (_, i) => i + 1).map((hour) => (
                        <option key={hour} value={hour.toString().padStart(2, '0')}>
                          {hour}
                        </option>
                      ))}
                    </select>

                    <select
                      name="pickupMinute"
                      value={formData.pickupMinute}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-taxi-yellow focus:border-transparent transition-all"
                    >
                      <option value="">Minute</option>
                      <option value="00">00</option>
                      <option value="15">15</option>
                      <option value="30">30</option>
                      <option value="45">45</option>
                    </select>

                    <select
                      name="pickupPeriod"
                      value={formData.pickupPeriod}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-taxi-yellow focus:border-transparent transition-all"
                    >
                      <option value="AM">AM</option>
                      <option value="PM">PM</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-dark-slate mb-2">
                  Additional Comments
                </label>
                <textarea
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-taxi-yellow focus:border-transparent transition-all resize-none"
                  placeholder="Special requests, luggage information, or any other details we should know..."
                ></textarea>
              </div>

              <div className="border-t border-gray-200 pt-8">
                {/* Error Message */}
                {submitError && (
                  <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-red-700">{submitError}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center space-x-2 font-semibold text-lg px-8 py-4 rounded-lg transition-all shadow-lg ${isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-taxi-yellow hover:bg-yellow-500 text-deep-navy hover:scale-[1.02]'
                    }`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-6 h-6 animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <CalendarCheck className="w-6 h-6" />
                      <span>Submit Reservation</span>
                    </>
                  )}
                </button>
                <p className="text-center text-gray-600 mt-4">
                  AAction Taxi Cab - <a href="tel:9199246908" className="text-taxi-yellow hover:underline font-semibold">(919) 924-6908</a>
                </p>
              </div>
            </form>
          </div>

          <div className="mt-8 bg-blue-50 border-l-4 border-sky-blue p-6 rounded-lg">
            <h3 className="font-semibold text-lg text-deep-navy mb-2">Need Immediate Service?</h3>
            <p className="text-gray-700 mb-4">
              For same-day or immediate pickup, please call us directly at <a href="tel:9199246908" className="text-taxi-yellow hover:underline font-semibold">(919) 924-6908</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reservation;
