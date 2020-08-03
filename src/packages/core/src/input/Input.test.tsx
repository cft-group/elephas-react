import React from 'react';
import {
  render, fireEvent, cleanup,
} from '@testing-library/react';

import { Input } from './Input';

describe('<Input />', () => {
  const getInput = (el: HTMLElement): HTMLInputElement | null => el.querySelector('input');
  afterEach(cleanup);

  it('should have "disabled" attribute present when appearance is set to "disabled"', () => {
    const { container } = render(<Input appearance="disabled" label="Label" />);
    const input = getInput(container);

    expect(input && input.hasAttribute('disabled')).toBeTruthy();
  });

  it('should have "readonly" attribute present when appearance is set to "readonly"', () => {
    const { container } = render(<Input appearance="readonly" label="Label" />);
    const input = getInput(container);

    expect(input && input.hasAttribute('readonly')).toBeTruthy();
  });

  it('should have a label', () => {
    const { container } = render(<Input label="Label" />);

    const getLabel = (el: HTMLElement): HTMLSpanElement | null => el.querySelector('label > span');
    const label = getLabel(container);

    expect(label).toBeTruthy();
    expect(label && label.textContent).toEqual('Label');
  });

  it('method onFocus has been called', () => {
    const onFocus = jest.fn();
    const { container } = render(<Input onFocus={onFocus} label="Label" />);
    const input = getInput(container);

    input && input.focus();
    expect(onFocus).toHaveBeenCalledTimes(1);
  });

  it('method onFocus has not been called on disabled input', () => {
    const onFocus = jest.fn();
    const { container } = render(<Input onFocus={onFocus} appearance="disabled" label="Label" />);
    const input = getInput(container);

    expect(input && input.hasAttribute('disabled')).toBeTruthy();

    input && input.focus();
    expect(onFocus).toHaveBeenCalledTimes(0);
  });

  it('method onChange has been called', () => {
    const onChange = jest.fn();
    const { container } = render(<Input onChange={onChange} label="Label" />);
    const input = getInput(container);

    input && fireEvent.change(input, { target: { value: 'a' } });
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('method onBlur has been called', () => {
    const onBlur = jest.fn();
    const { container } = render(<Input onBlur={onBlur} label="Label" />);
    const input = getInput(container);

    input && fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalledTimes(1);
  });
});
