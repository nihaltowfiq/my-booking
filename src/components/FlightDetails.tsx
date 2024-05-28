import { Bar } from './Bar';
import { Card } from './Card';
import { FlightTime } from './FlightTime';
import { FlightType } from './FlightType';

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

export default function FlightDetails() {
  return (
    <Card.Content>
      <Bar
        leftContent="Departure from Dhaka"
        rightContent={
          <p>
            <span className="font-[475]">Terminal 1:</span> Hazrat Shahjalal
            International Airport
          </p>
        }
      />

      <div className="pt-[0.75rem] pb-[1rem]">
        <FlightTime />

        <FlightType {...dummyData} />
      </div>

      <Bar
        leftContent="Departure from Dhaka"
        rightContent={
          <p>
            <span className="font-[475]">Terminal 1:</span> Hazrat Shahjalal
            International Airport
          </p>
        }
      />

      <div className="pt-[0.75rem] pb-[1rem]">
        <FlightTime />

        <FlightType {...dummyData2} />
      </div>

      <Bar
        iconActive
        leftContent="Departure from Dhaka"
        rightContent={
          <p>
            <span className="font-[475]">Terminal 1:</span> Hazrat Shahjalal
            International Airport
          </p>
        }
      />
    </Card.Content>
  );
}
