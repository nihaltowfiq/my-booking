import { ReactNode } from 'react';
import classNames from '@/services/class-names';
import { ReactComponent as Location } from '@/icons/location.svg';
import { ReactComponent as LocationBlue } from '@/icons/location-blue.svg';

export function Bar({
  leftContent,
  rightContent,
  iconActive = false,
  contentBg = 'gray',
}: Props) {
  return (
    <div className="flex items-center gap-[0.75rem]">
      <div>{iconActive ? <LocationBlue /> : <Location />}</div>
      <div
        className={classNames(
          {
            'bg-primary-200': contentBg === 'gray',
            'bg-secondary-300': contentBg === 'blue',
          },
          'w-full rounded-md flex items-center justify-between gap-[1rem] text-[0.813rem] py-[0.75rem] px-[1rem]'
        )}
      >
        <p className="text-black font-[475]">{leftContent}</p>
        <div className="text-secondary-400">{rightContent}</div>
      </div>
    </div>
  );
}

type Props = {
  leftContent: string;
  iconActive?: boolean;
  rightContent: ReactNode;
  contentBg?: 'gray' | 'blue';
};
