import { Button as ButtonMui, styled } from '@mui/material'
import { ThemePalette } from '../theme/theme';
import { motion } from 'framer-motion';

const ColorButton = styled(ButtonMui)(({ backgroundcolorparam }) => {
  return (
    ({
      backgroundColor: backgroundcolorparam,
      '&:hover': {
        // backgroundColor: ThemePalette.PURPLE_LIGHT,
        backgroundColor: backgroundcolorparam,
      },
    })
  )})
;

export const CButton = ({
  variant = 'text',
  onClick = () => {},
  sx={},
  children = null,
  endIcon = null,
  color='info',
  backgroundColor = ThemePalette.BUTTON_NAVBAR,
  sxDiv = {},
  type='button'
}) => {
  return (
    variant === 'contained' ? (
      <motion.div style={sxDiv}>
        <ColorButton variant={variant} onClick={onClick} sx={sx} endIcon={endIcon} color={color} backgroundcolorparam={backgroundColor} type={type}>
          {children}
        </ColorButton>
      </motion.div>
    ) : (
      <motion.div>
        <ButtonMui variant={variant} onClick={onClick} sx={sx} endIcon={endIcon} color={color}>
          {children}
        </ButtonMui>
      </motion.div>
      
    )
  )
}
