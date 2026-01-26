import { Link } from 'react-router-dom';
import { Plane, Car, Briefcase, MapPin, ShoppingBag, Package, Truck, Users, Phone, CalendarCheck } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Plane,
      title: 'Airport / RDU Taxi Service',
      description: 'Professional airport transportation to and from Raleigh-Durham International Airport. Flight tracking, on-time pickup, and competitive flat rates available.',
      features: [
        'Flight tracking included',
        'Meet & greet service',
        'Flat rate options',
        '24/7 availability',
      ],
    },
    {
      icon: Car,
      title: 'Door-to-Door Transportation',
      description: 'Convenient pickup and drop-off service from any location in the Triangle area. Safe, reliable transportation to your exact destination.',
      features: [
        'Pickup from any address',
        'Direct to your destination',
        'Multiple stops available',
        'Real-time tracking',
      ],
    },
    {
      icon: Briefcase,
      title: 'Executive / VIP Transportation',
      description: 'Premium transportation service for executives and VIP clients. Professional, discrete, and always on time.',
      features: [
        'Professional chauffeurs',
        'Premium vehicles',
        'Confidential service',
        'Flexible scheduling',
      ],
    },
    {
      icon: MapPin,
      title: 'In-Town & Out-of-Town Transportation',
      description: 'Whether you need a ride across town or across the state, we provide reliable transportation for trips of any distance.',
      features: [
        'Local & long-distance',
        'Flat rate options',
        'Comfortable rides',
        'Experienced drivers',
      ],
    },
    {
      icon: ShoppingBag,
      title: 'Shopping Trips',
      description: 'Convenient transportation for shopping excursions. We wait while you shop and help you get your purchases home safely.',
      features: [
        'Wait time included',
        'Help with packages',
        'Multiple store stops',
        'Flexible scheduling',
      ],
    },
    {
      icon: Package,
      title: 'Medical & Lab Deliveries',
      description: 'Fast, secure delivery of medical specimens, lab samples, and other time-sensitive medical materials.',
      features: [
        'Secure handling',
        'Temperature control',
        'HIPAA compliant',
        'Direct delivery',
      ],
    },
    {
      icon: Truck,
      title: 'Parcel Deliveries',
      description: 'Reliable delivery service for packages, documents, and parcels throughout the Triangle area.',
      features: [
        'Same-day delivery',
        'Secure transport',
        'Proof of delivery',
        'Tracking available',
      ],
    },
    {
      icon: Package,
      title: 'Rush Document Deliveries',
      description: 'Urgent document delivery service for time-critical paperwork, contracts, and legal documents.',
      features: [
        'Immediate pickup',
        'Direct delivery',
        'Signature confirmation',
        'Real-time updates',
      ],
    },
    {
      icon: Users,
      title: 'Sedans & Vans',
      description: 'Multiple vehicle options to accommodate individuals, families, and groups of any size.',
      features: [
        '1-7 passengers',
        'Luggage space',
        'Clean vehicles',
        'Comfortable seating',
      ],
    },
  ];

  return (
    <div className="font-inter">
      <section className="bg-gradient-to-br from-deep-navy via-blue-900 to-deep-navy text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="font-poppins font-bold text-4xl sm:text-5xl mb-6">
                Our <span className="text-taxi-yellow">Transportation Services</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Comprehensive transportation solutions for all your needs in the Triangle area
              </p>
            </div>
            <div className="hidden lg:block">
              <img
                src="/images/airport-service.png"
                alt="Professional Airport Transportation"
                className="w-full h-64 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From airport transportation to document delivery, AAction Taxi Cab offers a complete range of professional transportation and delivery services. Every service is backed by our commitment to reliability, safety, and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-soft-gray rounded-xl p-8 hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-200"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="bg-taxi-yellow rounded-lg w-14 h-14 flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-7 h-7 text-deep-navy" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-2xl text-deep-navy mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>

                <div className="mt-6 pl-[72px]">
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-taxi-yellow rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-deep-navy mb-6">
                  Why Choose Our Services?
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-taxi-yellow rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0">
                      <span className="text-deep-navy font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-deep-navy mb-1">Professional Drivers</h3>
                      <p className="text-gray-600">Experienced, licensed, and background-checked drivers committed to your safety.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-taxi-yellow rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0">
                      <span className="text-deep-navy font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-deep-navy mb-1">24/7 Availability</h3>
                      <p className="text-gray-600">Round-the-clock service means we're always here when you need us.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-taxi-yellow rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0">
                      <span className="text-deep-navy font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-deep-navy mb-1">Transparent Pricing</h3>
                      <p className="text-gray-600">Clear, upfront pricing with no hidden fees or surprises.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-taxi-yellow rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0">
                      <span className="text-deep-navy font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-deep-navy mb-1">Clean, Maintained Vehicles</h3>
                      <p className="text-gray-600">Regularly serviced vehicles kept in excellent condition for your comfort.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-deep-navy to-blue-900 rounded-xl p-8 text-white">
                <h3 className="font-poppins font-bold text-2xl mb-6 text-center">
                  Ready to Book a Service?
                </h3>
                <p className="text-gray-300 text-center mb-6">
                  Contact us now to discuss your transportation needs or make a reservation.
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:9199246908"
                    className="flex items-center justify-center space-x-2 bg-taxi-yellow hover:bg-yellow-500 text-deep-navy font-medium px-6 py-4 rounded-lg transition-all hover:scale-105 w-full"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call (919) 924-6908</span>
                  </a>
                  <Link
                    to="/reservation"
                    className="flex items-center justify-center space-x-2 bg-white hover:bg-gray-100 text-deep-navy font-medium px-6 py-4 rounded-lg transition-all hover:scale-105 w-full"
                  >
                    <CalendarCheck className="w-5 h-5" />
                    <span>Make a Reservation</span>
                  </Link>
                </div>
                <div className="mt-6 pt-6 border-t border-white/20 text-center">
                  <p className="text-sm text-gray-300 mb-2">Special rates available for:</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Corporate Accounts</span>
                    <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Regular Customers</span>
                    <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Volume Discounts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-deep-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl mb-4">
              Need a Custom Transportation Solution?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We can create a customized transportation plan to meet your specific needs. Contact us to discuss your requirements.
            </p>
            <a
              href="tel:9199246908"
              className="inline-flex items-center space-x-2 bg-taxi-yellow hover:bg-yellow-500 text-deep-navy font-medium px-8 py-4 rounded-lg transition-all hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              <span className="text-lg">(919) 924-6908</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
