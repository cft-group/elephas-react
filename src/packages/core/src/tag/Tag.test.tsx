import React from 'react';
import { render } from '@testing-library/react';

import { Tag } from '.';

describe('<Tag />', () => {
  it('should have text passed as a child', () => {
    const { container } = render(<Tag>Can I haz some text</Tag>);
    expect(container && container.textContent).toEqual('Can I haz some text');
  });
});
