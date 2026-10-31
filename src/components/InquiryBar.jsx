import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight, CalendarDays, MapPin, CarFront } from "lucide-react";
import { localToday, pickupLocations } from "../data/cars.js";

export default function InquiryBar({ compact = false, initial = {} }) {
  const navigate = useNavigate();
  const today = localToday();
  const [location, setLocation] = useState(initial.location || pickupLocations[0]);
  const [pickup, setPickup] = useState(initial.pickup || "");
  const [dropoff, setDropoff] = useState(initial.dropoff || "");
  const [category, setCategory] = useState(initial.category || "All cars");
  const [error, setError] = useState("");

  function submit(event) {
    event.preventDefault();
    if ((pickup && !dropoff) || (!pickup && dropoff)) { setError("Select both dates, or leave both empty."); return; }
    if (pickup && dropoff && dropoff <= pickup) { setError("Return date must be after pick-up."); return; }
    if (pickup && pickup < today) { setError("Pick-up date cannot be in the past."); return; }
    setError("");
    const params = new URLSearchParams();
    if (pickup) params.set("pickup", pickup);
    if (dropoff) params.set("dropoff", dropoff);
    if (location) params.set("location", location);
    if (category !== "All cars") params.set("category", category);
    navigate(`/fleet?${params.toString()}`);
  }

  return <form className={compact ? "inquiry-bar inquiry-compact" : "inquiry-bar"} onSubmit={submit}>
    <div className="inquiry-field"><label htmlFor={compact ? "pickup-place-compact" : "pickup-place"}><MapPin size={15} /> PICK-UP LOCATION</label>
      <select id={compact ? "pickup-place-compact" : "pickup-place"} value={location} onChange={(event) => setLocation(event.target.value)}>{pickupLocations.map((place) => <option key={place}>{place}</option>)}</select></div>
    <div className="inquiry-field"><label htmlFor={compact ? "pickup-date-compact" : "pickup-date"}><CalendarDays size={15} /> PICK-UP DATE</label><input id={compact ? "pickup-date-compact" : "pickup-date"} type="date" min={today} value={pickup} onChange={(e) => { setPickup(e.target.value); setError(""); }} /></div>
    <div className="inquiry-field"><label htmlFor={compact ? "return-date-compact" : "return-date"}><CalendarDays size={15} /> RETURN DATE</label><input id={compact ? "return-date-compact" : "return-date"} type="date" min={pickup || today} value={dropoff} onChange={(e) => { setDropoff(e.target.value); setError(""); }} /></div>
    <div className="inquiry-field"><label htmlFor={compact ? "car-type-compact" : "car-type"}><CarFront size={15} /> CAR TYPE</label><select id={compact ? "car-type-compact" : "car-type"} value={category} onChange={(e) => setCategory(e.target.value)}>{["All cars", "City", "SUV", "Premium"].map((c) => <option key={c}>{c}</option>)}</select></div>
    <button className="inquiry-submit" type="submit"><span>Find a car</span><ArrowUpRight size={21} /></button>
    {error && <p className="form-error inquiry-error" role="alert">{error}</p>}
  </form>;
}
