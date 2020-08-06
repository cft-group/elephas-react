import { InputHTMLAttributes } from 'react';
import { AbstractInput } from '../base-input/types';

export type InputProps = AbstractInput<InputHTMLAttributes<HTMLInputElement>> & {
  /**
   * Default value for uncontrolled input.
   */
  defaultValue?: string;
};
