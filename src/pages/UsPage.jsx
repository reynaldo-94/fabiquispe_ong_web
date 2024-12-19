import { Box, Divider, Grid, Paper, Typography } from "@mui/material"
import { FontSize, ThemePalette } from "../theme/theme"
import { BoxCarousel } from "./HomePage"
import { useNavigate } from "react-router-dom"

export const UsPage = () => {  

  const navigate = useNavigate();

  const renderItem = (data) =>  (    
    <BoxCarousel key={data.title} sx={{
      backgroundImage: `url(${data.image})`,
      height:'100vh',
      // backgroundPosition: 'center',
      width: '100%',
      backgroundRepeat: 'no-repeat'
    }} />
  )

  return (
    <>
      {/* Nuestra Historia */}      
      <Grid container p='35px 50px 41px' rowSpacing='20px' columnSpacing='40px' sx={{ backgroundColor: ThemePalette.PRIMARY }}>        
        <Grid item xs={12} md={6} component='div' display='flex' flexDirection='column' gap='20px'>
          {/* <TitleSection 
            title='Nuestra Historia'
            classname={TypeTitleSection.WHITE}
          />   */}
          <Box>
            <Typography 
              component='h2' 
              fontSize={FontSize.TITLE_SECTION} 
              color={ThemePalette.WHITE} 
              fontWeight='bold' 
              textAlign='center'
            >
              NUESTRA HISTORIA
            </Typography>
            <Divider sx={{ backgroundColor: ThemePalette.WHITE, width: '150px', margin: 'auto' }} />
          </Box>
          
          <Typography 
            component='p' 
            textAlign='justify' 
            fontSize={FontSize.PARAGRAPH} 
            color={ThemePalette.WHITE}
            >
              Somos una institución que desde su fundación en el 2016 ha logrado una trayectoria exitosa con progreso en beneficio de todos sus pacientes.<br />Nos hemos especializado en brindar terapias de rehabilitación para niños, adolescentes y adultos, teniendo hasta el momento más de 2,000 pacientes atendidos y más de 30 mil sesiones de terapia realizadas.<br /> Nos caracteriza una atención confiable con profesionales capacitados y actualizados en cada área que te brindan una terapia efectiva y sobre todo un trato humano y cálido.
          </Typography>         
        </Grid>

        <Grid item xs={12} md={6} display='flex' justifyContent='center'>
          <img src='./terapias.jpg' width='100%' />
        </Grid>

      </Grid>    

      {/* MISION - VISION  */}

      {/* <Grid container p='35px 50px 41px' rowSpacing='20px' columnSpacing='40px' display='flex'> */}
      <Box display='flex' justifyContent='center'>

        <Box display='flex' flex={1}>
          <img src='./mision.jpg' width='100%' style={{ padding: '30px' }}  />
        </Box>

        <Box display='flex' flexDirection='column' flex={1} gap='60px' justifyContent='center'>
          <Box display='flex' flexDirection='column' gap='5px'>
            <Typography component='h2' fontSize={FontSize.TITLE_SECTION} color={ThemePalette.PRIMARY} fontWeight='bold' textAlign='center'>Misión</Typography>
            <Typography component='p' textAlign='center' fontSize={FontSize.PARAGRAPH} padding='0px 50px'>Brindar rehabilitación terapéutica integral a niños y adultos mediante terapias efectivas con profesionales actualizados en cada área.</Typography>
          </Box>
          
          <Box display='flex' flexDirection='column' gap='5px'>
            <Typography component='h2' fontSize={FontSize.TITLE_SECTION} color={ThemePalette.PRIMARY} fontWeight='bold' textAlign='center'>Visión</Typography>
            <Typography component='p' textAlign='center' fontSize={FontSize.PARAGRAPH} padding='0px 50px'>Ser la institución líder e innovadora que logre brindar tratamiento terapéutico a niños y adultos en Lima Norte.</Typography>
          </Box>  
        </Box>        
      </Box>
    </>
  )
  
}
