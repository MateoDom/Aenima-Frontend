import styled from 'styled-components'

export const NavbarContainer = styled.div`
  display: flex;
  width: 100%;
  z-index: 1;
  background-color: #fff;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 3px 6px #00000029;
  position: fixed;
  height: 60px;
  top: 0;
  @media (max-width: 768px) {
    position: relative;
  }
`
export const ImgContainer = styled.div`
  height: auto;
  width: auto;
  display: flex;
  align-items: center;
  margin-left: 10%;
`

export const TextContainer = styled.div`
  display: flex;
  margin-right: 10%;
  gap: 30px;
  justify-content: space-around;
  align-items: center;
  text-transform: uppercase;
  @media (max-width: 768px) {
    display: none;
  }

`

interface TextProps {
  isSelected: boolean
}

export const TextNavbar = styled.p<TextProps>`
  font-size: 18px;
  cursor: pointer;
  width: 100%;
  font-family: 'Montserrat';
  font-style: normal;
  color: ${p => p.isSelected ? '#000' : '#CBD0D3' };
  font-weight: 400;
  &:hover {
    color: #000;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  transition: all 0.3s;
`

export const IconButton = styled.div`
  display: none;
  margin-right: 5%;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`