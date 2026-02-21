import { Link } from 'react-router-dom';
import { Phone, CalendarCheck, AlertCircle, MapPin, DollarSign } from 'lucide-react';
import SEO from '../components/SEO';

const FlatRates = () => {
  const rates = [
    { destination: 'Aberdeen', miles: '90', rate: '$225' },
    { destination: 'Ahoskie', miles: '140', rate: '$350' },
    { destination: 'Albermarle', miles: '105', rate: '$263' },
    { destination: 'Angier', miles: '40', rate: '$100' },
    { destination: 'Apex', miles: 'Meter', rate: 'Meter' },
    { destination: 'Asheboro', miles: '68', rate: '$170' },
    { destination: 'Asheville, NC', miles: '246', rate: '$615' },
    { destination: 'Atlanta, GA', miles: '400', rate: '$1,000' },
    { destination: 'Bahama', miles: 'Meter', rate: 'Meter' },
    { destination: 'Bailey', miles: '47', rate: '$118' },
    { destination: 'Beaufort, NC', miles: '161', rate: '$403' },
    { destination: 'Benson', miles: '49', rate: '$123' },
    { destination: 'Bethel', miles: '90', rate: '$225' },
    { destination: 'Boone', miles: '180', rate: '$450' },
    { destination: 'Broadway', miles: '55', rate: '$138' },
    { destination: 'Bunn', miles: '46', rate: '$115' },
    { destination: 'Burlington', miles: '56', rate: '$140' },
    { destination: 'Butner', miles: 'Meter', rate: 'Meter' },
    { destination: 'Cameron', miles: '63', rate: '$158' },
    { destination: 'Camp Lejeune', miles: '134', rate: '$335' },
    { destination: 'Carolina Beach', miles: '149', rate: '$373' },
    { destination: 'Carthage', miles: '62', rate: '$155' },
    { destination: 'Cary', miles: 'Meter', rate: 'Meter' },
    { destination: 'Chapel Hill', miles: 'Meter', rate: 'Meter' },
    { destination: 'Charlotte', miles: '154', rate: '$385' },
    { destination: 'Cherokee', miles: '297', rate: '$743' },
    { destination: 'Cherry Point', miles: '145', rate: '$363' },
    { destination: 'Clayton', miles: '35', rate: '$88' },
    { destination: 'Clinton', miles: '80', rate: '$200' },
    { destination: 'Concord', miles: '134', rate: '$335' },
    { destination: 'Creedmoor', miles: '29', rate: '$73' },
    { destination: 'Danville, VA', miles: '75', rate: '$188' },
    { destination: 'Dunn', miles: '63', rate: '$158' },
    { destination: 'Durham', miles: 'Meter', rate: 'Meter' },
    { destination: 'Edenton', miles: '187', rate: '$468' },
    { destination: 'Elizabeth City', miles: '179', rate: '$448' },
    { destination: 'Elizabeth Town', miles: '99', rate: '$248' },
    { destination: 'Elm City', miles: '70', rate: '$175' },
    { destination: 'Faison', miles: '83', rate: '$208' },
    { destination: 'Farmville', miles: '76', rate: '$190' },
    { destination: 'Fayetteville', miles: '70', rate: '$175' },
    { destination: 'Fort Bragg', miles: '75', rate: '$188' },
    { destination: 'Franklinton', miles: '40', rate: '$100' },
    { destination: 'Fuquay Varina', miles: 'Meter', rate: 'Meter' },
    { destination: 'Garner', miles: 'Meter', rate: 'Meter' },
    { destination: 'Gastonia', miles: '173', rate: '$433' },
    { destination: 'Goldsboro', miles: '70', rate: '$175' },
    { destination: 'Graham', miles: '48', rate: '$120' },
    { destination: 'Greensboro', miles: '70', rate: '$175' },
    { destination: 'Greensboro Air.', miles: '90', rate: '$225' },
    { destination: 'Greenville, NC', miles: '99', rate: '$248' },
    { destination: 'Hatteras', miles: '255', rate: '$638' },
    { destination: 'Haw River', miles: '45', rate: '$113' },
    { destination: 'Henderson', miles: '54', rate: '$135' },
    { destination: 'Hickory', miles: '171', rate: '$428' },
    { destination: 'High Point', miles: '85', rate: '$213' },
    { destination: 'Hillsborough', miles: '31', rate: '$78' },
    { destination: 'Hollister', miles: '52', rate: '$130' },
    { destination: 'Holly Springs', miles: 'Meter', rate: 'Meter' },
    { destination: 'Jackson', miles: '94', rate: '$235' },
    { destination: 'Jacksonville, FL', miles: '410', rate: '$1,025' },
    { destination: 'Jacksonville, NC', miles: '130', rate: '$325' },
    { destination: 'Kannapolis', miles: '135', rate: '$338' },
    { destination: 'Kearnsville', miles: '99', rate: '$248' },
    { destination: 'Kings Mountain', miles: '168', rate: '$420' },
    { destination: 'Kinston', miles: '99', rate: '$248' },
    { destination: 'Kipling', miles: '40', rate: '$100' },
    { destination: 'Lauringburg', miles: '101', rate: '$253' },
    { destination: 'Lenoir', miles: '186', rate: '$465' },
    { destination: 'Lexington', miles: '99', rate: '$248' },
    { destination: 'Lumberton', miles: '110', rate: '$275' },
    { destination: 'Manson', miles: '61', rate: '$153' },
    { destination: 'Manteon', miles: '189', rate: '$473' },
    { destination: 'Mebane', miles: '35', rate: '$88' },
    { destination: 'Middlesex', miles: '40', rate: '$100' },
    { destination: 'Moncure', miles: '38', rate: '$95' },
    { destination: 'Moorehead City', miles: '163', rate: '$408' },
    { destination: 'Morganton', miles: '196', rate: '$490' },
    { destination: 'Morrisville', miles: 'Meter', rate: 'Meter' },
    { destination: 'Mt. Airey', miles: '136', rate: '$340' },
    { destination: 'Mt. Mitchell', miles: '236', rate: '$590' },
    { destination: 'Mt. Oliver', miles: '84', rate: '$210' },
    { destination: 'Murfreesboro', miles: '126', rate: '$315' },
    { destination: 'Murphy', miles: '354', rate: '$885' },
    { destination: 'Myrtle Beach', miles: '190', rate: '$475' },
    { destination: 'New Bern', miles: '126', rate: '$315' },
    { destination: 'New York City', miles: '517', rate: '$1,293' },
    { destination: 'Norfolk, VA', miles: '190', rate: '$475' },
    { destination: 'North Wilkesboro', miles: '138', rate: '$345' },
    { destination: 'Oxford', miles: '39', rate: '$98' },
    { destination: 'Pilot', miles: '51', rate: '$128' },
    { destination: 'Pinehurst', miles: '72', rate: '$180' },
    { destination: 'Pittsboro', miles: '42', rate: '$105' },
    { destination: 'Plymouth', miles: '169', rate: '$423' },
    { destination: 'Princeton', miles: '62', rate: '$155' },
    { destination: 'Raleigh', miles: 'Meter', rate: 'Meter' },
    { destination: 'Reidsville', miles: '75', rate: '$188' },
    { destination: 'Rich Square', miles: '111', rate: '$278' },
    { destination: 'Roanoke Rapids', miles: '99', rate: '$248' },
    { destination: 'Rockingham', miles: '92', rate: '$230' },
    { destination: 'Rocky Mt.', miles: '72', rate: '$180' },
    { destination: 'Rougemont', miles: 'Meter', rate: 'Meter' },
    { destination: 'Roxboro', miles: '48', rate: '$120' },
    { destination: 'RTP', miles: 'Meter', rate: 'Meter' },
    { destination: 'Salisbury', miles: '114', rate: '$285' },
    { destination: 'Sanford', miles: '50', rate: '$125' },
    { destination: 'Selma', miles: '49', rate: '$123' },
    { destination: 'Semore', miles: '61', rate: '$153' },
    { destination: 'Sharpsburg', miles: '74', rate: '$185' },
    { destination: 'Silver City', miles: '48', rate: '$120' },
    { destination: 'Smithsfield', miles: '43', rate: '$108' },
    { destination: 'Snow Camp', miles: '40', rate: '$100' },
    { destination: 'Snow Hill', miles: '99', rate: '$248' },
    { destination: 'South Boston, VA', miles: '71', rate: '$178' },
    { destination: 'South Hill, VA', miles: '98', rate: '$245' },
    { destination: 'Southern Pines', miles: '80', rate: '$200' },
    { destination: 'Spring Hope', miles: '43', rate: '$108' },
    { destination: 'Statesville', miles: '143', rate: '$358' },
    { destination: 'Tarboro', miles: '86', rate: '$215' },
    { destination: 'Thomasville', miles: '89', rate: '$223' },
    { destination: 'Troy', miles: '101', rate: '$253' },
    { destination: 'Wake Forest', miles: 'Meter', rate: 'Meter' },
    { destination: 'Wallace', miles: '152', rate: '$380' },
    { destination: 'Warrenton', miles: '69', rate: '$173' },
    { destination: 'Warsaw', miles: '91', rate: '$228' },
    { destination: 'Washington, NC', miles: '117', rate: '$293' },
    { destination: 'Wendell', miles: 'Meter', rate: 'Meter' },
    { destination: 'Wilmington', miles: '149', rate: '$373' },
    { destination: 'Winston Salem', miles: '98', rate: '$245' },
    { destination: 'Youngsville', miles: 'Meter', rate: 'Meter' },
    { destination: 'Zebulon', miles: 'Meter', rate: 'Meter' },
  ];

  return (
    <div className="font-inter">
      <SEO
        title="RDU Airport Flat Rates - AAction Taxi Cab"
        description="Check our competitive flat rates for taxi service to RDU airport from Raleigh, Durham, Chapel Hill, Cary, and other NC cities."
        url="https://aactiontaxicab.com/flat-rates"
      />
      <section className="bg-gradient-to-br from-deep-navy via-blue-900 to-deep-navy text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="font-poppins font-bold text-4xl sm:text-5xl mb-6">
                <span className="text-taxi-yellow">Flat Rates</span> from RDU Airport
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Transparent, competitive pricing for airport transportation
              </p>
            </div>
            <div className="hidden lg:block">
              <img
                src="/images/airport-service.png"
                alt="RDU Airport Transportation"
                className="w-full h-64 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-yellow-50 border-l-4 border-taxi-yellow p-6 mb-12 rounded-lg">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-6 h-6 text-taxi-yellow flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-lg text-deep-navy mb-2">Important Notice</h3>
                <p className="text-gray-700 leading-relaxed">
                  These flat rates apply <strong>only if AAction Taxi Cab takes you to RDU Airport</strong>. Rates are for transportation from the listed destinations to Raleigh-Durham International Airport. Return trips and other routes may have different pricing. Call us for a quote on your specific transportation needs.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-deep-navy rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center mb-16">
            <div className="w-full lg:w-1/2 h-64 lg:h-80 relative">
              <img
                src="/images/discount-promotion.png"
                alt="10% Discount Promotion"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-deep-navy via-transparent to-transparent hidden lg:block"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-transparent to-transparent lg:hidden"></div>
            </div>

            <div className="w-full lg:w-1/2 p-8 lg:p-10 text-center lg:text-left">
              <div className="inline-block bg-taxi-yellow text-deep-navy font-bold px-4 py-1 rounded-full mb-4">
                DISCOUNT AVAILABLE
              </div>
              <h2 className="font-poppins font-bold text-2xl sm:text-3xl text-white mb-4">
                10% Off for Seniors, Military, & Students*
              </h2>
              <p className="text-lg text-gray-300 mb-6 italic">
                * Valid from 7am to 7pm daily.
              </p>
              <a
                href="tel:9199246908"
                className="inline-flex items-center space-x-2 bg-taxi-yellow hover:bg-yellow-500 text-deep-navy font-medium px-6 py-3 rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>Call (919) 924-6908</span>
              </a>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="font-poppins font-bold text-3xl text-deep-navy text-center mb-4">
              RDU Airport Transportation Rates
            </h2>
            <p className="text-center text-gray-600 text-lg mb-8">
              Clear, competitive flat rates with no hidden fees
            </p>
          </div>

          <div className="bg-soft-gray rounded-xl overflow-hidden shadow-lg border border-gray-200 mb-12">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-deep-navy text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-poppins font-semibold text-lg">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-5 h-5 text-taxi-yellow" />
                        <span>Destination</span>
                      </div>
                    </th>
                    <th className="px-6 py-4 text-center font-poppins font-semibold text-lg">
                      Approximate Miles
                    </th>
                    <th className="px-6 py-4 text-right font-poppins font-semibold text-lg">
                      <div className="flex items-center justify-end space-x-2">
                        <span>Flat Rate</span>
                        <DollarSign className="w-5 h-5 text-taxi-yellow" />
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {rates.map((rate, index) => (
                    <tr
                      key={index}
                      className="hover:bg-yellow-50 transition-colors"
                    >
                      <td className="px-6 py-4 font-medium text-dark-slate">
                        {rate.destination}
                      </td>
                      <td className="px-6 py-4 text-center text-gray-700">
                        {rate.miles === 'Meter' ? 'Metered Rate' : `${rate.miles} miles`}
                      </td>
                      <td className="px-6 py-4 text-right font-semibold text-taxi-yellow text-lg">
                        {rate.rate === 'Meter' ? 'Call for Quote' : rate.rate}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-soft-gray rounded-xl p-6 text-center border border-gray-200">
              <div className="bg-taxi-yellow rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl text-deep-navy">✓</span>
              </div>
              <h3 className="font-poppins font-semibold text-lg text-deep-navy mb-2">No Hidden Fees</h3>
              <p className="text-gray-600">The rate you see is the rate you pay. No surprises at the end of your trip.</p>
            </div>
            <div className="bg-soft-gray rounded-xl p-6 text-center border border-gray-200">
              <div className="bg-taxi-yellow rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl text-deep-navy">✓</span>
              </div>
              <h3 className="font-poppins font-semibold text-lg text-deep-navy mb-2">Professional Service</h3>
              <p className="text-gray-600">Experienced drivers who know the best routes to get you there on time.</p>
            </div>
            <div className="bg-soft-gray rounded-xl p-6 text-center border border-gray-200">
              <div className="bg-taxi-yellow rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl text-deep-navy">✓</span>
              </div>
              <h3 className="font-poppins font-semibold text-lg text-deep-navy mb-2">Flight Tracking</h3>
              <p className="text-gray-600">We monitor your flight and adjust pickup times for delays or early arrivals.</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-deep-navy to-blue-900 rounded-2xl p-8 sm:p-12 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-poppins font-bold text-3xl mb-4">
                Don't See Your Destination?
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                We serve the entire Triangle area and beyond. Call us for a quote on transportation to any destination, or to get pricing for return trips and multi-stop journeys.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:9199246908"
                  className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-taxi-yellow hover:bg-yellow-500 text-deep-navy font-medium px-8 py-4 rounded-lg transition-all hover:scale-105"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call for a Quote</span>
                </a>
                <Link
                  to="/reservation"
                  className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-white hover:bg-gray-100 text-deep-navy font-medium px-8 py-4 rounded-lg transition-all hover:scale-105"
                >
                  <CalendarCheck className="w-5 h-5" />
                  <span>Make a Reservation</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl text-deep-navy mb-4">
              Additional Rate Information
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200">
              <h3 className="font-poppins font-semibold text-xl text-deep-navy mb-4">What's Included</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-taxi-yellow rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Professional, licensed driver</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-taxi-yellow rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Clean, well-maintained vehicle</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-taxi-yellow rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Flight tracking and monitoring</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-taxi-yellow rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Meet and greet service</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-taxi-yellow rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Luggage assistance</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200">
              <h3 className="font-poppins font-semibold text-xl text-deep-navy mb-4">Additional Options</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-sky-blue rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Child seats available upon request</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-sky-blue rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Van service for larger groups</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-sky-blue rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Corporate account discounts available</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-sky-blue rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Round-trip rate options</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-sky-blue rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Regular customer loyalty discounts</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FlatRates;
