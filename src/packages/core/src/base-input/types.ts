import {
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  ReactElement,
  ReactNode,
} from 'react';

export type HTMLAttributesComposite =
    | InputHTMLAttributes<HTMLInputElement>
    | InputHTMLAttributes<HTMLSelectElement>
    | TextareaHTMLAttributes<HTMLTextAreaElement>;

export type AbstractInput<T extends HTMLAttributesComposite> = T & {
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

  icons?: ReactNode,

  /**
   * Disables pointer events for icons.
   * @default false
   */
  isIconPassive?: boolean;

  /**
   * Field label.
   */
  label: string;

  /**
   * Field width.
   * @default 100%
   */
  width?: '2' | '4' | '6' | '8' | '12' | '100%';
};

export type BaseInputProps<T extends HTMLAttributesComposite> = AbstractInput<T> & {
  children: ReactElement<T>;
};
