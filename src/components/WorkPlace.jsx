import React, { useState } from "react";
import Modal from "react-modal";
import WorkPlaceStyle from "./WorkPlace.module.css";
import TableContent from "./TableContent";

Modal.setAppElement("#root");

export default function WorkPlace() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [folders, setFolders] = useState([]);
  const [newFolderName, setNewFolderName] = useState("");
  const [showTableContent, setShowTableContent] = useState(false);
 

  function handleOpenNewFolderModal() {
    setModalIsOpen(true);
  }

  function handleCloseModal() {
    setModalIsOpen(false);
  }

  function handleNewFolderNameChange(event) {
    setNewFolderName(event.target.value);
  }



  function handleCreateNewFolder() {
    if (newFolderName.trim() !== "") {
      setFolders([...folders, newFolderName]);
      setNewFolderName("");
      handleCloseModal();
    }
  }


  function handleClick(){
    setShowTableContent((prevShowTableContent) => !prevShowTableContent);

  }

  return (
    <>
      <div className={WorkPlaceStyle.workPlace}>
        <h1>My WorkPlace</h1>
        <button
          className={WorkPlaceStyle.btn}
          onClick={handleOpenNewFolderModal}
        >
          New Folder
        </button>
        <button  className={WorkPlaceStyle.btn} onClick={handleClick}>New Table</button> <br />
      </div>
      <p className={WorkPlaceStyle.inpt}>
        {" "}
        <input type="text" placeholder="search for any table" />
      </p>
      <h4>MY TABLES</h4>
      {folders.map((folder, index) => (
        <div key={index}>{folder}</div>
      ))}
      

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Create New Folder"
        className={WorkPlaceStyle.modal}
        overlayClassName={WorkPlaceStyle.overlay}
      >
        <h2>Create Folder</h2>
        <input
          type="text"
          placeholder="Your folder name"
          value={newFolderName}
          onChange={handleNewFolderNameChange}
        />
        <button onClick={handleCreateNewFolder}>Create</button>
      </Modal>
      {showTableContent && <TableContent />}

    </>
  );
}
