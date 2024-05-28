import { Badge } from '@/components/Badge';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Card } from '@/components/Card';
import FlightDetails from '@/components/FlightDetails';
import { FlightHeader } from '@/components/FlightHeader';
import { breadcrumbsData } from '@/data';

export default function Home() {
  return (
    <>
      <Breadcrumbs data={breadcrumbsData} />

      <Card className="mt-[1rem]">
        <FlightHeader />
        <FlightDetails />
      </Card>
    </>
  );
}
