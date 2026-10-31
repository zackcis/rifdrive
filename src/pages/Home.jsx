import { ArrowDownRight, ArrowRight, ArrowUpRight, Compass, ShieldCheck, Clock3, MousePointer2 } from "lucide-react";
import { Link } from "react-router-dom";
import { cars } from "../data/cars.js";
import InquiryBar from "../components/InquiryBar.jsx";
import CarCard from "../components/CarCard.jsx";
import Photo from "../components/Photo.jsx";
import SectionHead from "../components/SectionHead.jsx";

export default function Home() {
  return <>
    <section className="hero"><div className="wrap hero-wrap">
      <div className="hero-meta"><span>INDEPENDENT CAR RENTAL IN THE RIF</span><span>AL HOCEIMA, MOROCCO &nbsp;↗</span></div>
      <div className="hero-main">
        <div className="hero-left"><div className="hero-surtitle"><span className="hero-star">✳</span> Your journey, your rules.</div>
          <h1 className="hero-headline">GO<br />YOUR <em>OWN</em><br />WAY<span className="punctuation">.</span></h1>
          <div className="hero-below"><p>The best parts of Morocco aren’t always on the map. Find your car. Take the scenic route.</p><a className="hero-scroll" href="#find-car">LET'S GET MOVING <ArrowDownRight size={21} /></a></div>
        </div>
        <div className="hero-visual"><div className="hero-visual-backdrop" /><div className="hero-photo"><Photo src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=88&auto=format&fit=crop" fallback="/cars/hero.svg" alt="Sports car on an open road" loading="eager" /></div>
          <div className="hero-floating-label"><span>01 — BEHIND THE WHEEL</span><strong>THE OPEN ROAD<br />LOOKS GOOD ON YOU.</strong></div>
          <div className="hero-round-stamp" aria-hidden="true"><span>DRIVE</span><ArrowUpRight size={24} /><span>FREE</span></div>
        </div>
      </div>
      <div className="hero-bottom-line"><span>NO FIXED ITINERARY. NO BORING DAYS.</span><span>SCROLL TO EXPLORE <ArrowDownRight size={14} /></span></div>
    </div></section>

    <section className="search-zone" id="find-car"><div className="wrap"><div className="search-intro"><span>THE FIRST STEP IS EASY</span><span>01 / 04</span></div><InquiryBar /><p className="search-footnote">No payment online. Every request is confirmed directly with our team.</p></div></section>

    <section className="fleet-feature section-pad"><div className="wrap">
      <SectionHead kicker="CURATED FOR EVERY KIND OF DRIVE" title={<>PICK YOUR<br /><span className="italic-outline">PACE.</span></>} text="A short coastal trip or a proper mountain escape? There’s a set of wheels for every version of the story." link="/fleet" linkText="See the full fleet" />
      <div className="featured-grid">{cars.slice(0, 3).map((car, i) => <CarCard key={car.slug} car={car} index={i} />)}</div>
      <div className="fleet-feature-end"><span>08 DISTINCT WAYS TO GO SOMEWHERE</span><Link to="/fleet" className="round-link" aria-label="View all cars"><ArrowUpRight size={25} /></Link></div>
    </div></section>

    <section className="travel-section"><div className="travel-image"><Photo src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1800&q=85&auto=format&fit=crop" fallback="/cars/rif-landscape.svg" alt="Mountain landscape" /></div>
      <div className="travel-overlay"><div className="wrap travel-content"><span className="eyebrow light"><span className="orange-dash" /> A LITTLE FURTHER, A LOT BETTER</span><h2>GOOD ROADS.<br /><em>GREAT</em> STORIES.</h2><p>From Al Hoceima’s blue bays to the long bends of the Rif mountains. Some places are simply better discovered at your own speed.</p><Link to="/about" className="btn btn-white">Why drive with us <ArrowUpRight size={20} /></Link></div><span className="travel-vertical">NORTH MOROCCO — 35°14' N</span></div>
    </section>

    <section className="how-section section-pad"><div className="wrap"><SectionHead kicker="AS SIMPLE AS IT SHOULD BE" title={<>THREE STEPS.<br /><span className="italic-outline">ZERO DRAMA.</span></>} text="No complicated booking engine. Just a straightforward conversation about the car you need." />
      <div className="steps-grid"><div className="step"><span className="step-number">01 <ArrowRight size={21} /></span><MousePointer2 size={33} strokeWidth={1.5} /><h3>Pick your ride.</h3><p>Browse the cars, compare the details, and choose the one that feels right.</p></div><div className="step"><span className="step-number">02 <ArrowRight size={21} /></span><Clock3 size={33} strokeWidth={1.5} /><h3>Tell us when.</h3><p>Choose your dates and pickup location. We’ll prepare your inquiry.</p></div><div className="step"><span className="step-number">03 <ArrowUpRight size={21} /></span><ShieldCheck size={33} strokeWidth={1.5} /><h3>Let's make it happen.</h3><p>Chat with the team on WhatsApp to confirm availability and final terms.</p></div></div>
    </div></section>

    <section className="reassurance wrap"><div><Compass size={28} /><strong>LOCAL STARTING POINT</strong><span>Based in Al Hoceima</span></div><div><ShieldCheck size={28} /><strong>HUMAN CONFIRMATION</strong><span>Real conversations, not instant promises</span></div><div><ArrowUpRight size={28} /><strong>BUILT FOR ADVENTURE</strong><span>Explore at your own pace</span></div></section>

    <section className="closing-cta"><div className="wrap closing-content"><span className="eyebrow light">THE NEXT CHAPTER STARTS HERE</span><div className="closing-row"><h2>THE ROAD<br />IS <em>CALLING.</em></h2><div><p>Good memories rarely happen sitting still.</p><Link className="btn btn-orange" to="/fleet">Find your ride <ArrowUpRight size={22} /></Link></div></div><div className="closing-bottom"><span>RIF DRIVE / AL HOCEIMA</span><span>KEEP MOVING <ArrowUpRight size={16} /></span></div></div></section>
  </>;
}
