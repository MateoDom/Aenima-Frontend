import React from 'react';
import { Drawer, Box, IconButton } from '@mui/material' 
import { TextContainerSidebar, TextSidebar } from './styled-sidebar';
import CloseIcon from '../../assets/No.svg';
import { useSidebarContext } from '../../context';
import { HashLink as Link } from 'react-router-hash-link'; 

export const Sidebar: React.FC = () => {
    const { isSidebarOpen, toggleIsSidebarOpen } = useSidebarContext();
    return (
     <Box
        component="nav"
        sx={{ height: '100%', flexShrink: { sm: 0 } }}
      >
        <Drawer
          anchor='right'
          variant="temporary"
          open={isSidebarOpen}
          onClose={toggleIsSidebarOpen}
          ModalProps={{
            keepMounted: true
          }}
          sx={{
            display: { xs: 'block', sm: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '217px',
              backgroundColor: '#fff', border: 'none', height: '100%' },
          }}
        >   <IconButton sx={{
            position: 'absolute',
            top: '15px',
            right: '15px'
            }} onClick={toggleIsSidebarOpen}>
              <img src={CloseIcon} />
            </IconButton>
            <TextContainerSidebar>
              <TextSidebar><Link onClick={toggleIsSidebarOpen} to={'#home'}>Home</Link></TextSidebar>
              <TextSidebar><Link onClick={toggleIsSidebarOpen} to={'#trending'}>Tendencias</Link></TextSidebar>
              <TextSidebar><Link onClick={toggleIsSidebarOpen} to={'#blog'}>Blog</Link></TextSidebar>
            </TextContainerSidebar>
        </Drawer>
      </Box>
    )

}