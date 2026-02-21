import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    name?: string;
    type?: string;
    url?: string;
    image?: string;
}

export default function SEO({
    title = 'AAction Taxi Cab - Reliable Airport & Transportation Services',
    description = 'Professional taxi and airport transportation services in Raleigh, Durham, Chapel Hill, Cary, and RTP. Reliable RDU airport service, flat rates, and corporate accounts available.',
    name = 'AAction Taxi Cab',
    type = 'website',
    url = 'https://aactiontaxicab.com',
    image = '/images/hero.png',
}: SEOProps) {
    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={url} />

            {/* Open Graph metadata tags */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={image} />
            <meta property="og:site_name" content={name} />

            {/* Twitter metadata tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Helmet>
    );
}
