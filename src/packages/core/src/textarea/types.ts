import { AbstractInput } from '../base-input/types';

export interface TextareaProps extends AbstractInput {
  /**
   * Default value for uncontrolled input.
   */
  defaultValue?: string;

  /**
   * Textarea row attribute.
   * @default 3
   */
  rows: number
}
