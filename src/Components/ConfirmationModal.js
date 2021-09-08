import Modal from "react-modal";
import styled from "styled-components";
import { StyledButton } from "./StyledComponents/StyledComponents";

const style = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  content: {
    top: "10%",
    left: "10%",
    right: "10%",
    bottom: "50%",
    maxWidth: "40em",
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    flexDirection: "column",
  },
};

const ConfirmationModal = ({ fetchResponse, modalIsOpen, setModalIsOpen }) => {
  const { status, title, message } = fetchResponse;
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequstClose={() => setModalIsOpen(false)}
      style={style}
    >
      <h3 style={{ textAlign: "center" }}>
        <b>{status}</b> {title}
      </h3>
      <p style={{ textAlign: "center" }}>{message}</p>
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
