export interface MultipleValue {
  /**
   * If true, allow many of the items to be selected.
   * @default false
   */
  multiple: true;
  /**
   * Change handler.
   */
  onChange: (event: React.MouseEvent<HTMLElement>, value: string[]) => void;
  /**
   * Selected value.
   */
  value: string[];
}

export interface SingleValue {
  multiple?: false;
  onChange: (event: React.MouseEvent<HTMLElement>, value: string | null) => void;
  value: string | null;
}

export type ToggleButtonValue = MultipleValue | SingleValue;

export interface ToggleButtonBase {
  /**
   * Additional CSS class.
   */
  className?: string;

  /**
   * Toggle button options.
   */
  items: ToggleButtonItem[];
}

export interface ToggleButtonItem {
  value: string;
}

export type ToggleButtonProps = ToggleButtonBase & ToggleButtonValue;
