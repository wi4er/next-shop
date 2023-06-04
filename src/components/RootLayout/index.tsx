import React from 'react';
import { HeaderBar } from '@/components/HeaderBar';
import { FooterBar } from '@/components/FooterBar';
import css from './index.module.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderBar />

      <main className={css.page}>
        {children}
      </main>

      <FooterBar />
    </>
  );
}