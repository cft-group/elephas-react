import { ChangeEventHandler } from 'react';
import { CommonAttributes } from 'common';

interface RadioGroupOption {
  /**
   * Radio description.
   */
  description?: string;

  /**
   * Radio option title.
   */
  title: string;

  /**
   * Radio option value.
   */
  value: string;
}

export interface RadioGroupProps extends CommonAttributes {
  /**
   * Additional CSS class.
   */
  className?: string;

  /**
   * Radio group disabled state.
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
   * Radio group id.
   */
  id?: string;

  /**
   * Radio group legend.
   */
  legend?: string;

  /**
   * Radio group name.
   * @default ''
   */
  name: string;

  /**
   * Change handler.
   */
  onChange: ChangeEventHandler<HTMLInputElement>;

  /**
   * Radio group options.
   */
  options: RadioGroupOption[];

  /**
   * Radio group readonly state.
   * @default false
   */
  readonly?: boolean;

  /**
   * Value of selected option.
   */
  value: string;
}
