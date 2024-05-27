import { Breadcrumbs } from '@/components/Breadcrumbs';
import { breadcrumbsData } from '@/data';

export default function Home() {
  return (
    <>
      <Breadcrumbs data={breadcrumbsData} />
    </>
  );
}
