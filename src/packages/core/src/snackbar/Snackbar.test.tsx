import React, { MouseEvent } from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Snackbar } from '.';

describe('<Snackbar />', () => {
  const getButton = (el: HTMLElement): HTMLButtonElement | null => el.querySelector('button');

  let onClose: (event?: MouseEvent<HTMLButtonElement>) => void;
  let btnText: string;
  let message: string;

  beforeEach(() => {
    onClose = jest.fn();
    btnText = 'Click me';
    message = 'I am Snackbar';
  });

  it('method onClose has been called after click button', () => {
    const { container } = render(
      <Snackbar
        buttonText={btnText}
        message={message}
        isOpen={false}
        onClose={onClose}
      />,
    );
    const button = getButton(container);

    button && fireEvent.click(button);

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
