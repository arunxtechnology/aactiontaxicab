export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const {
            customerName,
            customerPhone,
            customerEmail,
            confirmationMethod,
            pickupAddress,
            destinationAddress,
            pickupDate,
            pickupTime,
            passengers,
            isAirportTrip,
            calculatedDistance,
            estimatedFare,
            comments,
            ownerEmail
        } = req.body;

        // Import nodemailer
        const nodemailer = require('nodemailer');

        // Create transporter using Gmail
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD
            }
        });

        // Email content
        const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e3a8a; border-bottom: 3px solid #fbbf24; padding-bottom: 10px;">
          New Taxi Reservation
        </h2>
        
        <div style="background-color: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #92400e; margin-top: 0;">Fare Estimate</h3>
          <p style="font-size: 18px; margin: 5px 0;">
            <strong>Distance:</strong> ${calculatedDistance || 'Not calculated'}
          </p>
          <p style="font-size: 24px; color: #1e3a8a; margin: 5px 0;">
            <strong>Estimated Fare: ${estimatedFare || 'N/A'}</strong>
          </p>
          ${isAirportTrip === 'Yes (+$5 airport fee)' ? '<p style="color: #92400e;"><strong>✈️ Airport Trip - $5 fee included</strong></p>' : ''}
        </div>

        <h3 style="color: #1e3a8a;">Customer Information</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;"><strong>Name:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${customerName}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;"><strong>Phone:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${customerPhone}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;"><strong>Email:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${customerEmail}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;"><strong>Preferred Contact:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${confirmationMethod}</td>
          </tr>
        </table>

        <h3 style="color: #1e3a8a; margin-top: 20px;">Trip Details</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;"><strong>Pickup:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${pickupAddress}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;"><strong>Destination:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${destinationAddress}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;"><strong>Date:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${pickupDate}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;"><strong>Time:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${pickupTime}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;"><strong>Passengers:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${passengers}</td>
          </tr>
        </table>

        ${comments !== 'None' ? `
          <h3 style="color: #1e3a8a; margin-top: 20px;">Additional Comments</h3>
          <p style="background-color: #f3f4f6; padding: 10px; border-radius: 5px;">${comments}</p>
        ` : ''}

        <div style="margin-top: 30px; padding: 15px; background-color: #eff6ff; border-radius: 8px;">
          <p style="margin: 0; color: #1e40af;">
            <strong>Action Required:</strong> Please contact the customer via their preferred method to confirm this reservation.
          </p>
        </div>
      </div>
    `;

        // Send email
        await transporter.sendMail({
            from: process.env.GMAIL_USER,
            to: ownerEmail,
            subject: `New Taxi Reservation - ${customerName} - ${pickupDate}`,
            html: emailHtml
        });

        return res.status(200).json({ success: true, message: 'Reservation sent successfully' });

    } catch (error) {
        console.error('Email error:', error);
        return res.status(500).json({
            success: false,
            error: 'Failed to send reservation',
            details: error.message
        });
    }
}
