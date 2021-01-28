import React from 'react';
import { render } from '@testing-library/react';
import Header from '../../../components/Header/Header';

describe('for header', () => {
  it('header contains app title', () => {
    const { getByRole } = render(<Header />, {});
    const banner = getByRole('banner');
    const titleBox = banner.querySelector('#title') as HTMLElement;
    const titleText = titleBox.textContent;

    expect(banner).toContainElement(titleBox);

    expect(titleBox).toHaveTextContent(titleText);

    expect(titleText).toBe('잃어버린 내..');
  });

  it('header contain search button', () => {
    const { getByRole } = render(<Header />, {});
    const header = getByRole('banner');
    const buttonText = header.getElementsByTagName('button')[0].textContent;

    expect(header).toContainHTML('button');

    expect(buttonText).toBe('검색');
  });
});
