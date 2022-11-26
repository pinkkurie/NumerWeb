import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';

var Brandstyle = {
    color: '#000000',
    fontSize: '140%',
    shadow: '20px 20px 50px',
    
}

var Fontstyle = {
   color:'#FFA500',
   fontSize: '100%',
   fontFamily:'Courier New'
}

/*<a href='/' className='home-title'>Numerical Method</a>*/

function NavBar() {
    return (
        <Navbar bg="aquamarine" expand="lg" variant='aquamarine'>
            
            <Container>
            <Navbar.Brand style={Brandstyle} >Numerical Method</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <nav className='me-auto'>
                <NavDropdown style={Fontstyle} title="Root of equations" id="nav-dropdown" >
                    <DropdownItem><Link style={{color: '#000000' }} to="/Graphical">Graphical Method</Link></DropdownItem>
                    <DropdownItem><Link style={{color: '#000000' }} to="/Bisection">Bisection Method<br/></Link></DropdownItem>
                    <DropdownItem><Link style={{color: '#000000' }} to="/FalsePositions">False Position Method</Link></DropdownItem>
                    <DropdownItem><Link style={{color: '#000000' }} to="/NewtonRapson">Newton Raphson Method</Link></DropdownItem>
                    <DropdownItem><Link style={{color: '#000000' }} to="/OnePointIteration">One-point Iteration Method</Link></DropdownItem>
                    <DropdownItem><Link style={{color: '#000000' }} to="/Secant">Secant Method</Link></DropdownItem>
                </NavDropdown>
                <NavDropdown style={Fontstyle} title="Solution Techniques" id="nav-dropdown" >
                    <DropdownItem><Link style={{color: '#000000' }} to="/Cramers">Cramer's Rule</Link></DropdownItem>
                    <DropdownItem><Link style={{color: '#000000' }} to="/GuassElimination">Guass Elimination Method</Link></DropdownItem>
                    <DropdownItem><Link style={{color: '#000000' }} to="/Guass-Jordan">Guass-Jordan Method<br/></Link></DropdownItem>
                    <DropdownItem><Link style={{color: '#000000' }} to="/MatrixInversion">Matrix Inversion Method</Link></DropdownItem>
                    <DropdownItem><Link style={{color: '#000000' }} to="/LUDecomposition">LU Decomposition Method</Link></DropdownItem>
                    <DropdownItem><Link style={{color: '#000000' }} to="/JacobiIteration">Jacobi Iteration Method</Link></DropdownItem>
                    <DropdownItem><Link style={{color: '#000000' }} to="/GaussSeidelIteration">Gauss-Seidel Iteration Method</Link></DropdownItem>
                    <DropdownItem><Link style={{color: '#000000' }} to="/ConjugateGradient">Conjugate Gradient Method</Link></DropdownItem>                
                </NavDropdown>
                </nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        
    )
}
export default NavBar;