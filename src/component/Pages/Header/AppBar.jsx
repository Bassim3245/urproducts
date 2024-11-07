import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
export default function AppBarT() {
const Navigate=useNavigate()
    const handleBake=()=>{
        Navigate("/")
    }
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" color="secondary">
        <Toolbar>
          <IconButton
           onClick={handleBake}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <ArrowBack />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Home
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


