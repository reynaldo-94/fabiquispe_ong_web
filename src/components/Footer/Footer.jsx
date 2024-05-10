import { FacebookOutlined, Instagram, YouTube } from '@mui/icons-material';
import { Box, Grid, Link, TextField, Typography, styled } from '@mui/material';
import { GridInfoDetailFooter, GridInfoLogoFooter, GridInfoSocialFooter } from './constants';
import { FontSize, ThemePalette } from '../../theme/theme';
import { CButton } from '../Button';

const dataFooter = [
  {
    title: 'DONDE ESTAMOS'
    
  }
]

export const Footer = () => (
  <Grid container marginTop='20px' p='20px 50px' component="footer" bgcolor={ThemePalette.FOOTER_BACKGROUND_GREEN} color={ThemePalette.WHITE}>        
    <Grid item xs={12} md={4} container rowGap='2px' display='flex' flexDirection='column'>

      <Typography component="h4" color={ThemePalette.WHITE} fontWeight='bold' fontSize={FontSize.FOOTER_TITLE}>
        DONDE ESTAMOS
      </Typography>

      <Typography component="p" color={ThemePalette.WHITE} pt='12px' pr='15px' fontSize={FontSize.FOOTER_TEXT}>
        Nuestra tienda online esta abierta 24 horas.<br />Puedes Visitar nuestras instalaciones en la siguiente dirección:
      </Typography>

      <Box display='flex' flexDirection='column' gap='5px'>
        <Box>
          <Typography component="h6" color={ThemePalette.WHITE} fontWeight='500' pt='15px' fontSize={FontSize.FOOTER_TEXT}>
            DIRECCION:
          </Typography>
          <Typography component="p" color={ThemePalette.WHITE} fontSize={FontSize.FOOTER_TEXT}>
            Calle Carretería 1, 29008, Málaga
          </Typography>
        </Box>      

        <Box>
          <Typography component="h6" color={ThemePalette.WHITE} fontWeight='500' fontSize={FontSize.FOOTER_TEXT}>
            TELEFONO DE CONTACTO:
          </Typography>
          <Typography component="p" color={ThemePalette.WHITE} fontSize={FontSize.FOOTER_TEXT}>
            +51 957064401
          </Typography>
        </Box>
        
        <Box>
          <Typography component="h6" color={ThemePalette.WHITE} fontWeight='500' fontSize={FontSize.FOOTER_TEXT}>
            CORREO ELECTRONICO:
          </Typography>
          <Typography component="p" color={ThemePalette.WHITE} fontSize={FontSize.FOOTER_TEXT}>
            info@centrocrecemos.com
          </Typography>
        </Box>

        <Box>
          <Typography component="h6" color={ThemePalette.WHITE} fontWeight='500' fontSize={FontSize.FOOTER_TEXT}>
            HORARIO DE APERTURA:
          </Typography>
          <Typography component="p" color={ThemePalette.WHITE} fontSize={FontSize.FOOTER_TEXT}>
            Lunes - Viernes: 10:00 - 13:00 / 17:00 - 20:30
          </Typography>
        </Box>
        
      </Box>
    </Grid>
    <Grid item xs={12} md={4} rowGap='12px' display='flex' flexDirection='column'>
      <Typography component="h4" color={ThemePalette.WHITE} fontWeight='bold' fontSize={FontSize.FOOTER_TITLE}>
        INFORMACIÓN ADICIONAL
      </Typography>
      <Box display='flex' flexDirection='column' gap='2px'>
        <Typography component="span" color={ThemePalette.WHITE} fontSize={FontSize.FOOTER_TEXT}>
          Aviso Legal
        </Typography>
        <Typography component="span" color={ThemePalette.WHITE} fontSize={FontSize.FOOTER_TEXT}>
          Política de Privacidad
        </Typography>
        <Typography component="span" color={ThemePalette.WHITE} fontSize={FontSize.FOOTER_TEXT}>
          Politica de Cookies
        </Typography>
        <Typography component="span" color={ThemePalette.WHITE} fontSize={FontSize.FOOTER_TEXT}>
          Formas de Pago
        </Typography>
      </Box>
    </Grid>
    <Grid item xs={12} md={4} display='flex' flexDirection='column' gap='10px'>
      <Typography component="div" color={ThemePalette.WHITE} fontWeight='bold' fontSize={FontSize.FOOTER_TITLE}>
        ÚNETE A NUESTRO EQUIPO
      </Typography>
      <Typography component="div" color={ThemePalette.WHITE} fontSize={FontSize.FOOTER_TEXT}>
        Entérate de todas las novedades y promociones antes que nadie y disfruta de ofertas exclusivas!
      </Typography>      
      <TextField id="outlined-basic" label="Correo electrónico" variant="outlined" sx={{ backgroundColor: '#fff' }} />
      <CButton 
        size="small" 
        variant='contained' 
        backgroundColor={ThemePalette.SKYBLUE_MEDIUM}
      >
        Suscribirse
      </CButton>
      <Box display='flex' gap='5px'>
        <Link href="https://www.facebook.com/CentrodeTerapiasCrecemos" rel="noopener" color={ThemePalette.WHITE}>
          <FacebookOutlined fontSize='large'  />
        </Link>
        <Link href="https://www.instagram.com/centro_crecemos" rel="noreferrer" color={ThemePalette.WHITE}>
          <Instagram fontSize='large' />
        </Link>
        <Link href="https://www.youtube.com/@centrodeterapiacrecemos677" rel="noreferrer" color={ThemePalette.WHITE}>
          <YouTube fontSize='large' />
        </Link>
      </Box>
    </Grid>
  </Grid>
)