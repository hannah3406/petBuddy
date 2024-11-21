'use client';

import { Footer } from '../Footer';
import { Header } from '../Header';
import styles from './index.module.scss';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
