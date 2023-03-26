import styled from "styled-components";

export const TrendingCardContainer = styled.div`
  display: flex;
  max-width: 1100px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  @media (max-width: 768px) {
    gap: 0;
    .card2, .card3 {
        display: none;
    }
  }
`