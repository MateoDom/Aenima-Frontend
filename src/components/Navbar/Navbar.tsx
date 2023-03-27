import { IconButton, ImgContainer, NavbarContainer, TextContainer, TextNavbar } from "./styled-navbar";
import Logo from '../../assets/logo_01.svg';
import Hamburguer from '../../assets/hamburguer_menu.svg';
import { useSidebarContext } from "../../context";
import { useLocation } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'; 

export const Navbar = () => {
    const { toggleIsSidebarOpen } = useSidebarContext();
    const location = useLocation();
    return (
        <>
        <NavbarContainer>
            <ImgContainer >
                <img src={Logo} alt={'Viajes'}/>
            </ImgContainer>
            <IconButton onClick={toggleIsSidebarOpen}>
                <img src={Hamburguer} />
            </IconButton>
            <TextContainer>
                <TextNavbar isSelected={location.hash === '' || location.hash === '#home'}><Link to={'#home'}>Home</Link></TextNavbar>
                <TextNavbar isSelected={location.hash === '#trending'}><Link to={'#trending'}>Tendencias</Link></TextNavbar>
                <TextNavbar isSelected={location.hash === '#blog'}><Link to={'#blog'}>Blog</Link></TextNavbar>
            </TextContainer>
        </NavbarContainer>
        </>
    )
}