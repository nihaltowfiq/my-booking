import { LocationBar } from './LocationBar';
import { Card } from './Card';
import { AirlineInfo } from './AirlineInfo';
import { flightData } from '../data';
import { Fragment } from 'react';
import { Timing } from './Timing';

const dummyData = {
  notice: 'Your flight has been delayed by 30 minutes.',
  airline: 'Delta Airlines',
  flightNo: 'DL 1234',
  plane: 'Boeing 737',
  coach: 'Economy',
};

const dummyData2 = {
  airline: 'Delta Airlines',
  flightNo: 'DL 1234',
  plane: 'Boeing 737',
  coach: 'Economy',
};

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
