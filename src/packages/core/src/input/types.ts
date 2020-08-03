import { AbstractInput } from '../base-input/types';

export interface InputProps extends AbstractInput {
  /**
   * Default value for uncontrolled input.
   */
  defaultValue?: string;

  /**
   * Input type.
   * @default text
   */
  type?: string;
}
