import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ArrowUpRight, Search, SlidersHorizontal, X } from "lucide-react";
import { cars, categories } from "../data/cars.js";
import CarCard from "../components/CarCard.jsx";
import InquiryBar from "../components/InquiryBar.jsx";

export default function Fleet() {
  const [params, setParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("featured");
  const currentCategory = categories.includes(params.get("category")) ? params.get("category") : "All cars";
  const pickup = params.get("pickup") || "";
  const dropoff = params.get("dropoff") || "";
  const location = params.get("location") || "";

  const results = useMemo(() => {
    let list = cars.filter((car) => (currentCategory === "All cars" || car.category === currentCategory) &&
      `${car.name} ${car.category} ${car.transmission} ${car.fuel}`.toLowerCase().includes(search.toLowerCase().trim()));
    if (sort === "low") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "high") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "name") list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [currentCategory, search, sort]);

  function updateCategory(category) {
    const next = new URLSearchParams(params);
    if (category === "All cars") next.delete("category");
    else next.set("category", category);
    setParams(next);
  }
  function resetFilters() { setSearch(""); setSort("featured"); updateCategory("All cars"); }
  const queryString = params.toString() ? `?${params.toString()}` : "";

  return <>
    <section className="page-top fleet-top"><div className="wrap"><div className="page-top-micro"><span>DISCOVER / THE FLEET</span><span>01 — CHOOSE YOUR RIDE</span></div><h1>FIND YOUR<br /><em>KIND</em> OF ROAD<span className="punctuation">.</span></h1><div className="page-intro-bottom"><p>From city-friendly runarounds to mountain-road companions. Find a vehicle that matches your plans.</p><span>↘ SCROLL TO EXPLORE</span></div></div></section>
    <section className="fleet-page-search"><div className="wrap"><InquiryBar key={`${pickup}-${dropoff}-${location}-${currentCategory}`} compact initial={{ pickup, dropoff, location, category: currentCategory }} /></div></section>
    <section className="fleet-list-section section-pad"><div className="wrap">
      <div className="listing-header"><div className="listing-count"><span className="orange-dash" /><h2>THE LINEUP <span>({String(results.length).padStart(2, "0")})</span></h2></div><span className="listing-side-note">CHOOSE THE DRIVE, WE'LL HELP WITH THE REST.</span></div>
      <div className="filter-toolbar"><div className="category-tabs" role="group" aria-label="Filter by car category">{categories.map((cat) => <button type="button" key={cat} className={cat === currentCategory ? "category-tab selected" : "category-tab"} onClick={() => updateCategory(cat)}>{cat}</button>)}</div>
        <div className="filter-controls"><label className="fleet-search-field"><Search size={18} /><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search vehicles" aria-label="Search vehicles" />{search && <button type="button" aria-label="Clear search" onClick={() => setSearch("")}><X size={15} /></button>}</label><label className="sort-field"><SlidersHorizontal size={17} /><select value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort cars"><option value="featured">Featured</option><option value="low">Price: low to high</option><option value="high">Price: high to low</option><option value="name">Name: A–Z</option></select></label></div>
      </div>
      {pickup && dropoff && <p className="date-context">Showing vehicles for inquiry · {pickup} → {dropoff}. Dates do not guarantee availability.</p>}
      {results.length > 0 ? <div className="fleet-grid">{results.map((car) => <CarCard car={{...car}} key={car.slug} index={cars.findIndex((c) => c.slug === car.slug)} queryString={queryString} />)}</div> : <div className="empty-fleet"><span>NOTHING ON THIS ROAD.</span><h3>No cars found.</h3><p>Try another category or a different search.</p><button type="button" className="btn btn-dark" onClick={resetFilters}>Reset filters <ArrowUpRight size={18} /></button></div>}
      <div className="fleet-end-note"><span>PRICES ARE EXAMPLES — FINAL PRICING & AVAILABILITY CONFIRMED BY OUR TEAM.</span><ArrowUpRight size={20} /></div>
    </div></section>
  </>;
}
