import React from 'react';
import Header from '../Header/Header';

export default function Layout({ children }): JSX.Element {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
