import {
  ChangeEventHandler,
  FocusEventHandler,
  InputHTMLAttributes,
  KeyboardEventHandler,
  TextareaHTMLAttributes,
  ReactElement,
} from 'react';

export type HTMLAttributesComposite = InputHTMLAttributes<HTMLElement> | TextareaHTMLAttributes<HTMLElement>;

export type AbstractInput = {
  /**
   * Visual appearance.
   * @default default
   */
  appearance?: 'default' | 'disabled' | 'error' | 'readonly';

  /**
   * Additional CSS class.
   */
  className?: string;

  /**
   * Error message. Must be set when appearance is set to `error`.
   */
  error?: string;

  /**
   * Hint message. Hidden when appearance is set to `error`.
   */
  hint?: string;

  /**
   * Field label.
   */
  label: string;

  /**
   * Field name.
   * @default ''
   */
  name?: string;

  /**
   * Blur handler.
   */
  onBlur?: FocusEventHandler<HTMLElement>;

  /**
   * Change handler.
   */
  onChange?: ChangeEventHandler<HTMLElement>;

  /**
   * Focus handler.
   */
  onFocus?: FocusEventHandler<HTMLElement>;

  /**
   * KeyDown handler.
   */
  onKeyDown?: KeyboardEventHandler<HTMLElement>;

  /**
   * Field value.
   */
  value?: string | string[] | number;

  /**
   * Field width.
   * @default 100%
   */
  width?: '2' | '4' | '6' | '8' | '12' | '100%';
};

export interface BaseInputProps extends AbstractInput {
  children: ReactElement<HTMLAttributesComposite>;
}
