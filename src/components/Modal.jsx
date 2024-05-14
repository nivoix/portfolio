/* eslint-disable react/prop-types */

const Modal = ({ isopen, setIsOpen }) => {
  return isopen ? (
    <div className="modal">
      <div className="modalContent">
        <h1 className="modalTitle">Message envoyé!</h1>
        <button onClick={() => setIsOpen(false)}>Fermer</button>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Modal;
