import { Link } from 'react-router-dom';
import { Phone, MessageSquare, CalendarCheck, MapPin, Clock, Shield, Car, Plane, Users, Package } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: Plane,
      title: 'RDU Airport Service',
      description: 'Professional airport transportation with flat rates and on-time service.',
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Round-the-clock service for all your transportation needs.',
    },
    {
      icon: Shield,
      title: 'Reliable & Safe',
      description: 'Professional drivers committed to your safety and comfort.',
    },
    {
      icon: Car,
      title: 'Sedans & Vans',
      description: 'Multiple vehicle options to accommodate your group size.',
    },
    {
      icon: MapPin,
      title: 'Long-Distance',
      description: 'Comfortable transportation for trips near and far.',
    },
    {
      icon: Users,
      title: 'Corporate Accounts',
      description: 'Special rates and dedicated service for businesses.',
    },
  ];

  const serviceAreas = [
    'Raleigh',
    'Durham',
    'Chapel Hill',
    'Cary',
    'Apex',
    'Holly Springs',
    'Pittsboro',
    'RDU Airport',
    'Research Triangle Park',
  ];

  return (
    <div className="font-inter">
      <section
        className="relative bg-deep-navy text-white py-20 lg:py-32 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/images/hero-sedan.png")' }}
      >
        {/* Dark Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-deep-navy/95 via-deep-navy/80 to-deep-navy/60"></div>

        {/* Decorative blurs */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-taxi-yellow rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-blue rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-taxi-yellow/10 border border-taxi-yellow/30 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
                <Plane className="w-4 h-4 text-taxi-yellow" />
                <span className="text-taxi-yellow font-medium text-sm">Serving the Triangle Since 1990</span>
              </div>

              <h1 className="font-poppins font-bold text-4xl sm:text-5xl lg:text-6xl mb-6 leading-tight text-white drop-shadow-lg">
                Reliable Taxi & Airport Transportation <span className="text-taxi-yellow">Across the Triangle</span>
              </h1>

              <p className="text-xl text-gray-200 mb-4 drop-shadow-md">
                Serving Raleigh, Durham, Chapel Hill, Cary, Apex, Holly Springs, Pittsboro, RDU & RTP
              </p>

              <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0 drop-shadow-md">
                Professional, on-time transportation service with competitive flat rates and corporate account options.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-6">
                <a
                  href="tel:9199246908"
                  className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-taxi-yellow hover:bg-yellow-500 text-deep-navy font-medium px-8 py-4 rounded-lg transition-all hover:scale-105 shadow-xl"
                >
                  <Phone className="w-5 h-5" />
                  <span className="text-lg">Call Now</span>
                </a>
                <a
                  href="sms:9199246908"
                  className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-sky-blue hover:bg-blue-500 text-white font-medium px-8 py-4 rounded-lg transition-all hover:scale-105 shadow-xl"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span className="text-lg">Text Us</span>
                </a>
                <Link
                  to="/reservation"
                  className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-white hover:bg-gray-100 text-deep-navy font-medium px-8 py-4 rounded-lg transition-all hover:scale-105 shadow-xl"
                >
                  <CalendarCheck className="w-5 h-5" />
                  <span className="text-lg">Reserve</span>
                </Link>
              </div>

              <div className="flex items-center justify-center lg:justify-start space-x-2 text-taxi-yellow drop-shadow-md">
                <Clock className="w-5 h-5" />
                <span className="text-lg font-medium">Available 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-deep-navy rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 h-64 lg:h-96 relative">
              <img
                src="/images/discount-promotion.png"
                alt="10% Discount Promotion"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-deep-navy via-transparent to-transparent hidden lg:block"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-transparent to-transparent lg:hidden"></div>
            </div>

            <div className="w-full lg:w-1/2 p-8 lg:p-12 text-center lg:text-left">
              <div className="inline-block bg-taxi-yellow text-deep-navy font-bold px-4 py-1 rounded-full mb-4">
                SPECIAL OFFER
              </div>
              <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-white mb-6">
                10% Discount for Seniors, Military, and Students*
              </h2>
              <p className="text-xl text-gray-300 mb-8 italic">
                * Available from 7am to 7pm, Monday through Sunday.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="tel:9199246908"
                  className="flex items-center space-x-2 bg-taxi-yellow hover:bg-yellow-500 text-deep-navy font-medium px-6 py-3 rounded-lg transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call to Redeem</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Long Distance Trips Section */}
      <section className="py-16 bg-soft-gray border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <div className="inline-block bg-sky-blue text-white font-bold px-4 py-1 rounded-full mb-4">
                AVAILABLE NOW
              </div>
              <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-deep-navy mb-6">
                Long Distance Trips
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Need to go further? We provide reliable long-distance transportation to destinations across North Carolina and beyond. Whether it's a trip to the beach, mountains, or another city, ride in comfort with AAction Taxi Cab.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-taxi-yellow" />
                  <span className="text-gray-700 text-lg">Travel to Charlotte, Greensboro, Wilmington, and more</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Car className="w-5 h-5 text-taxi-yellow" />
                  <span className="text-gray-700 text-lg">Comfortable vehicles for long journeys</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-taxi-yellow" />
                  <span className="text-gray-700 text-lg">Competitive flat rates available</span>
                </li>
              </ul>
              <a
                href="tel:9199246908"
                className="inline-flex items-center space-x-2 bg-deep-navy hover:bg-blue-900 text-white font-medium px-8 py-4 rounded-lg transition-all"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="bg-white p-2 rounded-2xl shadow-xl">
                <img
                  src="/images/hero-sedan.png" // Reusing hero image or placeholder if needed
                  alt="Long Distance Travel"
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-deep-navy mb-4">
              Why Choose AAction Taxi Cab?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional transportation service you can trust for all your travel needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-soft-gray rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-200"
              >
                <div className="bg-taxi-yellow rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-deep-navy" />
                </div>
                <h3 className="font-poppins font-semibold text-xl text-deep-navy mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-deep-navy mb-6">
                Areas We Serve in the Triangle
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We provide comprehensive transportation services throughout the Triangle area of North Carolina, ensuring you get where you need to go safely and on time.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {serviceAreas.map((area, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 bg-white rounded-lg p-3 shadow-sm"
                  >
                    <MapPin className="w-5 h-5 text-taxi-yellow flex-shrink-0" />
                    <span className="font-medium text-dark-slate">{area}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/services"
                className="inline-flex items-center space-x-2 bg-deep-navy hover:bg-blue-900 text-white font-medium px-6 py-3 rounded-lg transition-colors"
              >
                <span>View All Services</span>
                <Package className="w-5 h-5" />
              </Link>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-taxi-yellow">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-taxi-yellow rounded-full mb-4">
                  <Plane className="w-8 h-8 text-deep-navy" />
                </div>
                <h3 className="font-poppins font-bold text-2xl text-deep-navy mb-2">
                  RDU Airport Transportation
                </h3>
                <p className="text-gray-600">
                  Flat rates available from RDU to major destinations
                </p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-700">On-time pickup guaranteed</span>
                  <div className="w-2 h-2 bg-taxi-yellow rounded-full"></div>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-700">Flight tracking included</span>
                  <div className="w-2 h-2 bg-taxi-yellow rounded-full"></div>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-gray-700">Transparent flat rates</span>
                  <div className="w-2 h-2 bg-taxi-yellow rounded-full"></div>
                </div>
              </div>

              <Link
                to="/flat-rates"
                className="block w-full text-center bg-taxi-yellow hover:bg-yellow-500 text-deep-navy font-medium py-3 rounded-lg transition-colors"
              >
                View Flat Rates from RDU
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-deep-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl mb-6">
              Ready to Book Your Ride?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Call us now or make an online reservation for fast, reliable transportation service.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:9199246908"
                className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-taxi-yellow hover:bg-yellow-500 text-deep-navy font-medium px-8 py-4 rounded-lg transition-all hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                <span className="text-lg">(919) 924-6908</span>
              </a>
              <Link
                to="/reservation"
                className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-white hover:bg-gray-100 text-deep-navy font-medium px-8 py-4 rounded-lg transition-all hover:scale-105"
              >
                <CalendarCheck className="w-5 h-5" />
                <span className="text-lg">Book Online</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
