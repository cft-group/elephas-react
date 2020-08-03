import React from 'react';
import {
  render, fireEvent, cleanup,
} from '@testing-library/react';

import { Button } from '.';

describe('<Button />', () => {
  afterEach(cleanup);
  const getButton = (el: HTMLElement): HTMLButtonElement | null => el.querySelector('button');

  it('should have rendered text', () => {
    const { container } = render(<Button>Some arbitrary text</Button>);
    const button = getButton(container);

    expect(button?.textContent).toBe('Some arbitrary text');
  });

  it('should be disabled', () => {
    const onClick = jest.fn();
    const { container } = render(<Button disabled onClick={onClick}>Some arbitrary text</Button>);
    const button = getButton(container);

    button && fireEvent.click(button);

    expect(button?.disabled).toBeTruthy();
    expect(onClick).toHaveBeenCalledTimes(0);
  });
});
