import Map from '../../../../assets/ic_pin.svg';
import Arrow from '../../../../assets/arrow.svg';
import { HeroImg, HeroTextContainer, TitleHero, HeroInfo, Slider, Divider } from './styled-hero';

export const Hero = () => {
    return (
      <HeroImg>
        <HeroTextContainer>
          <TitleHero>
            <img src={Map} />
            <h1>América del Sur</h1>
          </TitleHero>
          <Divider />
          <h3>Lugares maravillosos por America del Sur</h3>
          <p>Estos son algunos lugares que eligen la mayoría de los turistas que visitan America del Sur. Montañas, playas y nieve, 
            forman parte de los selectos.</p>
        </HeroTextContainer>
        <HeroInfo>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <p>PRÓXIMA AVENTURA</p>
            <img src={Arrow} style={{ width: '6px', height: '10px' }}/>
          </div>
          <p>Europa Medieval</p>
          <p>Forman parte veinte países, ej. España, Francia, etc.</p>
        </HeroInfo>
        <Slider />
      </HeroImg>
    )
  }