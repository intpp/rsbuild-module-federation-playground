import type React from 'react';
import { useName } from '../../contexts/name';

export type HeroSectionProps = {
  source: string;
};

const HeroSection: React.FC<HeroSectionProps> = ({ source }) => {
  const name = useName();

  return (
    <div className="content">
      <h1>
        {source}: name is "{name ?? 'unknown????'}"
      </h1>
    </div>
  );
};

export default HeroSection;
