import styled from "styled-components";

export const NewComponent = styled.div`
  background-color: #FA6980;
  border-radius: 6px;
  padding: 6px 10px;
  color: #fff;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
  position: absolute;
  top: -12px;
`

export interface ImgProps {
  src: string;
}

export const ImgCardContainer = styled.div<ImgProps>`
  background-image: url(${p => p.src});
  background-size: cover;
  box-sizing: border-box;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  padding: 40px;
  border-radius: 6px;
  height: 430px;
  max-width: 720px;
`
export const TitleCardText = styled.h3`
 color: #FFF;
 font-size: 16px;
 font-weight: 700;
 text-transform: uppercase;
`
export const CardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const TitleCard = styled.h5`
  color: #2A3037;
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 700;
`
export const TextCard = styled.p`
  color: #7A838D;
  font-size: 13px;
`

export const TitleTextCard = styled.h5`
  color: #FFFFFF;
  font-size: 24px;
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: 22px;
  }
`
export const Text = styled.p`
  color: #FFFFFF;
  font-size: 16px;
  font-weight: 400;
`

export const TextSmall = styled.h5`
  color: #202124;
  font-size: 16px;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 10px;
`
export const Time = styled.div`
  display: flex;
  font-size: 13px;
  gap: 5px;
  align-items: center;
  color: #CBD0D3;
`