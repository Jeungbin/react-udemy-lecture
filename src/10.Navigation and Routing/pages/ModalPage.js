import React, { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

export default function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="relative">
      <Button onClick={handleClick} primary>
        OPEN MODAL
      </Button>
      {showModal && <Modal onClose={handleClose} />}
      {/* <button onClick={handleClick}>Open Modal</button>
      {open ? <Modal onClick={handleClose} /> : ""} */}
    </div>
  );
}
