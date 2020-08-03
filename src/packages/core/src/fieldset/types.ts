import { FieldsetHTMLAttributes, ReactNode } from 'react';

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset
export interface FieldsetProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  /**
   * Fieldset elements.
   */
  children: ReactNode;

  /**
   * Additional CSS class.
   */
  className?: string;

  /**
   * Error message.
   */
  error?: string;

  /**
   * Hint message. Hidden when `error` is not empty.
   */
  hint?: string;

  /**
   * Fieldset label.
   */
  legend?: string;
}
