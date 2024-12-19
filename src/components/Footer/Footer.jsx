import { Email, FacebookOutlined, Instagram, WhatsApp, YouTube } from '@mui/icons-material';
import { Box, Button, Divider, Grid, Link, TextField, Typography, styled } from '@mui/material';
import { GridInfoDetailFooter, GridInfoLogoFooter, GridInfoSocialFooter } from './constants';
import { FontSize, ThemePalette } from '../../theme/theme';
import { CButton } from '../Button';
import { pages } from '../NavBar/constants';

const dataFooter = [
  {
    title: 'DONDE ESTAMOS'
    
  }
]

export const Footer = () => (
  // <Grid container marginTop='20px' p='20px 50px' component="footer" bgcolor={ThemePalette.FOOTER_BACKGROUND_GREEN} color={ThemePalette.WHITE}>        
    <Box marginTop='20px' p='20px 50px' component="footer" display='flex' flexDirection='column' sx={{ backgroundColor: ThemePalette.PRIMARY }} color={ThemePalette.TEXT_WHITE} gap='7px' >
      <Box display='flex' justifyContent='space-between'>
        <Box display='flex' flexDirection='column' gap='8px'>
          <Typography fontWeight='bold'>Información</Typography>
          <Box>
            {
              pages.map((res) => (
                <Typography key={res.id}>{res.label}</Typography>
              ))
            }
          </Box>
        </Box>
        <Box display='flex' flexDirection='column' gap='10px'>
          <Box display='flex' flexDirection='column' gap='6px'>
            <Typography fontWeight='bold'>Oficina Principal</Typography>
            <Box>
              <Typography>Calle Los Jazmines Mz. D2 Lt. 4 Chorrillos</Typography>
            </Box>
          </Box>
          <Box display='flex' flexDirection='column'>
            <Typography fontWeight='bold'>Email</Typography>
            <Box display='flex' gap='8px'>
              <Email />
              <Typography>donaciones@gmail.com</Typography>
            </Box>
          </Box>
        </Box>
        <Box display='flex' flexDirection='column' gap='10px'>
          <Box display='flex' gap='5px'>
            <WhatsApp fontSize='large' />
            <Box display='flex' flexDirection='column'>
              <Typography>Escríbenos ahora</Typography>
              <Typography textAlign='center'>945740524</Typography>
            </Box>
          </Box>
          <Box display='flex' justifyContent='center'>
            <CButton variant='contained' sx={{  }}>
              Donaciones            
            </CButton>
          </Box>
          
        </Box>
      </Box>
      <Divider sx={{ borderColor: ThemePalette.WHITE }} />
      <Box display='flex' alignItems='center' justifyContent='center'>
        <Typography pt='5px'>Copyrights 2024</Typography>
      </Box>
    </Box>
  // </Grid>
)