import React from 'react';
import {Stack} from '@mui/material';
import {Link} from 'react-router-dom';
import logo from '../images/logo.png';
import logoName from '../images/logo_name.png';
import SearchBar from './SearchBar';
import LoginButton from './LoginButton';
const Navbar = () => (
    <Stack 
    direction="row" 
    alignItems="center" 
    p={2} 
    sx={{position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between'}}>

    <Link to="/" style={{display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="logo" height={45} />
        <img src={logoName} alt="logo" height={45} />
    </Link>

    <SearchBar />

    <LoginButton />

    </Stack>
  )

export default Navbar;