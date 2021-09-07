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
      <p>{message}</p>
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
