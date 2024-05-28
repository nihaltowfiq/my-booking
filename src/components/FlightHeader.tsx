import { Card } from './Card';
import { Badge } from './Badge';

export function FlightHeader() {
  return (
    <Card.Header className="flex items-center justify-between gap-[1rem]">
      <div className="flex items-center gap-[1rem]">
        <p className="rounded-full h-[1.5rem] w-[1.5rem] bg-primary-400 flex items-center justify-center text-[0.875rem] font-medium text-white">
          1
        </p>

        <div>
          <h4 className="text-[1.125rem] text-black font-semibold">
            DAC → JFK
          </h4>
          <div className="text-secondary flex items-center space-x-2 text-[0.813rem]">
            <span>Round Trip</span>
            <span>&bull;</span>
            <span>25 Mar - 4 Apr 2023</span>
            <span>&bull;</span>
            <span>1 Stop</span>
          </div>
        </div>
      </div>
      <Badge>33h 20h</Badge>
    </Card.Header>
  );
}
