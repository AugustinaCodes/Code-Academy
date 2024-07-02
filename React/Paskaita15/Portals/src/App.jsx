import "./App.css";
import { useState } from "react";
import ConfirmModal from "./components/ConfirmModal/ConfirmModal";
import Modal from "./components/Modal/Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleConfirm() {
    console.log("Confirmed");
    setIsModalOpen(false);
  }

  function handleCancel() {
    console.log("Canceled");
    setIsModalOpen(false);
  }

  function handleOpenSecondModal() {
    setIsSecondModalOpen(true);
  }

  function handleSecondModalClose() {
    setIsSecondModalOpen(false);
  }

  return (
    <>
      <button onClick={handleOpenModal}>Open modal</button>
      <button onClick={handleOpenSecondModal}>Open modal 2</button>
      {isModalOpen && (
        <ConfirmModal
          onCancel={handleCancel}
          onConfirm={handleConfirm}
          text={"Are you sure?"}
        />
      )}
      <Modal open={isSecondModalOpen} handleClose={handleSecondModalClose}>
        <h1>Some text</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          nostrum, non voluptatum veniam fugit numquam sapiente odit asperiores
          voluptas. Hic.
        </p>
      </Modal>
    </>
  );
}

export default App;
