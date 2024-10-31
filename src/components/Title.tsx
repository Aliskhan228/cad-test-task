import React from "react";
import styled from "styled-components";

interface Props {
  align: "left" | "center" | "right";
  children: React.ReactNode;
}

const TitleWrapper = styled.h1<{ $align?: string }>`
  font-size: 3rem;
  margin-bottom: 50px;
  text-align: ${(props) => props.$align};
  width: 400px;

  @media (max-width: 1024px) {
    font-size: 2rem;
    text-align: center;
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    text-align: center;
  }
`;

const Title: React.FC<Props> = ({ children, align }) => {
  return <TitleWrapper $align={align}>{children}</TitleWrapper>;
};
export default Title;
