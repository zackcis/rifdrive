const businessNumber = (import.meta.env.VITE_WHATSAPP_NUMBER || "").replace(/\D/g, "");

export const whatsappConfigured = Boolean(businessNumber);

export function quoteMessage({ car, pickup, dropoff, location, name, note } = {}) {
  return [
    "Hello Rif Drive! I'd like to request a car rental quote.",
    car ? `Vehicle: ${car}` : null,
    pickup ? `Pick-up date: ${pickup}` : null,
    dropoff ? `Return date: ${dropoff}` : null,
    location ? `Pick-up location: ${location}` : null,
    name ? `Name: ${name}` : null,
    note ? `Additional details: ${note}` : null,
    "Please confirm availability, the final rate and rental conditions. Thank you!",
  ].filter(Boolean).join("\n");
}

export function whatsappUrl(message) {
  // With no configured number, WhatsApp opens a recipient chooser rather than
  // pretending an inquiry has been sent to the rental company.
  return `https://wa.me/${businessNumber}?text=${encodeURIComponent(message)}`;
}
