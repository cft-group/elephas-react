import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { SnackbarProps } from './types';
import { Button } from '..';

export function Snackbar(props: SnackbarProps) {
  const {
    buttonText,
    className,
    duration = 10,
    isOpen,
    message,
    onClose,
  } = props;

  const [autoHideDuration, setAutoHideDuration] = useState(duration);
  let time = autoHideDuration;

  const snackbarClassNames = classNames({
    [`${className}`]: className,
    _e_snackbar: true,
    _e_snackbar_open: isOpen,
    _e_snackbar_hidden: !isOpen,
  });

  useEffect(() => {
    let interval: number;
    if (isOpen) {
      time = duration;
      setAutoHideDuration(time);
      interval = window.setInterval(() => {
        if (time !== 0) {
          time -= 1;
          setAutoHideDuration(time);
        } else {
          onClose && onClose(undefined);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isOpen]);

  return (
    <div className={snackbarClassNames}>
      <div className="_e_snackbar__text">
        {message}
        <span className="_e_snackbar__timer">
          :
          {autoHideDuration}
        </span>
      </div>
      <Button onClick={onClose} className="_e_snackbar__button _e_button">{buttonText}</Button>
    </div>
  );
}
