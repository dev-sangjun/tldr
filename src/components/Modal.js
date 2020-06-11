import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { MdClear } from "react-icons/md";
import { closeModal } from "../reducers";
const Modal = props => {
  const { className } = props;
  const { isOpen, component } = useSelector(state => state.modal);
  const dispatch = useDispatch();
  const onClose = () => dispatch(closeModal());
  return (
    <div className={className} style={{ display: isOpen ? "flex" : "none" }}>
      <div className="modal-wrapper">
        {component}
        <MdClear className="close-btn btn" onClick={onClose} />
      </div>
    </div>
  );
};

export default styled(Modal)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(0.125rem);
  display: flex;
  justify-content: center;
  align-items: center;
  .modal-wrapper {
    position: relative;
    background-color: white;
    width: 30rem;
    height: 40rem;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
    border-radius: 0.25rem;
    .close-btn {
      position: absolute;
      top: 1rem;
      right: 1rem;
      font-size: 1.5em;
    }
  }
`;
