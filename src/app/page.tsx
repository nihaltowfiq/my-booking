import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Card } from '@/components/Card';
import { FlightDetails } from '@/components/FlightDetails';
import { FlightHeader } from '@/components/FlightHeader';
import { breadcrumbsData, flightData } from '@/data';

export default function Home() {
  const { details, ...rest } = flightData;

  return (
    <>
      <Breadcrumbs data={breadcrumbsData} />

      <Card className="mt-[1rem]">
        <FlightHeader {...rest} />
        <FlightDetails data={details} />
      </Card>
    </>
  );
}
