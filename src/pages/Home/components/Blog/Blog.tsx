import BigOne from '../../../../assets/articulo_big_01.png';
import BigTwo from '../../../../assets/articulo_big_02.png';
import SmallOne from '../../../../assets/articulo_small_01.png';
import SmallTwo from '../../../../assets/articulo_small_02.png';
import SmallThree from '../../../../assets/articulo_small_03.png';
import { CardBigImg, SmallCardImage } from "../../../../components"
import { HomeContainer, TitleHome } from "../../styled-home"
import { CardColumnContainer, BlogCardContainer, BlogLayout, TextContainerBlog } from "./styled-blog"

export const Blog = () => {
    return (
        <BlogLayout>
            <div style={{ marginTop: '-250px'}}> 
            <HomeContainer>
                <TextContainerBlog>
                    <TitleHome>
                        Blog
                    </TitleHome>
                </TextContainerBlog>
                <BlogCardContainer>
                    <CardColumnContainer>
                        <CardBigImg time='Hace 2m' textTitle='Artículo de puente' text='Un puente es una construcción que permite salvar un accidente geográfico como un río.'  src={BigOne} title={'Ciudad'}/>
                        <CardBigImg time='Hace 15m' textTitle='Artículo de bosque' text='Lugar poblado de árboles y arbustos. Área con una importante densidad de árboles.' src={BigTwo} title={'Aventura'}/>
                    </CardColumnContainer>
                    <CardColumnContainer>
                        <SmallCardImage src={SmallOne}   time='Hace 3h' textTitle='Artículo de elefante' />
                        <SmallCardImage src={SmallTwo}   time='Hace 4h' textTitle='Artículo de loro' />
                        <SmallCardImage src={SmallThree} time='Hace 8h' textTitle='Artículo de camino' />
                    </CardColumnContainer>
                </BlogCardContainer>
            </HomeContainer>
            </div>
        </BlogLayout>
    )
}