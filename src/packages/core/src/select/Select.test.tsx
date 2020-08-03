import React from 'react';
import { render } from '@testing-library/react';

import { Select } from '.';

describe('<Select />', () => {
  const getSelect = (el: HTMLElement): HTMLSelectElement | null => el.querySelector('select');

  it('should have ref', () => {
    const ref = React.createRef<HTMLSelectElement>();
    const { container } = render(<Select label="Label" ref={ref} options={[{ title: '123', value: '123' }]} />);
    const input = getSelect(container);

    expect(input).toEqual(ref.current);
  });
});
