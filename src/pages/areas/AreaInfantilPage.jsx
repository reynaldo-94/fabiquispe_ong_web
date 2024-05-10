import React from 'react'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Divider, Grid, Typography, styled } from '@mui/material'
import { motion } from 'framer-motion';
import { FontSize, ThemePalette } from '../../theme/theme'
import { listServices, listServicesInfantil } from '../constants';
import { CButton } from '../../components/Button';
import { useNavigate } from 'react-router-dom';

const BoxExperiences = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column'
  },
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
  }
}));

export const AreaInfantilPage = () => {
  const navigate = useNavigate();
  return (
    <Grid container marginTop='20px' p='10px 50px' rowGap='30px'>
      <Grid item xs={12}>
        <Box>
          <Typography 
            component='h2' 
            fontSize={FontSize.TITLE_SECTION} 
            color={ThemePalette.PURPLE_LIGHT} 
            fontWeight='bold' 
            textAlign='center'
          >
            Servicios infantiles
          </Typography>
          <Divider sx={{ backgroundColor: ThemePalette.PURPLE_LIGHT, width: '120px', margin: 'auto' }} />
        </Box>
        <Typography pt='10px' component='div' textAlign='justify'>Contamos con un grupo humano de profesionales con amplia experiencia en prevención, detección e intervención de niños, niñas y adolescentes. Nuestra labor la realizamos en un área de 240mt2, distribuidos estratégicamente, con una infraestructura idónea y con un equipamiento necesario para que las atenciones se lleven a cabo en condiciones óptimas.</Typography>  
      </Grid>
      {/* Servicios */}
      {/* <Box p='35px 50px 41px' component="div" flexDirection="column" display="flex" gap="25px" > */}
      <Grid container spacing='30px'>
        {
          listServicesInfantil.map((res) => (
            <Grid item xs={12} sm={6} md={4} key={res.id}>
              <img src={res.image} alt={res.title} width='100%'  />
              <Box textAlign='center' pt='10px'>
                <CButton 
                  size="small" 
                  variant='contained' 
                  color='info' 
                  sx={{ p: '10px 25px' }} 
                  onClick={() => navigate('/terapia-lenguaje')}
                  backgroundColor={ThemePalette.SKYBLUE_MEDIUM}
                >{res.title}</CButton>
              
              </Box>
            </Grid>  
          ))
        }
      </Grid>
    </Grid>
  )
}
