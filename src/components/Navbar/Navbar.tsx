import { IconButton, ImgContainer, NavbarContainer, TextContainer, TextNavbar } from "./styled-navbar";
import Logo from '../../assets/logo_01.svg';
import Hamburguer from '../../assets/hamburguer_menu.svg';
import { useSidebarContext } from "../../context";

export const Navbar = () => {
    const { toggleIsSidebarOpen } = useSidebarContext();
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
                <TextNavbar isActive={true}>Home</TextNavbar>
                <TextNavbar isActive={false}>Tendencias</TextNavbar>
                <TextNavbar isActive={false}>Blog</TextNavbar>
            </TextContainer>
        </NavbarContainer>
        </>
    )
}