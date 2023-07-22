import Image, { StaticImageData } from 'next/image';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';

import { cn } from '@/lib/utils';

export function SubheadingCard({
  title,
  startDate,
  finishDate,
  children,
  dialog,
  icon,
  company,
  companyUrl,
}: {
  title: string;
  startDate: React.ReactNode;
  finishDate?: React.ReactNode;
  children: React.ReactNode;
  dialog: React.ReactNode;
  icon: StaticImageData;
  company: string;
  companyUrl: string;
}) {
  return (
    <Card className={cn('w-full', 'lg:w-1/4', 'm-3', 'lg:m-5', !finishDate && 'border-solid border-t-8 border-[rgba(25,25,25,0.7)]')}>
      <CardHeader className={cn('flex', 'flex-nowrap', 'flex-row', 'items-center', 'p-4')}>
        <div className={cn('relative', ' mr-2')} style={{ width: '50px', height: '50px' }}>
          <Image src={icon} alt="Skill logo" fill sizes="50px" className={cn('rounded', 'object-contain')} />
        </div>
        <div className={cn('flex-auto')}>
          <CardTitle className={cn('mb-1', 'lg:text-xl', 'text-lg')}>{title}</CardTitle>
          <CardDescription>
            <a href={companyUrl}>{company}</a>
            {' | '}
            {startDate}
            {' '}
            -
            {' '}
            {finishDate ?? <strong>Now</strong>}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
      <CardFooter>
        {dialog}
      </CardFooter>
    </Card>
  );
}
