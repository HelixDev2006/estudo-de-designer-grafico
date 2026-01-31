import React from 'react';
import classNames from 'classnames';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'elevated' | 'outlined';
  children: React.ReactNode;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ variant = 'elevated', children, className, ...props }, ref) => {
    const baseStyles = 'rounded-lg p-6 transition-all duration-300';

    const variantStyles = {
      elevated: 'bg-white shadow-md hover:shadow-lg dark:bg-gray-800 dark:shadow-gray-700/50',
      outlined: 'border-2 border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900',
    };

    return (
      <div
        ref={ref}
        className={classNames(baseStyles, variantStyles[variant], className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;
