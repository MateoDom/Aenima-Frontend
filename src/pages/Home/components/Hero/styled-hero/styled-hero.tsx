import styled from "styled-components";
import HeroIMG from '../../../../../assets/Viajes_Hero.jpg';
import SliderImg from '../../../../../assets/nav_slider.svg';

export const HeroImg = styled.div`
  background-image: url(${HeroIMG});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  position: relative;
  z-index: 0;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

export const Slider = styled.div`
  background-image: url(${SliderImg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: left;
  position: absolute;
  left: 0;
  bottom: 50px;
  width: 100%;
  height: 60px;
  @media (max-width: 768px) {
    left: -100px;
  }
`;

export const HeroTextContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 550px;
  margin-left: 15%;
  flex-direction: column;
  color: #fff;
  gap: 10px;
  > h3 {
    font-size: 24px;
  }
  > p {
    font-size: 16px;
  }
  @media (max-width: 768px) {
    margin-left: 0;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    > h3 {
    font-size: 20px;
    max-width: 286px;
    }
    > p {
    display: none;
  }
  }
`

export const TitleHero = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  text-transform: uppercase;
  font-weight: 700;
  color: #fff;
  > h1 {
    font-size: 48px;
  }
  @media (max-width: 768px) {
    > h1 {
    font-size: 24px;
    }
  }
`

export const Divider = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 2px;
  height: 2px;
  margin-top: 15px;
  margin-bottom: 5px;
  @media (max-width: 768px) {
    max-width: 290px;
  }
`

export const HeroInfo = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 30px;
  background-color: rgba(42, 48, 55, 0.5);
  border: 2px dashed rgba(255, 255, 255, 0.5);
  border-radius: 6px;
  right: 130px;
  bottom: 60px;
  max-width: 260px;
  p:nth-child(1) {
    color: #FA6980;
    font-size: 16px;
  }
  p:nth-child(2) {
    color: #FFF;
    font-weight: 700;
    font-size: 16px;
  }
  p:nth-child(3) {
    color: #FFF;
    font-weight: 400;
    font-size: 14px;
  }
  @media (max-width: 930px) {
    display: none;
  }
`

