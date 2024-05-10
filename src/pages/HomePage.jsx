import { useNavigate } from 'react-router-dom';
import Carousel from 'react-material-ui-carousel'
import { Box, Card, CardActions, CardContent, CardMedia, Divider, Grid, Typography, styled, useMediaQuery, useTheme } from '@mui/material'
import { motion } from 'framer-motion';
import { FontSize, ThemePalette } from '../theme/theme'
import { imgsAlianzas, items, listExperiences, listServices } from './constants'
import { CButton } from '../components/Button';
import { TitleSection } from '../components/TitleSection/TitleSection';
import { TypeTitleSection } from '../constants/TitleSection.constant';

export const BoxCarousel = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down('sm')]: {
    backgroundSize: '100% 100%',
  },
  [theme.breakpoints.up('sm')]: {
    backgroundSize: 'contain',
  }
}));

const BoxExperiencesHome = styled(Carousel)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    height: '320px'
  },
  [theme.breakpoints.up('sm')]: {
    height: '535px'
  }
}));

export const HomePage = () =>  {

  const navigate = useNavigate();
  const theme = useTheme();

  const onlySmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const heightCarousel = onlySmallScreen ? '205px' : '535px'
  
  const renderItem = (data) =>  (
    <BoxCarousel key={data.title} sx={{
      backgroundImage: `url(${data.image})`,
      height: onlySmallScreen ? '210px' : '100vh',
      // backgroundPosition: 'center',
      width: '100%',
      backgroundRepeat: 'no-repeat'
    }} />
  )
  
  return (
    <>
      <Carousel 
        // sx={{
        //   height: onlySmallScreen ? '285px' : '555px',
        // }}
        height={heightCarousel}
      >
        {
          items.map( (item) => renderItem(item) )
        }
      </Carousel>

      
        
       
      
      {/* Consejos o Recomendaciones */}
      <Grid container p='15px 50px 41px' spacing='30px'  bgcolor={ThemePalette.SECTION_BACKGROUND_GREEN}>
        
        <Grid item xs={12} md={6} display='flex' justifyContent='center'>
          <img src='src/assets/system/proposito.jpg' width='100%' />
        </Grid>
        <Grid item xs={12} md={6} component='div' display='flex' flexDirection='column' gap='20px'>
          
          <Typography 
            component='h2' 
            fontSize={FontSize.TITLE_SECTION} 
            fontWeight='bold' 
            textAlign='center'
            color={ThemePalette.WHITE}
          >
            Nuestro Propósito
          </Typography>
          
          <Typography 
            component='p' 
            textAlign='justify' 
            fontSize={FontSize.PARAGRAPH} 
            color={ThemePalette.WHITE}
            >
              Mejorar la vidad de las mujeres, sus familias y comunidades hacia la justicia social
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet incidunt blanditiis magni praesentium autem perspiciatis ex qui unde obcaecati aliquid et aperiam fugit cumque animi quo, corrupti magnam iure omnis.
          </Typography>         
        </Grid>


      </Grid>

      {/* Nuestra misión */}
      <Grid  p='10px 50px 41px' display='flex' flexDirection='column' gap='15px'>
        <Typography 
          component='h2' 
          fontSize={FontSize.TITLE_SECTION} 
          fontWeight='bold' 
          textAlign='center'
          color={ThemePalette.PRIMARY}
        >
          Nuestro Misión
        </Typography>
        <Typography 
          component='p' 
          textAlign='center' 
          fontSize={FontSize.PARAGRAPH} 
          color={ThemePalette.BLACK_MEDIUM}
          >
            Defender los derechos de los grupos y personas mas desfavorecidos
        </Typography>
        <Grid container columnSpacing='50px' rowGap='30px' >
          <Grid item xs={12} md={4} rowSpacing='10px' display='flex' flexDirection='column'>

            <Box display='flex' justifyContent='center'>
              <img src='src/assets/system/mision.jpg' width={220} />
            </Box>

            <Typography component='p' textAlign='center' fontSize={FontSize.PARAGRAPH} padding='0px 50px'>POAS cuenta con la colaboración de 3.640 personas socias, personas voluntarias y trabajadoras</Typography>            
          
            
          </Grid>
          <Grid item xs={12} md={4} rowSpacing={4} display='flex' flexDirection='column' gap='10px'>
            <Box display='flex' justifyContent='center'>
              <img src='src/assets/system/vision.jpg' width={220} height={220} />
            </Box>

            <Typography component='p' textAlign='center' fontSize={FontSize.PARAGRAPH} padding='0px 50px'>Esta integrada por 35 organizaciones no gubernamentales, confederaciones, federaciones y redes estatales que realizan 1234 atenciones</Typography>            

            
          </Grid>
          <Grid item xs={12} md={4} rowSpacing={4} display='flex' flexDirection='column' gap='10px'>
            <Box display='flex' justifyContent='center'>
              <img src='src/assets/system/vision.jpg' width={220} height={220} />
            </Box>

            <Typography component='p' textAlign='center' fontSize={FontSize.PARAGRAPH} padding='0px 50px'>Desde la plataforma se promueve la participación en el ámbito de la Acción Social y generar cambio social</Typography>
            
          </Grid>
        </Grid>
      </Grid>
      
    </>
  )
  
}
