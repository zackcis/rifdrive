import { useState } from "react";

// Images use curated online photography; bundled illustrations remain available
// as offline fallbacks if an image is unavailable.
export default function Photo({ src, fallback, alt = "", className = "", loading = "lazy" }) {
  const [broken, setBroken] = useState(false);
  return <img className={className} src={broken ? fallback : src} alt={alt} loading={loading} onError={() => setBroken(true)} />;
}
