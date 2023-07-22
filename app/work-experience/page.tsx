import { cn } from '@/lib/utils';
import Image from 'next/image';
import { ExperienceCard } from '@/components/experience-card';
import { CardsGrid } from '@/components/cards-grid';
import vodafoneLogo from '@/assets/img/vodafone-logo.webp';
import WorkExperience from '@/assets/img/work-experience-icon.webp';
import geogramaLogo from '@/assets/img/geograma-logo.webp';
import guadaltechLogo from '@/assets/img/guadaltech-logo.webp';

export default function () {
  return (
    <main className={cn('flex', 'flex-col', 'items-center')}>
      <div className={cn('relative', 'w-16', 'lg:w-40', 'h-16', 'lg:h-40')}>
        <Image
          src={WorkExperience}
          alt="Toon avatar"
          fill
          sizes="(min-width: 1024px) 10rem, 4rem"
          priority
          className={cn('object-contain')}
        />
      </div>
      <h1 className={cn('lg:text-5xl', 'text-lg', 'font-bold', 'text-center', 'my-2', 'lg:my-5', 'lg:mt-0')}>Work Experience</h1>
      <CardsGrid>
        <ExperienceCard title="Vodafone" startDate="08/22" dialog="" icon={vodafoneLogo} titleUrl="https://www.vodafone.es/c/conocenos/es/vodafone-espana/trabaja-con-nosotros/">
          <p className={cn('mb-2', 'lg:text-base', 'text-sm')}>
            <strong>Main activities</strong>
          </p>
          <ul className={cn('list-disc', 'ml-5', 'lg:text-base', 'text-sm')}>
            <li className={cn('mb-3')}>
              Maintain and
              {' '}
              <strong>develop features</strong>
              {' '}
              for
              {' '}
              <a href="https://www.vodafone.es/c/particulares/es/"><strong>Vodafone&#39;s website</strong></a>
              ,
              using
              {' '}
              <a href="https://angular.io/">Angular</a>
              {' '}
              14+ and
              {' '}
              <a href="https://stenciljs.com/">Stencil.js</a>
              {' '}
              as main technologies.
            </li>
            <li className={cn('mb-3')}>
              <strong>Optimize analytics</strong>
              {' '}
              delivery
              {' '}
              <strong>architecture</strong>
              {' '}
              using directives,
              {' '}
              <a href="https://rxjs.dev/">RxJs</a>
              , and
              {' '}
              <a href="https://ngrx.io/">NgRx</a>
              .
            </li>
            <li>
              <strong>Unit testing</strong>
              {' '}
              with
              {' '}
              <a href="https://jestjs.io/">Jest</a>
              .
            </li>
          </ul>
        </ExperienceCard>
        <ExperienceCard title="Geograma" startDate="01/22" finishDate="06/22" dialog="" icon={geogramaLogo} titleUrl="https://www.geograma.com/">
          <p className={cn('mb-2', 'lg:text-base', 'text-sm')}>
            <strong>Main activities</strong>
          </p>
          <ul className={cn('list-disc', 'ml-5', 'lg:text-base', 'text-sm')}>
            <li className={cn('mb-3')}>
              <strong>Main</strong>
              {' '}
              frontend
              {' '}
              <strong>developer</strong>
              {' '}
              of the Álava (province of Spain)
              {' '}
              <a href="https://www.geo.euskadi.eus/geobisorea"><strong>public map visualizer</strong></a>
              .
            </li>
            <li className={cn('mb-3')}>
              <strong>Develop</strong>
              {' '}
              the
              {' '}
              <strong>frontend</strong>
              {' '}
              side of GIS (
              <strong>Geographic Information Systems</strong>
              ),
              mainly through
              {' '}
              <a href="https://angular.io/">Angular</a>
              {' '}
              framework.
            </li>
            <li>
              Use
              {' '}
              <a href="https://openlayers.org/">OpenLayers</a>
              {' '}
              to transform Geographic Information into maps.
            </li>
          </ul>
        </ExperienceCard>
        <ExperienceCard title="Guadaltech" startDate="10/21" finishDate="01/22" dialog="" icon={guadaltechLogo} titleUrl="https://www.guadaltech.es/">
          <p className={cn('mb-2', 'lg:text-base', 'text-sm')}>
            <strong>Main activities</strong>
          </p>
          <ul className={cn('list-disc', 'ml-5', 'lg:text-base', 'text-sm')}>
            <li className={cn('mb-3')}>
              <strong>Develop</strong>
              {' '}
              specific
              {' '}
              <strong>features</strong>
              {' '}
              for
              {' '}
              <strong>cross-platform applications</strong>
              {' '}
              using
              {' '}
              <a href="https://ionicframework.com/">Ionic</a>
              {' '}
              and
              {' '}
              <a href="https://angular.io/">Angular</a>
              .
            </li>
          </ul>
        </ExperienceCard>
      </CardsGrid>
    </main>
  );
}
