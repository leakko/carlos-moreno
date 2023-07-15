'use client';

import { SectionContext } from '@/context/section.context';
import React, { useEffect } from 'react';

export default function Home() {
  const { section, setSectionByName, navigateToSectionByName } = React.useContext(SectionContext);
  useEffect(() => {
    setSectionByName('about-me');
  }, [setSectionByName, navigateToSectionByName]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-center">
          {section.publicName}
          <br />
        </h1>
      </div>
    </main>
  );
}
