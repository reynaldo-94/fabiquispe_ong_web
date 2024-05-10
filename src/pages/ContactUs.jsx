import { Box, Button, Card, CardActions, CardContent, Divider, Grid, TextField, Typography, styled, useMediaQuery, useTheme } from '@mui/material'
import { FontSize, ThemePalette } from '../theme/theme'
import { AccessTime, Edit, LocationOn, MailOutline, PhoneInTalk } from '@mui/icons-material';
import { CButton } from '../components/Button';
import { useForm } from 'react-hook-form';
import emailjs from "@emailjs/browser";

// const ColorButton = styled(Button)(({ theme }) => ({
//   color: theme.palette.getContrastText(ThemePalette.PURPLE_LIGHT),
//   backgroundColor: ThemePalette.PURPLE_LIGHT,
//   '&:hover': {
//     backgroundColor: ThemePalette.PURPLE_LIGHT,
//   },
// }));

const defaultValues = {
  name: "",
  lastname: "",
  telephone: "",
  email: "",
  message: "",
};

const msgRequired = "Este campo es requerido";

export const ContactUs = () => {
  
  console.log('Contact us')
  const theme = useTheme();
  const onlySmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log('data', data)
    console.log('e.target', e.target)
    emailjs
      .sendForm(
        "gmail",
        "template_3wvi4b9",
        data,
        "l6e_wyDu2y4cjDt12NgAK"
      )
      .then(
        (result) => {
          console.log('ok', result)
          // setIsLoading(false);
          // setIsSendEmail(true);
          // reset(defaultValues);
        },
        (error) => {
          console.log('error', error)
          
          // setIsLoading(false);
          // setErrorSendEmail(true);
          // reset(defaultValues);
        }
      );
  }

  

  return (
    <Box marginTop='20px' p='10px 50px' display='flex' flexDirection='column' gap='50px'>
      <Box>
        {/* <Typography component='h2' fontSize='26px' color={ThemePalette.PURPLE_LIGHT} fontWeight='bold' textAlign='center'>Contacto Administrativo</Typography> */}
      
        <Box display='flex' flexDirection='column' gap='20px'>
          <Box>
            <Typography 
              component='h2' 
              fontSize={FontSize.TITLE_SECTION} 
              color={ThemePalette.GREEN_MEDIUM} 
              fontWeight='bold' 
              textAlign='center'
            >
              Contacto Administrativo
            </Typography>
            <Divider sx={{ backgroundColor: ThemePalette.GREEN_MEDIUM, width: '190px', margin: 'auto' }} />
          </Box>
          <Typography component='p' mb='20px'>Cuéntanos en el siguiente formulario como te podemos ayudar. Este formulario no es para solicitar una Cita.</Typography>
        </Box>
          
        <Grid container spacing='20px'>
          <Grid item xs={12} md={6}>          
            <Grid container component='form' spacing='20px' onSubmit={handleSubmit(onSubmit)}>
              <Grid item xs={12} md={6}>
                <TextField 
                  id="outlined-basic" 
                  label="Nombres" 
                  variant="outlined" 
                  fullWidth 
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <Typography component='span' color={ThemePalette.RED} fontSize={FontSize.FORM_ERROR}>{msgRequired}</Typography>
                )}
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField 
                  id="outlined-basic" 
                  label="Apellidos" 
                  variant="outlined" 
                  fullWidth 
                  {...register("lastname", { required: true })}
                />
                {errors.lastname && (
                  <Typography component='span' color={ThemePalette.RED} fontSize={FontSize.FORM_ERROR}>{msgRequired}</Typography>
                )}
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField 
                  id="outlined-basic" 
                  label="Teléfono o Celular" 
                  variant="outlined" 
                  fullWidth
                  {...register("phone", { required: true })}
                />
                {errors.phone && (
                  <Typography component='span' color={ThemePalette.RED} fontSize={FontSize.FORM_ERROR}>{msgRequired}</Typography>
                )}
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField 
                  id="outlined-basic" 
                  label="Correo electrónico" 
                  variant="outlined" 
                  fullWidth
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <Typography component='span' color={ThemePalette.RED} fontSize={FontSize.FORM_ERROR}>{msgRequired}</Typography>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-multiline-static"
                  label="Mensaje"
                  multiline
                  rows={4}
                  fullWidth
                  {...register("message", { required: true })}
                />
                {errors.message && (
                  <Typography component='span' color={ThemePalette.RED} fontSize={FontSize.FORM_ERROR}>{msgRequired}</Typography>
                )}
              </Grid>
              <Grid item xs={12} textAlign='center'>
                <CButton
                  startIcon={<Edit />} 
                  variant='contained'
                  type='submit'
                >
                  Enviar
                </CButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ width: onlySmallScreen ? '100%' : '50%', margin: 'auto' }}>
              <CardContent>
                <Grid container >
                  <Grid item md={2} >
                    <PhoneInTalk />
                  </Grid>
                  <Grid item md={10}  display='flex' flexDirection='column' >
                    <Typography component='h3' color={ThemePalette.GREEN_MEDIUM} fontWeight='bold'>Teléfonos</Typography>
                    <Typography component='span'>(01) 512-1300</Typography>
                  </Grid>
                </Grid>

                <Grid container mt='10px'>
                  <Grid item md={2}>
                    <PhoneInTalk />
                  </Grid>
                  <Grid item md={10} display='flex' flexDirection='column' >
                    <Typography component='h3' color={ThemePalette.GREEN_MEDIUM} fontWeight='bold'>Citas</Typography>
                    <Typography component='span'>(01) 512-1212</Typography>
                  </Grid>
                </Grid>

                <Grid container mt='10px'>
                  <Grid item md={2}>
                    <PhoneInTalk />
                  </Grid>
                  <Grid item md={10} display='flex' flexDirection='column' >
                    <Typography component='h3' color={ThemePalette.GREEN_MEDIUM} fontWeight='bold'>Emergencia</Typography>
                    <Typography component='span'>(+51) 957064401</Typography>
                  </Grid>
                </Grid>

                <Grid container mt='10px'>
                  <Grid item md={2}>
                    <AccessTime />
                  </Grid>
                  <Grid item md={10} display='flex' flexDirection='column' >
                    <Typography component='h3' color={ThemePalette.GREEN_MEDIUM} fontWeight='bold'>Horario de atención:</Typography>
                    <Typography component='span'>L a V: 8:00 am - 9:00 pm</Typography>
                  </Grid>
                </Grid>

                <Grid container mt='10px'>
                  <Grid item md={2}>
                    <MailOutline />
                  </Grid>
                  <Grid item md={10} display='flex' flexDirection='column' >
                    <Typography component='h3' color={ThemePalette.GREEN_MEDIUM} fontWeight='bold'>Correo</Typography>
                    <Typography component='span'>info@centrocrecemos.com</Typography>
                  </Grid>
                </Grid>

                <Grid container mt='10px'>
                  <Grid item md={2}>
                    <LocationOn />
                  </Grid>
                  <Grid item md={10} display='flex' flexDirection='column' >
                    <Typography component='h3' color={ThemePalette.GREEN_MEDIUM} fontWeight='bold'>Sedes</Typography>
                    <Typography component='span'>Oftalmosalud Surco</Typography>
                  </Grid>
                </Grid>
                
                
                
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.7824582255844!2d-77.02453702586034!3d-12.195200344680345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b767ce667e1d%3A0x66018292f62bcd3e!2sMercado%20San%20Genaro!5e0!3m2!1ses!2spe!4v1712512644479!5m2!1ses!2spe" width='100%' height="450" style={{ border: '0'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </Box>
      
    </Box>
  )
}
