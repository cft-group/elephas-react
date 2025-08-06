import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import ReactDOM from 'react-dom';
import { ModalProps } from './types';

export const Modal = ({
  open,
  title,
  style,
  onClose,
  children,
  container,
  className,
  closeOnEscape = true,
  closeOnClickOutside = true,
  disablePortal = false,
}: ModalProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (closeOnEscape && e.key === 'Escape') onClose();
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (closeOnClickOutside && ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);

    // eslint-disable-next-line consistent-return
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open, onClose, closeOnEscape, closeOnClickOutside]);

  if (!open) return null;

  const modalContent = (
    <div className={classNames('_e_modal', className)} style={style} role="dialog" aria-modal="true">
      <div className="_e_modal__backdrop" />
      <div className="_e_modal__window" ref={ref}>
        {title && <h1 className="_e_modal__heading">{title}</h1>}
        {children}
      </div>
    </div>
  );

  return disablePortal ? modalContent : ReactDOM.createPortal(modalContent, container ?? document.body);
};
