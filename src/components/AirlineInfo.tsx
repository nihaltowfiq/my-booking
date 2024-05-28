import { flightData } from '@/data';
import { ReactComponent as Warning } from '@/icons/warning.svg';

export function AirlineInfo({ data }: Props) {
  return (
    <div className="mt-[0.65rem] pl-[2.625rem] relative before:absolute before:content-[''] before:border-[0.113rem] before:border-solid before:-top-2 before:-bottom-2 before:left-[0.938rem] after:content-[url('/my-booking/assets/icons/plane.svg')] after:absolute after:rounded-full after:z-10 after:left-[0rem] after:h-[2rem] after:w-[2rem] after:top-1/2 after:transform after:-translate-y-1/2">
      <div className="w-full rounded-md flex items-center gap-[0.35rem] px-[0.1rem]">
        <div className="w-1/3">
          <p className="leading-6 text-[0.875rem] font-[475] text-secondary-500">
            {data.airline}
          </p>
          <p className="text-[0.875rem] text-secondary-400">
            Flight no : {data.flightNo}
          </p>
        </div>
        <div className="w-1/3">
          <p className="leading-6 text-[0.875rem] font-[475] text-secondary-500">
            {data.plane}
          </p>
          <p className="text-[0.875rem] text-secondary-400">
            Class : <span className="font-[475]">{data.coach}</span>
          </p>
        </div>
      </div>

      {data?.notice && (
        <div className="flex gap-2 px-3 py-2 mt-4 text-xs text-secondary-400 bg-tertiary-200 rounded-md border border-tertiary-300">
          <Warning />
          <p className="flex-1 max-md:max-w-full">{data.notice}</p>
        </div>
      )}
    </div>
  );
}

type Props = {
  data: (typeof flightData)['details'][0];
};
