import Link from 'next/link';
import { ReactComponent as RightArrow } from '@/icons/right-arrow.svg';
import classNames from '@/services/class-names';

export function Breadcrumbs({ data = [] }: Props) {
  if (data?.length > 0) {
    return (
      <ul className="flex items-center gap-[0.25rem] ">
        {data?.map((el, i) => (
          <li
            key={el.value}
            className="flex items-center gap-[0.25rem] justify-between text-secondary-400 text-[0.813rem]"
          >
            <Link
              className={classNames({
                'text-primary-400': i === data.length - 1,
                'underline-offset-[0.15rem] hover:underline':
                  i !== data.length - 1,
              })}
              href={el.link}
            >
              {el.value}
            </Link>

            {i !== data.length - 1 && <RightArrow className="mt-[2px]" />}
          </li>
        ))}
      </ul>
    );
  }

  return null;
}

type Props = {
  data: { link: string; value: string }[];
};
