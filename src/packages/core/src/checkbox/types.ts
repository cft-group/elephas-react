import { ChangeEventHandler, InputHTMLAttributes } from 'react';

export interface CheckboxProps extends InputHTMLAttributes<HTMLElement> {
  /**
   * Checkbox checked state.
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
   * Checkbox description.
   */
  description?: string;

  /**
   * Checkbox disabled state.
   * @default false
   */
  disabled?: boolean;

  /**
   * Checkbox id.
   */
  id?: string;

  /**
   * Checkbox label.
   */
  label?: string;

  /**
   * Checkbox name.
   * @default ''
   */
  name?: string;

  /**
   * Change handler.
   */
  onChange?: ChangeEventHandler<HTMLInputElement>;

  /**
   * Checkbox readonly state.
   * @default false
   */
  readonly?: boolean;

  /**
   * Checkbox required attribute.
   */
  required?: boolean;

  /**
   * Checkbox value.
   * @default ''
   */
  value?: string;
}
