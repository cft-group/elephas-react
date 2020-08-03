import React from 'react';
import { render } from '@testing-library/react';

import { Banner } from './Banner';
import { BannerProps } from './types';

describe('<Banner />', () => {
  const props: BannerProps = {
    appearance: 'danger',
    children: 'Сообщение об ошибке',
  };

  it('should have a children', () => {
    const message = 'Сообщение об ошибке';

    const { queryByText } = render(<Banner {...props}>{message}</Banner>);
    expect(queryByText(message)).not.toBeNull();
  });
});
