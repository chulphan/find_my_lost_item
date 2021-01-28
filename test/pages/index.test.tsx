import React from 'react';
import { render } from '@testing-library/react';
import Home from '../../pages/index';

describe('homepage', () => {
  it('contains main tag', () => {
    const { getByRole } = render(<Home data={null} />, {});
    const mainTag = getByRole('main');

    expect(mainTag).toBeTruthy();
  });
});
