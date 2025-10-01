import React from 'react';
import { ButtonProps } from '../../../types';
import styles from './Button.module.css';

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  variant = 'primary',
  size = 'medium'
}) => {
  const className = [
    styles.button,
    styles[variant],
    styles[size],
    disabled ? styles.disabled : ''
  ].filter(Boolean).join(' ');

  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};