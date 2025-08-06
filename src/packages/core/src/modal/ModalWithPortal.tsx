import React, { useState } from 'react';
import { Modal } from '.';

export const ModalWithPortal = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button type="button" className="_e_button" onClick={() => setOpen(true)}>
        Open Modal
      </button>
      <Modal open={open} title="Modal Dialog" onClose={() => setOpen(false)}>
        <button type="button" className="_e_button" onClick={() => setOpen(false)}>
          Close Modal
        </button>
      </Modal>
    </div>
  );
};
