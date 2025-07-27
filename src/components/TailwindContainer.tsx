import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const TailwindContainer: React.FC<ContainerProps> = ({ children, className = '' }) => {
  return (
    <div 
      className={`
        max-w-[1400px] 
        mx-auto 
        relative 
        px-48 
        lg:px-48 
        md:px-8 
        sm:px-6 
        px-4
        ${className}
      `.trim().replace(/\s+/g, ' ')}
    >
      {children}
    </div>
  );
};

export default TailwindContainer;