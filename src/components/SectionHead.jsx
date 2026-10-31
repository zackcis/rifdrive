import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
export default function SectionHead({ kicker, title, text, link, linkText = "Explore more" }) {
  return <div className="section-heading">
    <div><span className="eyebrow"><span className="orange-dash" />{kicker}</span><h2 className="display-heading">{title}</h2></div>
    <div className="heading-aside">{text && <p>{text}</p>}{link && <Link className="text-link" to={link}>{linkText} <ArrowUpRight size={18} /></Link>}</div>
  </div>;
}
