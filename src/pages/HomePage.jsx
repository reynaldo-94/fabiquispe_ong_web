import { useNavigate } from 'react-router-dom';
import Carousel from 'react-material-ui-carousel'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Divider, Grid, Paper, Typography, styled, useMediaQuery, useTheme } from '@mui/material'
import { FontSize, ThemePalette } from '../theme/theme'
import { imgsFotosDonaciones, items, listDonations, listExperiences, listServices } from './constants'
import { WhatsApp } from '@mui/icons-material';
import Slider from 'react-slick';

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
      backgroundRepeat: 'round'
    }} />
  )
  
  return (
    <>
      {/* <Carousel 
        // sx={{
        //   height: onlySmallScreen ? '285px' : '555px',
        // }}
        height={heightCarousel}
      >
        {
          items.map( (item) => renderItem(item) )
        }
      </Carousel> */}

      <Box 
        sx={{ 
          backgroundImage: 'url(./fondo_inicio_5.jpg)', 
          height: '100vh',
          width: '100%',
          backgroundRepeat: 'round'
        }} 
        
        // gap='10px'
      >
        <Box 
          height='100%' 
          display='flex'
          justifyContent='center'
          alignItems='end'
        >
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'end',
            alignItems: 'center',
            bgcolor: '#ffffffad',
            padding: '10px',
            borderRadius: '20px'
          }}>
            <Typography>¿No sabes que hacer con tus objetos en desuso?</Typography>
            <Button sx={{ fontWeight: 'bold' }} >Dona desde tu hogar y empresa</Button>

            <Box>
              <Typography>Contáctanos</Typography>
              <Box display='flex' gap='5px'>
                <WhatsApp color='success' />
                <Typography>945740525</Typography>
              </Box>
              
            </Box>
          </Box>
          
        </Box>
        

      </Box>

      {/* ¿Que donar? */}
      <Grid  p='10px 50px 41px' display='flex' flexDirection='column' gap='15px' bgcolor={ThemePalette.PRIMARY}>
        <Typography 
          component='h2' 
          fontSize={FontSize.TITLE_SECTION} 
          fontWeight='bold' 
          textAlign='center'
          color={ThemePalette.WHITE}
        >
          ¿Que donar?
        </Typography>
        <Typography 
          component='p' 
          textAlign='center' 
          fontSize={FontSize.PARAGRAPH} 
          color={ThemePalette.WHITE}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam deserunt, expedita nulla consequuntur, modi iusto aut numquam quisquam non facere quaerat aliquid animi necessitatibus? Nesciunt possimus odio sit necessitatibus laboriosam.
        </Typography>


        <Grid container spacing='20px'>
          {
            listDonations.map((res) => (
              <Grid item md={4} xs={12} sm={6} key={res.id} >
                <Card sx={{ backgroundColor: ThemePalette.PRIMARY, boxShadow: 'none' }} >
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    image={res.image}
                    sx={{ borderRadius: '30px', width: '100%', height: '250px' }}
                  />
                  <CardContent sx={{ p: '0px', pt: '12px' }}>
                    <Typography gutterBottom component="div" textAlign='center' color={ThemePalette.WHITE} fontSize={FontSize.TITLE_PARAGRAPH} fontWeight='bold'>
                      {res.title}
                    </Typography>
                    <Typography component='p' color={ThemePalette.WHITE} textAlign='center' fontSize={FontSize.PARAGRAPH}>
                      {res.detail}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))
          }
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
              <img src='./mision.jpg' width={220} />
            </Box>

            <Typography component='p' textAlign='center' fontSize={FontSize.PARAGRAPH} padding='0px 50px'>POAS cuenta con la colaboración de 3.640 personas socias, personas voluntarias y trabajadoras</Typography>            
          
            
          </Grid>
          <Grid item xs={12} md={4} rowSpacing={4} display='flex' flexDirection='column' gap='10px'>
            <Box display='flex' justifyContent='center'>
              <img src='./vision.jpg' width={220} height={220} />
            </Box>

            <Typography component='p' textAlign='center' fontSize={FontSize.PARAGRAPH} padding='0px 50px'>Esta integrada por 35 organizaciones no gubernamentales, confederaciones, federaciones y redes estatales que realizan 1234 atenciones</Typography>            

            
          </Grid>
          <Grid item xs={12} md={4} rowSpacing={4} display='flex' flexDirection='column' gap='10px'>
            <Box display='flex' justifyContent='center'>
              <img src='./vision.jpg' width={220} height={220} />
            </Box>

            <Typography component='p' textAlign='center' fontSize={FontSize.PARAGRAPH} padding='0px 50px'>Desde la plataforma se promueve la participación en el ámbito de la Acción Social y generar cambio social</Typography>
            
          </Grid>
        </Grid>
      </Grid>

      {/* Deseo Donar */}

      <Box display='flex'>
        <Box flex={1} bgcolor={ThemePalette.PRIMARY} display='flex' flexDirection='column' justifyContent='center'
          padding='10px 30px' gap='20px'
        >
          <Typography component='h3' color={ThemePalette.WHITE} fontSize='30px'>
            ¡ACTUA AHORA Y SE PARTE DEL CAMBIO, DONNA Y COMPARTE ESPERANZA!
          </Typography>
          <Typography component='span' color={ThemePalette.WHITE}
            fontSize='20px'
          >Tu aporte marca la diferencia para más familias</Typography>
          <Button sx={{
            justifyContent: 'flex-start',
            width: 'fit-content'
          }}
            color='success'
            variant='contained'
          >
            Deseo Donar
            <WhatsApp />
          </Button>
          <Button></Button>
        </Box>
        <Box flex={1}><img src='./donar_reciclaje.jpg' width='100%' /></Box>
      </Box>


      {/* Algunas Fotos */}
      <Box p='15px 50px' component="div" display="flex" flexDirection="column" gap="20px">
        

        <Typography 
          component='h2' 
          fontSize={FontSize.TITLE_SECTION} 
          fontWeight='bold' 
          textAlign='center'
          color={ThemePalette.PRIMARY}
        >
          Algunas Fotos
        </Typography>
        
        
        <Typography component="p" textAlign='justify'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quibusdam commodi laudantium unde facere quisquam. Rerum quisquam nobis aspernatur nam provident? Nulla commodi sequi tenetur repellendus eveniet quam odit quas?
        </Typography>
        
        <div className="slider-container">
          <Slider 
            {
              ...{
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 3,              
                responsive: [
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 3,
                      infinite: true,
                      dots: true
                    }
                  },
                  {
                    breakpoint: 600,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 2,
                      initialSlide: 2
                    }
                  },
                  {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                    }
                  }
                ]
              }
            }
          >
            {
              imgsFotosDonaciones.map((foto) => (
                <Paper component="div"  sx={{
                  padding: '10px 30px', 
                }} key={foto.id} >
                  <img src={foto.image} alt={foto.title} height="250px" width='100%'/>
                </Paper>
              ))
            }
          </Slider>
        </div>
      </Box>
      
    </>
  )
  
}
