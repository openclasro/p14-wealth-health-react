import Modal from "react-modal"

Modal.setAppElement("#root")
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
}

export default function EmployeeCreatedModal({ isOpen, onRequestClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="New employee"
    >
      <h3>Employee created!</h3>
      <button onClick={onRequestClose}>Ok!</button>
    </Modal>
  )
}
