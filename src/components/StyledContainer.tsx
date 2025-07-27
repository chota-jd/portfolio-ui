import React from 'react';
import styled from 'styled-components';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const StyledContainerDiv = styled.div`
  max-width: var(--container-max, 1400px);
  margin-left: auto;
  margin-right: auto;
  position: relative;
  padding-left: 12rem; /* px-48 equivalent */
  padding-right: 12rem; /* px-48 equivalent */

  @media (max-width: 1024px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media (max-width: 768px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  @media (max-width: 480px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const StyledContainer: React.FC<ContainerProps> = ({ children, className = '' }) => {
  return (
    <StyledContainerDiv className={className}>
      {children}
    </StyledContainerDiv>
  );
};

export default StyledContainer;