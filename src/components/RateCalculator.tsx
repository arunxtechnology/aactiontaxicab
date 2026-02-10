import { useState, useEffect } from 'react';
import { Calculator, MapPin, Plane, Loader2, AlertCircle } from 'lucide-react';

interface RateCalculatorProps {
    pickupAddress?: string;
    destAddress?: string;
    isAirportTrip?: boolean;
    onCalculate?: (distance: number | null, fare: number | null) => void;
}

const RateCalculator = ({ pickupAddress = '', destAddress = '', isAirportTrip = false, onCalculate }: RateCalculatorProps) => {
    const [distance, setDistance] = useState<number | null>(null);
    const [rate, setRate] = useState<number | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (pickupAddress && destAddress) {
            calculateDistance();
        } else {
            setDistance(null);
            setRate(null);
            setError(null);
        }
    }, [pickupAddress, destAddress, isAirportTrip]);

    const calculateDistance = async () => {
        setLoading(true);
        setError(null);

        try {
            const apiKey = import.meta.env.VITE_OPENROUTE_API_KEY;

            if (!apiKey) {
                throw new Error('OpenRouteService API key not configured');
            }

            // Geocode addresses to get coordinates
            const pickupCoords = await geocodeAddress(pickupAddress, apiKey);
            const destCoords = await geocodeAddress(destAddress, apiKey);

            // Get driving distance
            const response = await fetch(
                `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${apiKey}&start=${pickupCoords.lon},${pickupCoords.lat}&end=${destCoords.lon},${destCoords.lat}`
            );

            if (!response.ok) {
                throw new Error('Failed to calculate distance');
            }

            const data = await response.json();
            const distanceMeters = data.features[0].properties.segments[0].distance;
            const distanceMiles = distanceMeters * 0.000621371; // Convert meters to miles

            setDistance(distanceMiles);
            calculateRate(distanceMiles);
        } catch (err) {
            console.error('Distance calculation error:', err);
            setError('Unable to calculate distance. Please check addresses.');
            setDistance(null);
            setRate(null);
        } finally {
            setLoading(false);
        }
    };

    const geocodeAddress = async (address: string, apiKey: string) => {
        const response = await fetch(
            `https://api.openrouteservice.org/geocode/search?api_key=${apiKey}&text=${encodeURIComponent(address)}`
        );

        if (!response.ok) {
            throw new Error('Failed to geocode address');
        }

        const data = await response.json();

        if (!data.features || data.features.length === 0) {
            throw new Error('Address not found');
        }

        const coords = data.features[0].geometry.coordinates;
        return { lon: coords[0], lat: coords[1] };
    };

    const calculateRate = (miles: number) => {
        let calculatedRate = miles * 3;

        // Minimum fare logic
        if (calculatedRate < 25) {
            calculatedRate = 25;
        }

        // Airport fee logic
        if (isAirportTrip) {
            calculatedRate += 5;
        }

        setRate(calculatedRate);

        // Notify parent component
        if (onCalculate) {
            onCalculate(miles, calculatedRate);
        }
    };

    return (
        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 sm:p-8">
            <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-taxi-yellow/10 rounded-full">
                    <Calculator className="w-6 h-6 text-taxi-yellow" />
                </div>
                <h2 className="font-poppins font-bold text-2xl text-deep-navy">Fare Estimate</h2>
            </div>

            {!pickupAddress || !destAddress ? (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                    <h3 className="text-blue-900 font-semibold mb-2">Our Rates</h3>
                    <ul className="text-blue-800 text-sm space-y-1 list-disc list-inside">
                        <li><strong>$3.00</strong> per mile</li>
                        <li><strong>$25.00</strong> minimum fare</li>
                        <li><strong>+$5.00</strong> for airport pickups/dropoffs</li>
                    </ul>
                    <p className="text-blue-600 text-xs mt-3">
                        Fill in the pickup and destination addresses below to see your estimated fare.
                    </p>
                </div>
            ) : loading ? (
                <div className="flex items-center justify-center py-8">
                    <Loader2 className="w-8 h-8 text-taxi-yellow animate-spin" />
                    <span className="ml-3 text-gray-600">Calculating distance...</span>
                </div>
            ) : error ? (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-red-800 text-sm">{error}</p>
                </div>
            ) : distance !== null && rate !== null ? (
                <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-soft-gray rounded-lg p-4 text-center">
                            <p className="text-gray-600 text-sm mb-1">Distance</p>
                            <p className="font-poppins font-bold text-2xl text-deep-navy">
                                {distance.toFixed(1)} mi
                            </p>
                        </div>
                        <div className="bg-soft-gray rounded-lg p-4 text-center">
                            <p className="text-gray-600 text-sm mb-1">Rate/Mile</p>
                            <p className="font-poppins font-bold text-2xl text-deep-navy">
                                $3.00
                            </p>
                        </div>
                    </div>

                    {isAirportTrip && (
                        <div className="flex items-center space-x-2 p-3 bg-yellow-50 border border-taxi-yellow/30 rounded-lg">
                            <Plane className="w-5 h-5 text-taxi-yellow" />
                            <span className="text-sm text-gray-700">
                                <strong>Airport Fee:</strong> +$5.00
                            </span>
                        </div>
                    )}

                    <div className="mt-6 p-6 bg-deep-navy rounded-lg text-center text-white">
                        <p className="text-gray-300 text-sm uppercase tracking-wider font-semibold mb-1">
                            Estimated Fare
                        </p>
                        <div className="font-poppins font-bold text-4xl text-taxi-yellow">
                            ${rate.toFixed(2)}
                        </div>
                        <p className="text-gray-400 text-xs mt-2">
                            *Minimum fare is $25. Final fare may vary based on traffic and exact route.
                        </p>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default RateCalculator;
