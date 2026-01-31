import React from 'react';
import classNames from 'classnames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      children,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles = 'font-medium transition-all duration-300 rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 font-heading disabled:opacity-50 disabled:cursor-not-allowed';

    const variantStyles = {
      primary: 'bg-primary-600 text-white hover:bg-primary-700 focus-visible:outline-primary-600',
      secondary:
        'bg-gray-200 text-gray-900 hover:bg-gray-300 focus-visible:outline-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600',
      tertiary:
        'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 focus-visible:outline-primary-600',
      ghost:
        'text-primary-600 hover:bg-primary-50 dark:text-primary-400 dark:hover:bg-primary-900/20 focus-visible:outline-primary-600',
    };

    const sizeStyles = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2.5 text-base',
      lg: 'px-6 py-3 text-lg',
    };

    return (
      <button
        ref={ref}
        className={classNames(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        disabled={disabled || isLoading}
        aria-busy={isLoading}
        {...props}
      >
        <span className="flex items-center justify-center gap-2">
          {isLoading && (
            <span
              className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"
              role="status"
              aria-label="Carregando"
            />
          )}
          {children}
        </span>
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
