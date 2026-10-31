import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();
  const links = [{ to: "/", label: "Home" }, { to: "/fleet", label: "The fleet" }, { to: "/about", label: "Our story" }, { to: "/contact", label: "Contact" }];

  return <header className="site-header">
    <div className="header-inner wrap">
      <Link className="logo" to="/" onClick={() => setMobileOpen(false)} aria-label="Rif Drive home">
        <span className="logo-symbol" aria-hidden="true"><i /><i /></span>
        <span>RIF<span className="logo-light">DRIVE</span><span className="logo-dot">.</span></span>
      </Link>
      <nav className={mobileOpen ? "nav-links is-open" : "nav-links"} aria-label="Main navigation">
        {links.map((item) => <NavLink key={item.to} end={item.to === "/"} to={item.to}
          className={({ isActive }) => (isActive || (item.to === "/fleet" && pathname.startsWith("/fleet/")) ? "nav-link active" : "nav-link")}
          onClick={() => setMobileOpen(false)}>{item.label}</NavLink>)}
        <Link to="/fleet" className="btn btn-orange mobile-nav-cta" onClick={() => setMobileOpen(false)}>Find your ride <ArrowUpRight size={17} /></Link>
      </nav>
      <Link to="/fleet" className="header-cta">Find your ride <ArrowUpRight size={17} /></Link>
      <button type="button" className="menu-toggle" onClick={() => setMobileOpen((open) => !open)}
        aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen}>
        {mobileOpen ? <X size={25} /> : <Menu size={25} />}
      </button>
    </div>
  </header>;
}
