import classNames from '@/services/class-names';
import { ReactComponent as Location } from '@/icons/location.svg';
import { ReactComponent as LocationBlue } from '@/icons/location-blue.svg';

export function LocationBar({
  title,
  airport,
  terminal,
  iconActive = false,
  isLayover = false,
}: Props) {
  return (
    <div className="flex items-center gap-[0.75rem]">
      <div>{iconActive ? <LocationBlue /> : <Location />}</div>
      <div
        className={classNames(
          {
            'bg-primary-300': isLayover,
            'bg-secondary-300': !isLayover,
          },
          'w-full rounded-md flex items-center justify-between gap-[1rem] text-[0.813rem] py-[0.75rem] px-[1rem]'
        )}
      >
        <p className="text-black font-[475]">{title}</p>
        <p className="text-secondary-400">
          {terminal && <span className="font-[475]">{terminal}:&nbsp;</span>}
          {airport}
        </p>
      </div>
    </div>
  );
}

type Props = {
  title: string;
  airport: string;
  terminal?: string;
  iconActive?: boolean;
  isLayover?: boolean;
};
