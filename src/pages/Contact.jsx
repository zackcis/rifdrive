import { useState } from "react";
import { ArrowUpRight, MapPin, MessageCircle, CheckCircle2 } from "lucide-react";
import { pickupLocations, cars } from "../data/cars.js";
import { quoteMessage, whatsappConfigured, whatsappUrl } from "../utils.js";

export default function Contact() {
  const [form, setForm] = useState({ name: "", car: "", pickup: "", dropoff: "", location: pickupLocations[0], message: "" });
  const [error, setError] = useState("");
  const set = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));
  function submit(event) {
    event.preventDefault();
    if (!form.name.trim()) { setError("Please enter your name."); return; }
    if ((form.pickup || form.dropoff) && (!form.pickup || !form.dropoff || form.dropoff <= form.pickup)) { setError("Choose valid pick-up and return dates."); return; }
    const today = new Date();
    const local = `${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,"0")}-${String(today.getDate()).padStart(2,"0")}`;
    if (form.pickup && form.pickup < local) { setError("Pick-up date cannot be in the past."); return; }
    setError("");
    // A deliberate click opens WhatsApp. No form data is saved to a backend.
    window.open(whatsappUrl(quoteMessage({ name: form.name.trim(), car: form.car, pickup: form.pickup, dropoff: form.dropoff, location: form.location, note: form.message })), "_blank", "noopener,noreferrer");
  }

  return <><section className="page-top contact-top"><div className="wrap"><div className="page-top-micro"><span>CONTACT / SAY HELLO</span><span>GOOD TRIPS START WITH A CONVERSATION</span></div><h1>LET'S TALK<br /><em>ROAD TRIPS</em><span className="punctuation">.</span></h1><div className="page-intro-bottom"><p>Tell us what you’re looking for. We’ll help you take the next step.</p><span>AL HOCEIMA / MOROCCO</span></div></div></section>
    <section className="contact-section section-pad"><div className="wrap contact-grid"><div className="contact-left"><span className="eyebrow"><span className="orange-dash" /> THE EASY PART</span><h2>ASK AWAY.<br /><em>WE'RE ALL EARS.</em></h2><p>Need an SUV for the weekend? A small car for the city? Or just want to know how it works? Send an inquiry. Nothing is booked until you agree on the details directly with the rental provider.</p><div className="contact-info"><div><MapPin size={24} /><span><strong>OUR STARTING POINT</strong>Al Hoceima, Morocco</span></div><div><MessageCircle size={24} /><span><strong>HOW WE CONNECT</strong>WhatsApp rental inquiries</span></div><div><CheckCircle2 size={24} /><span><strong>NO SURPRISES</strong>No payment or instant booking on this site</span></div></div></div>
      <form className="contact-form" onSubmit={submit}><span className="mini-label">NEW INQUIRY / 001</span><h3>TELL US YOUR PLANS.</h3><div className="contact-fields"><label className="contact-full">YOUR NAME *<input required value={form.name} onChange={(e) => set("name",e.target.value)} placeholder="Your name" /></label><label className="contact-full">CAR YOU'RE INTERESTED IN<select value={form.car} onChange={(e) => set("car",e.target.value)}><option value="">Help me choose</option>{cars.map((car) => <option key={car.slug}>{car.name}</option>)}</select></label><label>PICK-UP DATE<input type="date" value={form.pickup} onChange={(e) => set("pickup",e.target.value)} /></label><label>RETURN DATE<input type="date" min={form.pickup || undefined} value={form.dropoff} onChange={(e) => set("dropoff",e.target.value)} /></label><label className="contact-full">PICK-UP LOCATION<select value={form.location} onChange={(e) => set("location",e.target.value)}>{pickupLocations.map((loc) => <option key={loc}>{loc}</option>)}</select></label><label className="contact-full">ANYTHING ELSE?<textarea rows="4" placeholder="Extra details, questions, special requests..." value={form.message} onChange={(e) => set("message",e.target.value)} /></label></div>
        {error && <p className="form-error" role="alert">{error}</p>}
        <button className="btn btn-orange contact-submit" type="submit">Continue to WhatsApp <ArrowUpRight size={19} /></button>
        <p className="contact-disclaimer">This opens WhatsApp with your message. It does not send anything automatically or confirm a reservation.</p>
        {!whatsappConfigured && <p className="contact-disclaimer warning">Demo setup: add VITE_WHATSAPP_NUMBER in your .env file so inquiries are addressed directly to the business.</p>}
      </form></div></section>
  </>;
}
