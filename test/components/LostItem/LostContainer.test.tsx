import React from 'react';
import { render } from '@testing-library/react';
import LostContainer from '../../../components/LostItem/LostContainer';

describe('for LostContainer', () => {
  it('contains main tag', () => {
    const { getByRole } = render(<LostContainer data={null} />, {});
    const mainTag = getByRole('main');

    expect(mainTag).toBeTruthy();
  });
});
