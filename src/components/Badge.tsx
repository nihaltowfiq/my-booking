import { PropsWithChildren } from 'react';

export function Badge({ children }: PropsWithChildren) {
  return (
    <span className="py-[0.3rem] px-[0.8rem] bg-primary-300 text-primary-400 rounded-full text-[0.75rem] font-medium border border-primary-200">
      {children}
    </span>
  );
}
