import { ComponentProps } from 'react';
import classNames from '@/services/class-names';

export function Card({ children, className, ...rest }: Props) {
  return (
    <div
      {...rest}
      className={classNames(
        'rounded-[0.5rem] bg-white border border-primary-200 w-full',
        className
      )}
    >
      {children}
    </div>
  );
}

function Header({ children, className, ...rest }: Props) {
  return (
    <div
      {...rest}
      className={classNames(
        'rounded-t-[0.5rem] border-b border-primary-200 py-[1rem] px-[1.25rem]',
        className
      )}
    >
      {children}
    </div>
  );
}

function Content({ children, className, ...rest }: Props) {
  return (
    <div
      {...rest}
      className={classNames(
        'rounded-b-[0.5rem] py-[1rem] px-[1.25rem]',
        className
      )}
    >
      {children}
    </div>
  );
}

type Props = ComponentProps<'div'>;

Card.Header = Header;
Card.Content = Content;
