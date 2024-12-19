import { Box, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import { FontSize, ThemePalette } from '../../theme/theme'

export const TerapiaLenguajePage = () => {
  return (
    <Grid container p='35px 50px 41px' rowSpacing='20px' columnSpacing='40px'>

      <Grid item xs={12} md={6} display='flex' justifyContent='center'>
        <img src='./terapias.jpg' width='100%' />
      </Grid>
      <Grid item xs={12} md={6} component='div' display='flex' flexDirection='column' gap='10px'>
        {/* <TitleSection 
          title='Nuestra Historia'
          classname={TypeTitleSection.WHITE}
        />   */}
        <Box>
          <Typography 
            component='h2' 
            fontSize={FontSize.TITLE_SECTION} 
            color={ThemePalette.PURPLE_LIGHT} 
            fontWeight='bold' 
            textAlign='center'
          >
            Terapia de Lenguaje
          </Typography>
          <Divider sx={{ backgroundColor: ThemePalette.PURPLE_LIGHT, width: '150px', margin: 'auto' }} />
        </Box>
        
        <Typography 
          component='p' 
          textAlign='justify' 
          fontSize={FontSize.PARAGRAPH} 
          color={ThemePalette.BLACK_MEDIUM}
          >
            Nuestros profesionales son tecnólogos médicos especializados en terapia de lenguaje que brindan al menor: evaluaciones, diagnóstico, pronóstico, programación y tratamiento preventivo en las deficiencias, relacionadas con el habla, lenguaje, voz, y deglución.
        </Typography>         
      </Grid>
    </Grid>
  )
}
