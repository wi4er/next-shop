import React from 'react';
import css from './Logo.module.css';
import LogoSvg from './svg/logo.svg';

export function Logo() {
  return (
    <div className={css.index}>
      <LogoSvg />
    </div>
  );
}