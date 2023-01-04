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

  const actionBar = (
    <div>
      <Button primary>Acceapt</Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is am inportant agreement for you</p>
    </Modal>
  );

  return (
    <div className="relative">
      <Button onClick={handleClick} primary>
        OPEN MODAL
      </Button>
      {showModal && modal}
      {/* <button onClick={handleClick}>Open Modal</button>
      {open ? <Modal onClick={handleClose} /> : ""} */}
    </div>
  );
}
