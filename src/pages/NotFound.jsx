import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
export default function NotFound() {
  return <section className="not-found wrap"><span className="eyebrow"><span className="orange-dash" /> LOST THE WAY?</span><div className="not-found-number">404<span>.</span></div><h1>THIS ROAD GOES NOWHERE.</h1><p>But we know a better direction.</p><Link className="btn btn-dark" to="/">Back home <ArrowUpRight size={18} /></Link></section>;
}
