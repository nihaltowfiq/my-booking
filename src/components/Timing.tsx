import { flightData } from '@/data';
import { ReactComponent as Airline } from '@/icons/airline.svg';

export function Timing({ data }: Props) {
  return (
    <div className="flex items-center gap-[0.75rem]">
      <div>
        <Airline />
      </div>
      <div className="w-full rounded-md flex items-center justify-between gap-[1rem] px-[0.1rem]">
        <div className="w-1/3">
          <p className="font-semibold leading-6 text-[1rem]">
            {data.from} - {data.to}
          </p>
          <p className="text-[0.875rem] text-secondary-400">{data.duration}</p>
        </div>
        <div className="w-1/3">
          <p className="font-semibold leading-6 text-[1rem]">
            {data.startTime}
          </p>
          <p className="text-[0.875rem] text-secondary-400">{data.startDate}</p>
        </div>
        <div className="w-1/3">
          <p className="font-semibold leading-6 text-[1rem]">{data.endTime}</p>
          <p className="text-[0.875rem] text-secondary-400">{data.endDate}</p>
        </div>
      </div>
    </div>
  );
}

type Props = {
  data: (typeof flightData)['details'][0];
};
