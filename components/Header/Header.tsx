import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <div className={styles.header_box}>
        <nav className={styles.header_nav}>
          <div className={styles.nav_box}>
            <Link href='/'>
              <a id='title'>
                <span className={styles.app_title_span}>잃어버린 내..</span>
              </a>
            </Link>
            <button className={styles.search_btn}>검색</button>
          </div>
        </nav>
      </div>
    </header>
  );
}
