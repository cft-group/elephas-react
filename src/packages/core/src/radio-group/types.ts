import { ChangeEventHandler } from 'react';
import { CommonAttributes } from 'common';

interface RadioGroupOption {
  value: string;
  title: string;
}

export interface RadioGroupProps extends CommonAttributes {
  /**
   * Additional CSS class.
   */
  className?: string;
  /**
   * RadioGroup readonly state.
   * @default false
   */
  readonly?: boolean;
  /**
   * RadioGroup disabled state.
   * @default false
   */
  disabled?: boolean;
  /**
   * RadioGroup id.
   */
  id?: string;
  /**
   * Value of the selected radio button.
   */
  value: string;
  /**
   * RadioGroup legend.
   */
  legend?: string;
  /**
   * RadioGroup name.
   */
  name: string;
  /**
   * Change handler.
   */
  onChange: ChangeEventHandler<HTMLInputElement>;
  /**
   * RadioGroup options
   */
  options: RadioGroupOption[];
}
