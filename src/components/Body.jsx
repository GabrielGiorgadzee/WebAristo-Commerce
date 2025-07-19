import { useState } from "react";
import Carousel from "./Carousel";
import MacSection from "./MacSection";
import ProductModal from "./ProductModal";

const Body = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Carousel />
      <MacSection onShowMore={() => setShowModal(true)} />
      <ProductModal show={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default Body;
