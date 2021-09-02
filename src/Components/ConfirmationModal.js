import Modal from "react-modal";
import styled from "styled-components";
import { StyledButton } from "./StyledComponents/StyledComponents";

const style = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  content: {
    top: "50px",
    left: "50px",
    right: "50px",
    bottom: "50%",
    display: "flex",
    flexDirection: "column",
  },
};

const ConfirmationModal = ({ fetchResponse, modalIsOpen, setModalIsOpen }) => {
  const { title, status, statusText } = fetchResponse;
  const connectionErrMessage = (
    <p>
      Please ensure that the server is running and connected to a database.
      Follow the instructions on the README.md to connect to your own database."
    </p>
  );
  const confirmationMessage = (
    <p>
      Article <em>"{title}"</em> was successfully
      {status === 201 ? " uploaded" : " updated"}!
    </p>
  );
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequstClose={() => setModalIsOpen(false)}
      style={style}
    >
      <h3 style={{ textAlign: "center" }}>
        <b>{status}</b> {statusText}
      </h3>
      {status < 400 ? confirmationMessage : connectionErrMessage}
      <ConfirmationButton onClick={() => setModalIsOpen(false)}>
        OK
      </ConfirmationButton>
    </Modal>
  );
};

export default ConfirmationModal;

const ConfirmationButton = styled(StyledButton)`
  margin-top: auto;
`;
