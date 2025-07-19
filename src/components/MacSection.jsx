import React, { useState } from "react";
import MacCards from "./MacCards";
import ProductModal from "./ProductModal";

const MacSection = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div id="section" className="bg-light p-3">
      <div className="row gap-3 mb-3">
        <MacCards
          price={2449}
          title="MacBook Air M2"
          description="13-inch chip 16GB RAM 256GB – Midnight"
          src="https://pimcdn.sharafdg.com/cdn-cgi/image/width=1200,height=630,fit=pad/images/macbook_air_13_in_m3_midnight_1?1744029966?g=0"
        />
        <MacCards
          price={2749}
          title="MacBook Air M3"
          description="13-inch chip 16GB RAM 256GB – Starlight"
          src="https://pimcdn.sharafdg.com/cdn-cgi/image/width=1200,height=630,fit=pad/images/macbook_air_13_in_m3_starlight_1?1746430534?g=0"
        />
        <MacCards
          price={2999}
          title="MacBook Air M4"
          description="13-inch chip 16GB RAM 256GB – Silver"
          src="https://pimcdn.sharafdg.com/cdn-cgi/image/width=1200,height=630,fit=pad/images/macbook_air_15_in_m3_silver_1?1741165618?izoom=0"
        />
      </div>

      <div className="text-center">
        <button onClick={() => setShowModal(true)} className="btn btn-warning">
          See More
        </button>
      </div>

      <ProductModal show={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default MacSection;
