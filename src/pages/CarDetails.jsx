import { useMemo, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, CalendarDays, Check, CircleHelp, Clock, Fuel, Gauge, Luggage, MapPin, Users } from "lucide-react";
import { cars, daysBetween, getCar, localToday, money, pickupLocations } from "../data/cars.js";
import { quoteMessage, whatsappUrl, whatsappConfigured } from "../utils.js";
import Photo from "../components/Photo.jsx";
import CarCard from "../components/CarCard.jsx";
import NotFound from "./NotFound.jsx";

export default function CarDetails() {
  const { slug } = useParams();
  const [params] = useSearchParams();
  const car = getCar(slug);
  const [pickup, setPickup] = useState(params.get("pickup") || "");
  const [dropoff, setDropoff] = useState(params.get("dropoff") || "");
  const [location, setLocation] = useState(params.get("location") || pickupLocations[0]);
  const [error, setError] = useState("");
  const today = localToday();
  const days = useMemo(() => daysBetween(pickup, dropoff), [pickup, dropoff]);
  if (!car) return <NotFound />;

  const message = quoteMessage({ car: `${car.name} (${car.year})`, pickup, dropoff, location });
  const quoteLink = whatsappUrl(message);
  const ready = pickup && dropoff && pickup >= today && days > 0;
  function checkDate(event) {
    if (!ready) { event.preventDefault(); setError("Choose a valid pick-up and return date to request a quote."); }
    else { setError(""); }
  }
  const related = cars.filter((item) => item.category === car.category && item.slug !== car.slug).slice(0, 2);

  return <>
    <section className="details-page"><div className="wrap">
      <div className="breadcrumb"><Link to="/fleet"><ArrowLeft size={17} /> BACK TO FLEET</Link><span>FLEET / {car.category.toUpperCase()} / {car.name.toUpperCase()}</span></div>
      <div className="details-head"><div><span className="eyebrow"><span className="orange-dash" />{car.trim.toUpperCase()} / {car.year}</span><h1>{car.name}<span className="punctuation">.</span></h1></div><div className="details-price"><span>STARTING FROM</span><strong>{money(car.price)}</strong><span>PER DAY · DEMO RATE</span></div></div>
      <div className={`detail-hero-photo tone-${car.tone}`}><Photo src={car.photo} fallback={car.fallback} alt={`${car.name} vehicle example`} loading="eager" /><span className="detail-floating-badge">{car.badge}</span><span className="detail-photo-index">RIF DRIVE / {car.category.toUpperCase()} COLLECTION</span></div>
      <div className="details-layout"><div className="detail-content">
        <div className="detail-subhead"><span>01 / THE EXPERIENCE</span><h2>GOOD CHOICE.<br /><em>GREAT DRIVE.</em></h2><p>{car.description}</p></div>
        <div className="detail-spec-grid"><div><Users size={22} /><span>PASSENGERS</span><strong>{car.seats} seats</strong></div><div><Gauge size={22} /><span>TRANSMISSION</span><strong>{car.transmission}</strong></div><div><Fuel size={22} /><span>FUEL TYPE</span><strong>{car.fuel}</strong></div><div><Luggage size={22} /><span>LUGGAGE</span><strong>{car.bags} bags</strong></div></div>
        <div className="included"><span className="mini-label">02 / WHAT COMES WITH IT</span><h3>THE LITTLE EXTRAS.</h3><div className="feature-grid">{car.features.map((feature) => <span key={feature}><Check size={17} /> {feature}</span>)}</div></div>
        <div className="detail-note"><CircleHelp size={23} /><div><strong>Before you hit the road</strong><p>Vehicle specifications, rates, and photos are for this concept demo. Actual availability, deposit, insurance, fuel rules, and documents must be confirmed with the rental provider before a rental is agreed.</p></div></div>
      </div>
      <aside className="quote-panel"><span className="mini-label">03 / YOUR NEXT MOVE</span><h2>LET'S GET<br />YOU MOVING.</h2><p>Pick your dates. We'll help you check the details.</p>
        <div className="quote-fields"><label><span><MapPin size={15} /> PICK-UP LOCATION</span><select value={location} onChange={(e) => setLocation(e.target.value)}>{pickupLocations.map((place) => <option key={place}>{place}</option>)}</select></label>
          <label><span><CalendarDays size={15} /> PICK-UP DATE</span><input type="date" min={today} value={pickup} onChange={(e) => { setPickup(e.target.value); setError(""); }} /></label>
          <label><span><CalendarDays size={15} /> RETURN DATE</span><input type="date" min={pickup || today} value={dropoff} onChange={(e) => { setDropoff(e.target.value); setError(""); }} /></label></div>
        <div className="quote-estimate"><div><span>DAILY RATE</span><strong>{money(car.price)}</strong></div><div><span>RENTAL DAYS</span><strong>{days ? `${days} ${days === 1 ? "day" : "days"}` : "—"}</strong></div><div className="quote-total"><span>ESTIMATED SUBTOTAL</span><strong>{days ? money(days * car.price) : "—"}</strong></div></div>
        {error && <p className="form-error" role="alert">{error}</p>}
        <a className="btn btn-orange quote-button" href={ready ? quoteLink : "#request-quote"} target={ready ? "_blank" : undefined} rel={ready ? "noopener noreferrer" : undefined} onClick={checkDate}>Request via WhatsApp <ArrowUpRight size={20} /></a>
        {!whatsappConfigured && <p className="quote-config">Demo mode: WhatsApp opens a recipient chooser until the business number is configured.</p>}
        <p className="quote-fine"><Clock size={15} /> This is an inquiry, not a confirmed reservation or payment.</p>
      </aside></div>
    </div></section>
    {related.length > 0 && <section className="related-section section-pad"><div className="wrap"><div className="related-head"><div><span className="eyebrow"><span className="orange-dash" /> STILL LOOKING?</span><h2>MORE YOUR STYLE.</h2></div><Link to="/fleet" className="text-link">Browse all cars <ArrowUpRight size={18} /></Link></div><div className="related-grid">{related.map((other) => <CarCard key={other.slug} car={other} index={cars.findIndex((c) => c.slug === other.slug)} />)}</div></div></section>}
  </>;
}
