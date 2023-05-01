import { useEffect } from 'react';
import { Backdrop, ModalWindow } from './ModalAddTransactions.styled';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export const ModalAddTransactions = ({ onClose }) => {
  useEffect(() => {
    const onEscClick = e => {
      if (e.code === 'Escape') onClose();
    };

    window.addEventListener('keydown', onEscClick);

    return () => {
      window.removeEventListener('keydown', onEscClick);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) onClose();
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <ModalWindow></ModalWindow>
    </Backdrop>,
    modalRoot
  );
};
