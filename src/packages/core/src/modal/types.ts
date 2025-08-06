import React from 'react';

export type ModalProps = {
  /**
   * Modal content.
   */
  children: React.ReactNode;
  /**
   * className for modal root element.
   */
  className?: string;

  /**
   * If true, modal can be closed by clicking outside.
   * @default true
   */
  closeOnClickOutside?: boolean;

  /**
   * If true, modal can be closed with Escape key.
   * @default true
   */
  closeOnEscape?: boolean;

  /**
   * Container element to render modal into.
   */
  container?: HTMLElement;

  /**
   * If true, disables rendering inside a portal.
   * @default false
   */
  disablePortal?: boolean;

  /**
   * Callback fired when modal is closed.
   */
  onClose: () => void;

  /**
   * If true, modal is visible.
   */
  open: boolean;

  /**
   * Inline styles for modal root element.
   */
  style?: React.CSSProperties;

  /**
   * Title Title of modal.  modal.
   */
  title?: string;
};
