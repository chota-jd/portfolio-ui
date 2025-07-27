import React from 'react';
import Container from './Container'; // CSS Modules approach
import StyledContainer from './StyledContainer'; // Styled-components approach  
import TailwindContainer from './TailwindContainer'; // Pure Tailwind approach

const ContainerExample: React.FC = () => {
  return (
    <div>
      {/* Method 1: CSS Modules - Recommended for Next.js */}
      <Container className="bg-gray-900 py-8">
        <h2 className="text-2xl font-bold text-white mb-4">CSS Modules Container</h2>
        <p className="text-gray-300">
          This uses CSS Modules for scoped styling. The styles are defined in Container.module.css
          and automatically scoped to avoid global CSS pollution.
        </p>
      </Container>

      {/* Method 2: Styled Components - Good for complex styling */}
      <StyledContainer className="bg-gray-800 py-8 mt-8">
        <h2 className="text-2xl font-bold text-white mb-4">Styled Components Container</h2>
        <p className="text-gray-300">
          This uses styled-components for CSS-in-JS. All styles are scoped to the component
          and you get full TypeScript support.
        </p>
      </StyledContainer>

      {/* Method 3: Pure Tailwind - Most direct replacement */}
      <TailwindContainer className="bg-gray-700 py-8 mt-8">
        <h2 className="text-2xl font-bold text-white mb-4">Tailwind Container</h2>
        <p className="text-gray-300">
          This uses only Tailwind CSS classes. The responsive padding and container behavior
          is achieved using Tailwind utilities instead of global CSS.
        </p>
      </TailwindContainer>

      {/* Direct inline approach - for one-off usage */}
      <div className="max-w-[1400px] mx-auto relative px-48 lg:px-48 md:px-8 sm:px-6 px-4 bg-gray-600 py-8 mt-8">
        <h2 className="text-2xl font-bold text-white mb-4">Direct Tailwind Classes</h2>
        <p className="text-gray-300">
          This is the most direct approach - just replace your global class with Tailwind utilities.
          Use this when you only need the styling in one place.
        </p>
      </div>
    </div>
  );
};

export default ContainerExample;