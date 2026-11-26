// Site settings. Put the business WhatsApp number here (country code first, digits only).
// Example for an Indian number: '919876543210'  (91 = India, then the 10-digit mobile number)
// You can also set it when starting the server:  WHATSAPP_NUMBER=919876543210 npm start
const number = String(process.env.WHATSAPP_NUMBER || '').replace(/\D/g, '');

module.exports = {
  whatsappNumber: number
};
