import { Link } from 'react-router-dom';
import { Briefcase, Phone, DollarSign, Clock, TrendingDown, Users, Package, Plane, FileText, CheckCircle } from 'lucide-react';

const Corporate = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: '10%-20% Savings',
      description: 'Enjoy substantial discounts on all transportation services with a corporate account.',
    },
    {
      icon: Clock,
      title: 'Priority Service',
      description: 'Get priority booking and faster response times for all your transportation needs.',
    },
    {
      icon: FileText,
      title: 'Simplified Billing',
      description: 'Consolidated monthly invoices with detailed trip records for easy expense tracking.',
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: 'Access to a dedicated account manager for all your corporate transportation needs.',
    },
  ];

  const services = [
    {
      icon: Users,
      title: 'Employee Transportation',
      description: 'Reliable transportation for your employees to meetings, events, and business appointments across the Triangle.',
    },
    {
      icon: Plane,
      title: 'Client Airport Services',
      description: 'Professional airport pickup and drop-off services to make a great impression on clients and partners.',
    },
    {
      icon: Package,
      title: 'Parcel & Document Delivery',
      description: 'Fast, secure delivery of business documents, contracts, and packages throughout the region.',
    },
    {
      icon: Clock,
      title: 'Last-Minute Rush Services',
      description: 'Emergency rush delivery and transportation services available 24/7 for time-critical needs.',
    },
  ];

  const features = [
    'No setup fees or hidden costs',
    'Flexible payment terms',
    'Online account management',
    'Real-time trip tracking',
    'Detailed expense reporting',
    'Multiple user accounts',
    'Custom billing arrangements',
    '24/7 service availability',
  ];

  return (
    <div className="font-inter">
      <section className="bg-gradient-to-br from-deep-navy via-blue-900 to-deep-navy text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-taxi-yellow rounded-full mb-6">
                <Briefcase className="w-8 h-8 text-deep-navy" />
              </div>
              <h1 className="font-poppins font-bold text-4xl sm:text-5xl mb-6">
                <span className="text-taxi-yellow">Corporate</span> & Business Accounts
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                Professional transportation solutions designed specifically for businesses in the Triangle area
              </p>
              <div className="inline-flex items-center space-x-2 bg-taxi-yellow/10 border border-taxi-yellow/30 rounded-full px-6 py-3">
                <TrendingDown className="w-5 h-5 text-taxi-yellow" />
                <span className="text-taxi-yellow font-semibold text-lg">Save 10%-20% with Corporate Rates</span>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="/images/airport-service.png"
                alt="Corporate Transportation Services"
                className="w-full h-72 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-deep-navy mb-4">
              Why Choose a Corporate Account?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Streamline your business transportation with dedicated service, significant savings, and simplified billing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-soft-gray rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-200 text-center"
              >
                <div className="bg-taxi-yellow rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-deep-navy" />
                </div>
                <h3 className="font-poppins font-semibold text-xl text-deep-navy mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-deep-navy mb-4">
              Business Transportation Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive transportation solutions to support every aspect of your business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-200"
              >
                <div className="flex items-start space-x-4">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-deep-navy mb-6">
                Account Features & Benefits
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our corporate accounts are designed to make business transportation as simple and cost-effective as possible. From setup to ongoing support, we handle the details so you can focus on your business.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-taxi-yellow flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-deep-navy to-blue-900 rounded-2xl p-8 sm:p-12 text-white shadow-2xl">
              <h3 className="font-poppins font-bold text-3xl mb-4">
                Ready to Save?
              </h3>
              <p className="text-xl text-gray-300 mb-6">
                Setting up a corporate account takes just minutes. Start saving on your business transportation today.
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6 border border-white/20">
                <h4 className="font-semibold text-lg mb-4">Getting Started is Easy:</h4>
                <ol className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <span className="bg-taxi-yellow text-deep-navy font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm">1</span>
                    <span className="text-gray-200">Call us to discuss your business needs</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="bg-taxi-yellow text-deep-navy font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm">2</span>
                    <span className="text-gray-200">Complete simple account setup paperwork</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="bg-taxi-yellow text-deep-navy font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm">3</span>
                    <span className="text-gray-200">Start using your account immediately</span>
                  </li>
                </ol>
              </div>

              <a
                href="tel:9199246908"
                className="flex items-center justify-center space-x-2 bg-taxi-yellow hover:bg-yellow-500 text-deep-navy font-semibold px-8 py-4 rounded-lg transition-all hover:scale-105 w-full mb-3"
              >
                <Phone className="w-5 h-5" />
                <span>Call (919) 924-6908</span>
              </a>

              <p className="text-center text-sm text-gray-300">
                Monday - Friday: 8am - 6pm
                <br />
                After hours service available
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <h2 className="font-poppins font-bold text-3xl text-deep-navy mb-4">
                  Industries We Serve
                </h2>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  We provide specialized transportation services to businesses across all industries in the Triangle area, including:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-taxi-yellow rounded-full"></div>
                    <span className="text-gray-700">Healthcare</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-taxi-yellow rounded-full"></div>
                    <span className="text-gray-700">Technology</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-taxi-yellow rounded-full"></div>
                    <span className="text-gray-700">Legal Services</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-taxi-yellow rounded-full"></div>
                    <span className="text-gray-700">Financial Services</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-taxi-yellow rounded-full"></div>
                    <span className="text-gray-700">Education</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-taxi-yellow rounded-full"></div>
                    <span className="text-gray-700">Hospitality</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-taxi-yellow rounded-full"></div>
                    <span className="text-gray-700">Real Estate</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-taxi-yellow rounded-full"></div>
                    <span className="text-gray-700">Manufacturing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-taxi-yellow rounded-full"></div>
                    <span className="text-gray-700">Consulting</span>
                  </div>
                </div>
              </div>

              <div className="bg-soft-gray rounded-xl p-6 text-center border-2 border-taxi-yellow">
                <div className="bg-taxi-yellow rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8 text-deep-navy" />
                </div>
                <h3 className="font-poppins font-bold text-2xl text-deep-navy mb-2">
                  Join 100+ Local Businesses
                </h3>
                <p className="text-gray-600 mb-4">
                  Already trusting AAction Taxi Cab for their transportation needs
                </p>
                <Link
                  to="/reservation"
                  className="inline-block bg-deep-navy hover:bg-blue-900 text-white font-medium px-6 py-3 rounded-lg transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-deep-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl mb-6">
              Call Today to Set Up a Corporate or Business Account
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our team is ready to discuss how we can support your business transportation needs with customized solutions and significant savings.
            </p>
            <a
              href="tel:9199246908"
              className="inline-flex items-center space-x-2 bg-taxi-yellow hover:bg-yellow-500 text-deep-navy font-semibold text-lg px-8 py-4 rounded-lg transition-all hover:scale-105"
            >
              <Phone className="w-6 h-6" />
              <span>(919) 924-6908</span>
            </a>
            <p className="text-gray-400 mt-6">
              Available to discuss corporate accounts Monday - Friday, 8am - 6pm
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Corporate;
