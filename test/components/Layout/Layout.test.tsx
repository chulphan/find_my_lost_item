import React from 'react';
import { render } from '@testing-library/react';
import Layout from '../../../components/Layout/Layout';

describe('for Layout', () => {
  it('layout contains header', () => {
    const { getByRole } = render(<Layout children={null} />, {});
    const header = getByRole('banner');

    expect(header).toBeTruthy();
  });
});
