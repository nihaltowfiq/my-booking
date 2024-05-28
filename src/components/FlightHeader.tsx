import { Card } from './Card';
import { Badge } from './Badge';

export function FlightHeader({ date, duration, from, stop, to, type }: Props) {
  return (
    <Card.Header className="flex items-center justify-between gap-[1rem]">
      <div className="flex items-center gap-[1rem]">
        <p className="rounded-full h-[1.5rem] w-[1.5rem] bg-primary-400 flex items-center justify-center text-[0.875rem] font-medium text-white">
          1
        </p>

        <div>
          <h4 className="text-[1.125rem] text-black font-semibold">
            {from} → {to}
          </h4>
          <div className="text-secondary flex items-center space-x-2 text-[0.813rem]">
            <span>{type}</span>
            <span>&bull;</span>
            <span>{date}</span>
            <span>&bull;</span>
            <span>{stop}</span>
          </div>
        </div>
      </div>
      <Badge>{duration}</Badge>
    </Card.Header>
  );
}

type Props = {
  from: string;
  to: string;
  type: string;
  date: string;
  stop: string;
  duration: string;
};
