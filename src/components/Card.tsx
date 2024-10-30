import styled from "styled-components";
import { Card } from "../types/types";
import React from "react";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
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
