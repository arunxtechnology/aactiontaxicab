import { Link } from 'react-router-dom';
import { Shield, Clock, Award, Users, Heart, MapPin, Phone, CalendarCheck } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Your safety is our top priority. All our drivers are thoroughly vetted and professionally trained.',
    },
    {
      icon: Clock,
      title: 'Always On Time',
      description: 'We understand the importance of punctuality. Count on us to get you where you need to be, when you need to be there.',
    },
    {
      icon: Award,
      title: 'Professional Service',
      description: 'Our commitment to excellence ensures you receive the highest quality transportation service every time.',
    },
    {
      icon: Heart,
      title: 'Customer-Focused',
      description: 'Your satisfaction drives everything we do. We go the extra mile to exceed your expectations.',
    },
  ];

  const stats = [
    { number: '30+', label: 'Years in Business' },
    { number: '10,000+', label: 'Happy Customers' },
    { number: '24/7', label: 'Service Availability' },
    { number: '100%', label: 'Customer Satisfaction' },
  ];

  return (
    <div className="font-inter">
      <section className="bg-gradient-to-br from-deep-navy via-blue-900 to-deep-navy text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="font-poppins font-bold text-4xl sm:text-5xl mb-6">
                About <span className="text-taxi-yellow">AAction Taxi Cab</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Serving the Triangle area with professional, reliable transportation since 1990
              </p>
            </div>
            <div className="hidden lg:block">
              <img
                src="/images/airport-service.png"
                alt="AAction Taxi Professional Service"
                className="w-full h-64 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-poppins font-bold text-4xl sm:text-5xl text-taxi-yellow mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-deep-navy mb-6">
                Your Trusted Transportation Partner
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  AAction Taxi Cab has been proudly serving the Triangle area of North Carolina for over three decades. What started as a single taxi has grown into a comprehensive transportation service trusted by thousands of residents and businesses throughout Raleigh, Durham, Chapel Hill, Cary, Apex, Holly Springs, Pittsboro, and the surrounding communities.
                </p>
                <p>
                  Our success is built on a foundation of reliability, professionalism, and an unwavering commitment to customer satisfaction. Whether you need a ride to RDU Airport, transportation for a special event, or regular corporate transportation services, we're here to serve you with the highest standards of excellence.
                </p>
                <p>
                  Every member of our team understands that when you choose AAction Taxi Cab, you're placing your trust in us. We take that responsibility seriously, ensuring every ride is safe, comfortable, and on time.
                </p>
              </div>
            </div>

            <div className="bg-soft-gray rounded-2xl p-8 border-2 border-taxi-yellow">
              <h3 className="font-poppins font-bold text-2xl text-deep-navy mb-6">Our Commitment</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-taxi-yellow rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Professional, courteous drivers who treat every passenger with respect</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-taxi-yellow rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Clean, well-maintained vehicles for your comfort and safety</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-taxi-yellow rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Transparent pricing with no hidden fees or surprises</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-taxi-yellow rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">On-time service that respects your schedule</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-taxi-yellow rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">24/7 availability for your convenience</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-taxi-yellow rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Competitive rates and special corporate discounts</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-deep-navy mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide every decision we make and every service we provide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-200"
              >
                <div className="bg-taxi-yellow rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-deep-navy" />
                </div>
                <h3 className="font-poppins font-semibold text-xl text-deep-navy mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-deep-navy to-blue-900 rounded-2xl p-8 sm:p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-poppins font-bold text-3xl sm:text-4xl mb-4">
                  Experience the AAction Difference
                </h2>
                <p className="text-xl text-gray-300 mb-6">
                  Join thousands of satisfied customers who trust us for their transportation needs.
                </p>
                <div className="flex items-start space-x-3 mb-4">
                  <MapPin className="w-6 h-6 text-taxi-yellow flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-lg">Serving the Entire Triangle</p>
                    <p className="text-gray-300">Raleigh, Durham, Chapel Hill, Cary, Apex, Holly Springs, Pittsboro, RDU & RTP</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 mb-4">
                  <Users className="w-6 h-6 text-taxi-yellow flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-lg">Multiple Vehicle Options</p>
                    <p className="text-gray-300">Sedans and vans available for any group size</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="w-6 h-6 text-taxi-yellow flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-lg">Airport Expertise</p>
                    <p className="text-gray-300">Specialized RDU airport transportation with flat rates</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="font-poppins font-semibold text-2xl mb-6 text-center">
                  Get Started Today
                </h3>
                <div className="space-y-4">
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
                  <Link
                    to="/services"
                    className="flex items-center justify-center space-x-2 bg-sky-blue hover:bg-blue-500 text-white font-medium px-6 py-4 rounded-lg transition-all hover:scale-105 w-full"
                  >
                    <span>View Our Services</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
