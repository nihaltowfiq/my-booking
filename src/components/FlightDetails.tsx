import { Fragment } from 'react';
import { LocationBar } from './LocationBar';
import { Card } from './Card';
import { AirlineInfo } from './AirlineInfo';
import { flightData } from '../data';
import { Timing } from './Timing';

export function FlightDetails({ data }: Props) {
  return (
    <Card.Content>
      {data.map((el, i) => (
        <Fragment key={i}>
          <LocationBar
            title={el.title}
            airport={el?.airport}
            isLayover={el.layover}
            iconActive={el.arrived}
            terminal={el?.terminal}
          />

          {!el.arrived && (
            <div className="pt-[0.75rem] pb-[1rem]">
              <Timing data={el} />

              <AirlineInfo data={el} />
            </div>
          )}
        </Fragment>
      ))}
    </Card.Content>
  );
}

type Props = {
  data: (typeof flightData)['details'];
};
