import styled from "styled-components";

export const TrendLayout = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   height: 536px;
   background-color: #EBEBEB;
   padding: 80px 30px;
   @media (max-width: 768px) {
    align-items: unset;
   }
`

export const TitleHome = styled.h2`
    color: #2A3037;
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 700;
`
export const HomeContainer = styled.div`
`

export const TextContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
`