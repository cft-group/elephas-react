import { ReactNode, MouseEvent } from 'react';

export interface SnackbarProps {
  /**
     * Text on the button.
     */
  buttonText: string,

  /**
     * Additional CSS class.
     */
  className?: string,

  /**
     * Number of seconds to wait before automatically calling the
     * `onClose` function.
     * @default 10
     */
  duration?: number,

  /**
     * Controls Snackbar open state.
     */
  isOpen: boolean,

  /**
     * Message to display.
     */
  message: ReactNode,

  /**
     * Callback fired when the component requests to be closed.
     * @param {object} event The event source of the callback.
     * If event `undefined`, `Snackbar` closed by timeout (`duration` expired).
     */
  onClose?: (event?: MouseEvent<HTMLButtonElement>) => void,
}
