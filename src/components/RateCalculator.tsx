import { useState, useEffect } from 'react';
import { Calculator, Loader2, AlertCircle } from 'lucide-react';

interface RateCalculatorProps {
    pickupAddress?: string;
    destAddress?: string;
    isAirportTrip?: boolean;
    passengers?: number;
    onCalculate?: (distance: number | null, fare: number | null) => void;
}

const RateCalculator = ({ pickupAddress = '', destAddress = '', isAirportTrip = false, passengers = 1, onCalculate }: RateCalculatorProps) => {
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
    }, [pickupAddress, destAddress, isAirportTrip, passengers]);

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
        // Primary: Use Nominatim (OpenStreetMap) for better street-level accuracy
        // ORS geocoder often falls back to city centers for addresses it can't resolve exactly
        try {
            const nominatimResponse = await fetch(
                `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}&countrycodes=us&limit=1`,
                { headers: { 'User-Agent': 'AActionTaxiCabApp/1.0' } }
            );

            if (nominatimResponse.ok) {
                const nominatimData = await nominatimResponse.json();
                if (nominatimData && nominatimData.length > 0) {
                    return {
                        lon: parseFloat(nominatimData[0].lon),
                        lat: parseFloat(nominatimData[0].lat)
                    };
                }
            }
        } catch (nominatimError) {
            console.warn('Nominatim geocoding failed, falling back to ORS:', nominatimError);
        }

        // Fallback: Use ORS geocoder
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

        // Extra passengers fee logic
        if (passengers > 2) {
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
                <h2 className="font-poppins font-bold text-2xl text-deep-navy">Distance Calculator</h2>
            </div>

            {!pickupAddress || !destAddress ? (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                    <p className="text-blue-800 text-sm">
                        Fill in the pickup and destination addresses below to calculate the distance for your trip.
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
                    <div className="flex justify-center">
                        <div className="bg-soft-gray rounded-lg p-4 text-center">
                            <p className="text-gray-600 text-sm mb-1">Estimated Distance</p>
                            <p className="font-poppins font-bold text-2xl text-deep-navy">
                                {distance.toFixed(1)} mi
                            </p>
                        </div>
                    </div>
                    <p className="text-gray-500 text-xs text-center">
                        *Final fare will be confirmed by our team when we process your reservation.
                    </p>
                </div>
            ) : null}
        </div>
    );
};

export default RateCalculator;
