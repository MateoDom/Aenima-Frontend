import { CardImage } from "../../../../components/CardImage"
import CardOne from "../../../../assets/card_01.png";
import CardTwo from "../../../../assets/card_02.png";
import CardThree from "../../../../assets/card_03.png";
import { HomeContainer, TitleHome, TrendLayout, TextContainer } from "../../styled-home"
import { TrendingCardContainer } from "./styled-trending";


export const Trending = () => {
    return (
        <TrendLayout>
            <HomeContainer>
            <TextContainer>
                <TitleHome>Tendencias</TitleHome>
            </TextContainer>
            <TrendingCardContainer>
                <CardImage className={'card1'} isNew img={CardOne} title={'Montañas y magia'} text={'Aquí la descripción para Montañas y magia.'}/>
                <CardImage className={'card2'} img={CardTwo} title={'Playas y sol'} text={'La descripción de Playas y sol debe ser esta.'} />
                <CardImage className={'card3'}img={CardThree} title={'Nieve y aventura'} text={'Contiene la información de Nieve y aventura.'}/>
            </TrendingCardContainer>
            </HomeContainer>
        </TrendLayout>
    )
}