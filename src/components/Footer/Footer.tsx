import { ImgContainer } from "../Navbar";
import { FooterContainer, IconsContainer } from "./styled-footer";
import Logo from '../../assets/logo_02.svg';
import Facebook from '../../assets/facebook.svg';
import Instagram from '../../assets/instagram.svg';

export const Footer: React.FC = () => (
    <FooterContainer>
        <ImgContainer>
            <img src={Logo} alt={'Viajes'}/>
        </ImgContainer>
        <IconsContainer>
            <img style={{ cursor: 'pointer' }} src={Instagram} alt={'Instagram'}/>    
            <img style={{ cursor: 'pointer' }} src={Facebook} alt={'Facebook'}/>
        </IconsContainer>
    </FooterContainer>
)