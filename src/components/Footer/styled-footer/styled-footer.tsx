import styled from "styled-components"

export const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: #2A3037;
  justify-content: space-between;
  align-items: center;
  height: 96px;
  @media (max-width: 768px) {
    height: 80px;
  }
`
export const IconsContainer = styled.div`
  display: flex;
  margin-right: 10%;
  align-items: center;
  justify-content: center;
  gap: 15px;
`