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

export interface SelectProps extends AbstractInput {
  /**
   * Default value for uncontrolled input.
   */
  defaultValue?: string;

  /**
   * Select options.
   */
  options: Option[];
}
