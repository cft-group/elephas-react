import React, { useState } from 'react';
import { Snackbar } from '.';
import { Button } from '../button';

export function SnackbarExample() {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!isOpen);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleClick}>
        Snackbar
      </Button>
      <Snackbar
        onClose={handleClose}
        isOpen={isOpen}
        buttonText="Отменить"
        message="Сохранить изменения"
      />
    </>
  );
}
