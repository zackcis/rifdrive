import { ArrowUpRight, Fuel, Users, Gauge } from "lucide-react";
import { Link } from "react-router-dom";
import Photo from "./Photo.jsx";
import { money } from "../data/cars.js";

export default function CarCard({ car, index = 0, queryString = "" }) {
  return <article className="car-card" style={{ "--car-accent": car.accent }}>
    <div className={`car-photo tone-${car.tone}`}>
      <span className="car-index">{String(index + 1).padStart(2, "0")} / 08</span>
      <span className="car-badge">{car.badge}</span>
      <Link to={`/fleet/${car.slug}${queryString}`} aria-label={`View ${car.name} details`} className="car-image-link">
        <Photo src={car.photo} fallback={car.fallback} alt={`${car.name} vehicle example`} />
      </Link>
    </div>
    <div className="car-card-body">
      <div className="car-title-row"><div><span className="car-trim">{car.trim}</span><h3>{car.name}</h3></div><div className="car-price"><strong>{money(car.price)}</strong><span>/ day</span></div></div>
      <div className="car-specs"><span><Users size={15} /> {car.seats} seats</span><span><Gauge size={15} /> {car.transmission}</span><span><Fuel size={15} /> {car.fuel}</span></div>
      <Link className="car-view" to={`/fleet/${car.slug}${queryString}`}>Explore this car <span><ArrowUpRight size={18} /></span></Link>
    </div>
  </article>;
}
