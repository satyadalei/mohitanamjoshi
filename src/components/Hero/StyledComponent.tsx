"use client"
// AnimatedGradientText.tsx
import React from 'react';
import styled, { keyframes } from 'styled-components';

// Define animation
const slide = keyframes`
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 0% 0%;
  }
`;

// Styled component for text
interface GradientTextProps {
  colors: string[];
  gradientType?: string;
  animationDuration?: string;
  animationDelay?: string;
}

const GradientText = styled.span<GradientTextProps>`
  background: linear-gradient(
    ${(props) => props.gradientType || 'to right'},
    ${(props) => props.colors.join(',')}
  );
  background-size: 200% auto;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  animation: ${slide} ${(props) => props.animationDuration || '8s'} ease-in-out ${(props) =>
  props.animationDelay || '0s'} infinite;
`;

interface AnimatedGradientTextProps extends GradientTextProps {
  text: string;
  className?: string; // Additional className prop
}

const AnimatedGradientText: React.FC<AnimatedGradientTextProps> = ({
  text,
  colors,
  gradientType,
  animationDuration,
  animationDelay,
  className, // Accepts tailwind CSS classes or any custom styling
}) => {
  return (
    <GradientText
      colors={colors}
      gradientType={gradientType}
      animationDuration={animationDuration}
      animationDelay={animationDelay}
      className={className} // Passes the className prop to the styled component
    >
      {text}
    </GradientText>
  );
};

export default AnimatedGradientText;
