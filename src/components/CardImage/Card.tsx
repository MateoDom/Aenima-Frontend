import React from "react";
import TimeImg from "../../assets/time.svg";
import { CardTextContainer, ImgCardContainer, TitleCardText, TitleTextCard, Text, Time, TextSmall } from "./styled-card";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

export interface ImgCardrops {
    src: string;
    title: string
    textTitle: string;
    text: string;
    time: string
}

export const CardBigImg: React.FC<ImgCardrops> = (props) => {
  const { src, title, text, textTitle, time } = props;
  return (
    <CardActionArea>
    <ImgCardContainer src={src}>
        <TitleCardText>{title}</TitleCardText>
        <CardTextContainer>
            <TitleTextCard>{textTitle}</TitleTextCard>
            <Text>{text}</Text>
            <Time>
              <img src={TimeImg} />
              {time}
            </Time>
        </CardTextContainer>
    </ImgCardContainer>
    </CardActionArea>
  );
}



export const SmallCardImage: React.FC<Omit<ImgCardrops, 'text' | 'title'>> = ({ src, textTitle, time }) => {
  return (
    <Card sx={{ maxWidth: 352, width: '100%', 
        boxShadow: 'none', borderRadius: '0', display: { xs: 'none', sm: 'none', md: 'block' }}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="210"
          image={src}
          alt={textTitle}
        />
        <CardContent sx={{ padding: 0  }}>
            <TextSmall>{textTitle}</TextSmall>
            <Time>
              <img src={TimeImg} />
              {time}
            </Time>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}