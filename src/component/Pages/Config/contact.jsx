import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button'
import { purple } from '@mui/material/colors';

export const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));
  export const spanStyle = {
    padding: "20px",
    background: "transparent",
    color: "#fff",
    fontSize:"60px",
    textTransform: "uppercase"
  };
  
  export const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    height: "500px",
  };
  export const slideContaner={
      position: "relative",
      width: "100%",
      height: "100%",
  }
  export const slidimage={
          width: "100%",
          transition:" transform 0.4s",
  }
  export const slideImages = [
    {
      url: "slider/1.jpg",
      caption: "Examination workshop",
    },
    {
      url: "slider/2.jpg",
      caption: "production workshop",
    },
    {
      url: "slider/3.jpg",
      caption: "Maintenance Workshop",
    },
    {
      url: "slider/5.jpg",
      caption: "Convection oven for checking products",
    },
  ];
  