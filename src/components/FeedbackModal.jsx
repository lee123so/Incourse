import styled from "@emotion/styled";
import React from "react";

const FeedbackModal = (props) => {
  const closeModal = () => {
    props.closeModal();
  }
 
  return (
    <Modal onClick={closeModal}>
      <ModalBody onClick={(e) => e.stopPropagation()}>
        <ModalCloseBtn onClick={closeModal}>
          ✖
        </ModalCloseBtn>
        {props.children}
      </ModalBody>
    </Modal>
  );
};

export default FeedbackModal;

const Modal = styled.div`
  /* modal창 외부화면 */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalBody = styled.div`
  /* modal창 */
  position: absolute;
  width: 300px;
  height: 500px;
  padding: 40px;
  text-align: center;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
`

const ModalCloseBtn = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  border: none;
  color: rgba(0, 0, 0, 0.7);
  background-color: transparent;
  font-size: 20px;
  :hover {
    cursor: pointer;
  }
`