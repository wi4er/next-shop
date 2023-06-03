import React from 'react';
import css from './Button.module.css';
import font from '../styles/fonts.module.css';
import cn from 'classnames';

interface ButtonProps {
  children: React.ReactNode;
  size: ButtonSize;
  disabled?: boolean;
  onClick: () => void;
}

export enum ButtonSize {
  SMALL,
  BIG,
}

export function Button(props: ButtonProps) {
  const { children, size, disabled = false, onClick } = props;

  return (
    <button
      className={cn(css.index, {
        [font.medium_20]: size === ButtonSize.SMALL,
        [font.regular_20]: size === ButtonSize.BIG,
        [css.small]: size === ButtonSize.SMALL,
        [css.big]: size === ButtonSize.BIG,
        [css.disabled]: disabled,
      })}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}