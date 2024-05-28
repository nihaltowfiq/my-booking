import { ReactComponent as Airline } from '@/icons/airline.svg';

export function FlightTime() {
  return (
    <div className="flex items-center gap-[0.75rem]">
      <div>
        <Airline />
      </div>
      <div className="w-full rounded-md flex items-center justify-between gap-[1rem] px-[0.1rem]">
        <div className="w-1/3">
          <p className="font-semibold leading-6 text-[1rem]">DAC - DXB</p>
          <p className="text-[0.875rem] text-secondary-400">12 hr 20 min</p>
        </div>
        <div className="w-1/3">
          <p className="font-semibold leading-6 text-[1rem]">DAC - DXB</p>
          <p className="text-[0.875rem] text-secondary-400">12 hr 20 min</p>
        </div>
        <div className="w-1/3">
          <p className="font-semibold leading-6 text-[1rem]">DAC - DXB</p>
          <p className="text-[0.875rem] text-secondary-400">12 hr 20 min</p>
        </div>
      </div>
    </div>
  );
}
