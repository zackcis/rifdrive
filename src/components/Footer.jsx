import { Link } from "react-router-dom";
import { ArrowUpRight, MoveUpRight } from "lucide-react";

export default function Footer() {
  return <footer className="footer">
    <div className="wrap footer-grid">
      <div className="footer-brand-block">
        <Link className="logo footer-logo" to="/"><span className="logo-symbol" aria-hidden="true"><i /><i /></span>RIF<span className="logo-light">DRIVE</span><span className="logo-dot">.</span></Link>
        <p>Less planning. More going.<br />Your key to the Rif, Morocco.</p>
        <span className="footer-coordinate">35°14′ N &nbsp; 3°56′ W</span>
      </div>
      <div className="footer-column"><h3>Explore</h3><Link to="/fleet">Our fleet <ArrowUpRight size={14} /></Link><Link to="/about">Our story <ArrowUpRight size={14} /></Link><Link to="/contact">Contact <ArrowUpRight size={14} /></Link></div>
      <div className="footer-column"><h3>Good to know</h3><p>Al Hoceima, Morocco</p><p>Rental prices and vehicle availability are indicative until confirmed.</p><Link to="/contact">Ask a question <ArrowUpRight size={14} /></Link></div>
    </div>
    <div className="wrap footer-bottom"><span>© {new Date().getFullYear()} RIF DRIVE — CONCEPT WEBSITE</span><span>MADE FOR THE OPEN ROAD <MoveUpRight size={15} /></span></div>
  </footer>;
}
