import  React from 'react'
import { Navbar } from "react-bootstrap";


const NavBar = (props)=> {
  return(
        <Navbar staticTop={true}>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">Image finder</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Navbar.Text>
              
            </Navbar.Text>
            <Navbar.Text pullRight>Visit the original website!</Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
  );
}
export default NavBar;