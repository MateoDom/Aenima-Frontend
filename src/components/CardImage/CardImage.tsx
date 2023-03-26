import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { NewComponent, TextCard, TitleCard } from './styled-card';

export interface CardImageProps {
    className: string;
    img: string;
    title: string;
    text: string;
    alt?: string
    isNew?: boolean;
}

export default function CardImage({img, title, text, alt, isNew, className }: CardImageProps) {
  return (
    <Card className={className} sx={{ maxWidth: 352, width: '100%', 
        boxShadow: '0px 3px 6px #00000029', borderRadius: '6px', maxHeight: '314px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image={img}
          alt={alt}
        />
        <CardContent sx={{ padding: '40px 33px 50px', position: 'relative' }}>
        {isNew && <NewComponent>Nuevo</NewComponent>}
          <TitleCard>
            {title}
          </TitleCard>
          <TextCard>
            {text}
          </TextCard>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}