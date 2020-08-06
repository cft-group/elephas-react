import { InputHTMLAttributes } from 'react';
import { AbstractInput } from '../base-input/types';

type Option = {
  /**
   * Option title.
   */
  title: string;

  /**
   * Option value.
   */
  value: string;
};

export type SelectProps = AbstractInput<InputHTMLAttributes<HTMLSelectElement>> & {
  /**
   * Default value for uncontrolled input.
   */
  defaultValue?: string;

  /**
   * Select options.
   */
  options: Option[];
};
