
const express = require('express');
const router = express.Router();
const rateLimit = require('express-rate-limit');

const requestLimiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 5,
    message: {
      error: 'Too many requests, please try again later.'
    },
    standardHeaders: true,
    legacyHeaders: false,
});

const init = ({ transporter }) => {
    router.post('/', requestLimiter, async (req, res) => {
        const { name, email, subject, service, compliance, it_service, message } = req.body;

        const dest_emails = [process.env.DEST_EMAIL || 'michael.rabot@rdesk.us', process.env.DEST_EMAIL_2].filter(Boolean);
        const email_subject = `RDesk Inquiry from ${name} - ${subject}`
        const email_body =  `
          New RDesk Inquiry
          
          ------------------------------
          Name:       ${name}
          Email:      ${email}
          Subject:    ${subject}
          Service:    ${service}
          IT Service: ${it_service}
          Compliance: ${compliance}
          ------------------------------
          
          Message:
          ${message}
          
          ------------------------------
          This message was automatically sent from the RDesk submission form.
        `.trim()
    
        try {
          // const insertQuery = 
          //  `INSERT INTO requests (name, email, subject, service, compliance, it_service, message) 
          //   VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;`;
          
          // const values = [name, email, subject, service, compliance, it_service, message];
          // const result = await db.query(insertQuery, values)
          
          for (let mail of dest_emails) {
            await transporter.sendMail({
              from: process.env.EMAIL,
              to: mail,
              subject: email_subject,
              text: email_body
            });
          }
    
          res.status(201).json({
            message: 'Request inserted and email sent successfully!',
            // data: result.rows[0],
          });
        } catch (err) {
          console.error('Error:', err);
          res.status(500).json({
            err: 'An error occurred while processing the request.',
            details: err.message,
          });
        }
    });
    
    return router;
}

module.exports = init