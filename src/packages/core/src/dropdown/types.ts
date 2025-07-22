import { InputHTMLAttributes } from 'react';
import { AbstractInput } from '../base-input/types';

export type DropdownOption = {
  /**
   * Option title.
   */
  title: string;

  /**
   * Option value.
   */
  value: string;
};

export type DropdownProps = AbstractInput<InputHTMLAttributes<HTMLSelectElement>> & {
  /**
   * Default value for uncontrolled input.
   */
  defaultValue?: string;

  /**
   * Change handler.
   */
  onChange: (value: string) => void;

  /**
   * Dropdown options.
   */
  options: DropdownOption[];

  /**
   * Dropdown value.
   */
  value?: string;
};
