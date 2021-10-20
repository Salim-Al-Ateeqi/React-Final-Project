// import React from "react";
// import Modal from "react-modal";
// import { useState } from "react";
// import Button from "react-bootstrap/Button";

// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//   },
// };

// function Jam3iyatModal() {
//   const [isOpen, setIsOpen] = useState(false);

//   const openModal = () => setIsOpen(true);
//   const closeModal = () => setIsOpen(false);

//   return (
//     <div className="modalBack">
//       <button className="btn btn-outline-dark btn-lg" onClick={openModal}>
//         Create a Jam3iya!
//       </button>
//       <Modal
//         isOpen={isOpen}
//         onRequestClose={closeModal}
//         style={customStyles}
//         contentLabel="Example Modal"
//       >
//         <form className="form">
//           <label>
//             Jam3iya Name: <input />
//           </label>
//           <label>
//             Your Name: <input />
//           </label>
//           <label>
//             Your E-mail: <input />
//           </label>
//         </form>
//         <input type="checkbox" className="checkbox" />
//         <div className="agreement">
//           I hereby agree to all <code>terms and conditions</code>
//         </div>
//         <Button className="center" variant="outline-success">
//           Submit
//         </Button>{" "}
//       </Modal>
//     </div>
//   );
// }

// export default Jam3iyatModal;
