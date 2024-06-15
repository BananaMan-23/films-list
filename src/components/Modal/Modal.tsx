import React from "react";
import style from "./Modal.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  movie: any;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, movie }) => {
  if (!isOpen) return null;

  return (
    <div className={style.modalOverlay}>
      <div className={style.modalContent}>
        <button onClick={onClose}>Закрыть</button>
        <h2>{movie.title}</h2>
        <p>Время: {movie.runtime} минут</p>
        <p>Описание: {movie.summary}</p>
      </div>
    </div>
  );
};

export default Modal;
