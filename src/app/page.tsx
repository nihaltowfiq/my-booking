import { Badge } from '@/components/Badge';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Card } from '@/components/Card';
import { breadcrumbsData } from '@/data';

export default function Home() {
  return (
    <>
      <Breadcrumbs data={breadcrumbsData} />

      <Card className="mt-[1rem]">
        <Card.Header className="flex items-center justify-between gap-[1rem]">
          <div className="flex items-center gap-[1rem]">
            <p className="rounded-full h-[1.5rem] w-[1.5rem] bg-primary-400 flex items-center justify-center text-[0.875rem] font-medium text-white">
              1
            </p>

            <div>
              <h4>DAC → JFK</h4>
              <div className="text-gray-600 text-lg flex items-center space-x-2">
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
        <Card.Content>Content</Card.Content>
      </Card>
    </>
  );
}
