import { ChangeEventHandler, InputHTMLAttributes } from 'react';

export interface RadioProps extends InputHTMLAttributes<HTMLElement> {
  /**
   * Radio checked state.
   */
  checked?: boolean;

  /**
   * Additional CSS class.
   */
  className?: string;

  /**
   * Default value for uncontrolled input.
   */
  defaultChecked?: boolean;

  /**
   * Radio disabled state.
   * @default false
   */
  disabled?: boolean;

  /**
   * Radio id.
   */
  id?: string;

  /**
   * Radio label.
   */
  label?: string;

  /**
   * Radio name.
   * @default ''
   */
  name?: string;

  /**
   * Change handler.
   */
  onChange?: ChangeEventHandler<HTMLInputElement>;

  /**
   * Radio readonly state.
   * @default false
   */
  readonly?: boolean;

  /**
   * Radio required attribute.
   */
  required?: boolean;

  /**
   * Radio value.
   * @default ''
   */
  value?: string;
}
