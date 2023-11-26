import Rodal from "rodal";
import "rodal/lib/rodal.css";
import "../assets/scss/components/Modal.scss";

const Modal = ({ title, message, visible, setVisible, customFunction }) => {
  return (
    <Rodal visible={visible} onClose={() => setVisible(false)}>
      <div className="modal-container">
        <h2>Delete Confirmation</h2>
        <p>Are you sure you want to delete?</p>
        <div className="control-bar">
          <button
            type="button"
            onClick={() => setVisible(false)}
            className="cancel-btn"
          >
            Cancel
          </button>
          <button type="button" className="delete-btn" onClick={customFunction}>
            Delete
          </button>
        </div>
      </div>
    </Rodal>
  );
};

export default Modal;
