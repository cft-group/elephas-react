import { TextareaHTMLAttributes } from 'react';
import { AbstractInput } from '../base-input/types';

export type TextareaProps = AbstractInput<TextareaHTMLAttributes<HTMLTextAreaElement>> & {
  /**
   * Default value for uncontrolled input.
   */
  defaultValue?: string;
};
