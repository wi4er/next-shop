import React from 'react';
import css from './index.module.css';
import { Logo } from './Logo';
import { Menu } from './Menu';
import { Icons } from './Icons';
import { Burger } from './Burger';

export function HeaderBar() {
  return (
    <header className={css.index}>
      <div className={css.bar}>
        <Burger />

        <Logo />

        <Menu />

        <Icons />
      </div>
    </header>
  );
}