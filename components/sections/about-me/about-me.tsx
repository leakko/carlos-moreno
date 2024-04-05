import { cn } from '@/lib/utils';
import Facts from '@/components/sections/about-me/facts';
import { TechStack } from '@/components/sections/about-me/tech-stack';
// import JavascriptLogo from '@/assets/img/javascript-logo.webp';
// import AngularLogo from '@/assets/img/angular-logo.webp';
// import ReduxLogo from '@/assets/img/redux-logo.webp';
// import { ProgressCard } from '@/components/progress-card';
// import { CardsGrid } from '@/components/cards-grid';

export default function AboutMe() {
  return (
    <section id="about" className={cn('w-screen flex flex-col justify-center sm:items-center bg-primary-500 text-left py-16 px-8')}>
      <div className={cn('max-w-5xl mx-autosm:px-0')}>
        <h1 className={cn('sm:text-5xl text-xl font-bold mb-5')}>About me.</h1>
        <div className={cn('flex flex-col sm:flex-row sm:justify-between')}>
          <Facts />
          <TechStack />
        </div>
        {/* <CardsGrid>
          <ProgressCard title="Angular" level={75} dialog="" icon={AngularLogo} titleUrl="https://angular.io/">
            <p className={cn('mb-2 lg:text-base text-sm')}>
              <strong>More than 2 years of experience</strong>
              {' '}
              as
              {' '}
              <strong><a href="https://angular.io/">Angular</a></strong>
              {' '}
              frontend developer.
            </p>
            <p className={cn('mb-2 lg:text-base text-sm')}>
              Currently working with
              {' '}
              <strong>
                <a href="https://angular.io/">Angular</a>
                {' '}
                15+
              </strong>
              {' '}
              as
              {' '}
              <strong>Vodafone</strong>
              {' '}
              internal frontend developer.
            </p>
          </ProgressCard>
          <ProgressCard title="JavaScript" level={65} dialog="" icon={JavascriptLogo} titleUrl="https://developer.mozilla.org/es/docs/Web/JavaScript">
            <p className={cn('mb-2 lg:text-base text-sm')}>
              <strong>Strong foundations</strong>
              {' '}
              in JavaScript thanks to:
            </p>
            <ul className={cn('list-disc ml-5 lg:text-base text-sm')}>
              <li className={cn('mb-3')}>
                Exceling in the
                {' '}
                <strong>Frontend/JS</strong>
                {' '}
                related subjects at my
                {' '}
                <strong><a href="https://www.uoc.edu/en/studies/bachelors-degrees/degree-software-development">Software Engineering degree</a></strong>
              </li>
              <li>
                Working
                {' '}
                <strong>professionally</strong>
                {' '}
                with JavaScript for more than 2 years.
              </li>
            </ul>
          </ProgressCard>
          <ProgressCard title="Redux/RxJs" level={50} dialog="" icon={ReduxLogo} titleUrl="https://ngrx.io/">
            <p className={cn('mb-2 lg:text-base text-sm')}>
              Highly skilled in
              {' '}
              <strong>state management</strong>
              {' '}
              and
              {' '}
              <strong>reactive programming</strong>
              {' '}
              thanks to intensive use of
              {' '}
              <strong><a href="https://ngrx.io/">NgRx</a></strong>
              {' '}
              (Redux for Angular) and
              {' '}
              <strong><a href="https://rxjs.dev/">RxJs</a></strong>
              .
            </p>
          </ProgressCard>
        </CardsGrid> */}
      </div>
    </section>
  );
}