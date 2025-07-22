import { macs } from "../data/macs";
import MacCards from "./MacCards";

const ProductModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
      <div className="custom-backdrop" onClick={onClose}></div>
      <div className="modal d-block custom-modal" tabIndex="-1">
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content shadow-lg border-0 rounded-4">
            <div className="modal-header border-0">
              <h5 className="modal-title fw-bold fs-4">
                All MacBook Pro Products
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
              ></button>
            </div>
            <div className="modal-body">
              <div className="row g-4">
                {macs.map((mac) => (
                  <MacCards
                    key={mac.id}
                    price={mac.price}
                    title={mac.title}
                    description={mac.description}
                    src={mac.url}
                    quantity={mac.quantity}
                  />
                ))}
              </div>
            </div>
            <div className="modal-footer border-0 justify-content-center">
              <button className="btn btn-warning px-4 py-2" onClick={onClose}>
                See Less
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ProductModal;
