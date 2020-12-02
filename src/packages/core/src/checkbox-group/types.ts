import { ChangeEventHandler } from 'react';
import { CommonAttributes } from 'common';

interface CheckboxGroupOption {
  /**
   * Checkbox description.
   */
  description?: string;

  /**
   * Checkbox option title.
   */
  title: string;

  /**
   * Checkbox option value.
   */
  value: string;
}

export interface CheckboxGroupProps extends CommonAttributes {
  /**
   * Additional CSS class.
   */
  className?: string;

  /**
   * Checkbox group disabled state.
   * @default false
   */
  disabled?: boolean;

  /**
   * Error message.
   */
  error?: string;

  /**
   * Hint message. Hidden when `error` is not empty.
   */
  hint?: string;

  /**
   * Checkbox group id.
   */
  id?: string;

  /**
   * Checkbox group legend.
   */
  legend?: string;

  /**
   * Checkbox group name.
   * @default ''
   */
  name: string;

  /**
   * Change handler.
   */
  onChange: ChangeEventHandler<HTMLInputElement>;

  /**
   * Checkbox group options.
   */
  options: CheckboxGroupOption[];

  /**
   * Checkbox group readonly state.
   * @default false
   */
  readonly?: boolean;

  /**
   * Values of selected options.
   */
  value: string[];
}
