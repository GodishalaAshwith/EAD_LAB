import React, { useState } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ onClose }) => {
  return createPortal(
    <div style={{ position: 'fixed', top: '20%', left: '40%', background: 'white', padding: '20px', border: '1px solid black' }}>
      <h2>Modal Window</h2>
      <p>This modal is rendered outside the main app div.</p>
      <button onClick={onClose}>Close</button>
    </div>,
    document.getElementById('modal-root')
  );
};

const ModalButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      {isOpen && <Modal onClose={() => setIsOpen(false)} />}
    </div>
  );
};

export default ModalButton;