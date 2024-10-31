import styled from "styled-components";
import { Card } from "../types/types";
import React from "react";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
	color: #fff;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

const CardTitle = styled.h4`
  font-size: 1.5rem;
`;

const CardDescription = styled.p`
  font-size: 1rem;
`;

interface Props {
  card: Card;
}

const CardItem: React.FC<Props> = ({ card }) => {
  return (
    <CardWrapper>
      <CardTitle>{card.title}</CardTitle>
      <CardDescription>{card.description}</CardDescription>
    </CardWrapper>
  );
};
export default CardItem;
