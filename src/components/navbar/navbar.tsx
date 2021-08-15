import { Nav, Navbar /*,Form, FormControl, Container*/ } from 'react-bootstrap';
import {Styles} from './navbar.styles';
import IconQantity from '../../assets/icon-quantity.svg';
import loginIcon from '../../assets/loginIcon.svg';

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg" >
      <Navbar.Brand href="/">
        <img src={IconQantity} alt="quantity-icon" className="quantity-logo"/>
      </Navbar.Brand>
      
      <Navbar.Collapse className="form-center">
        <Navbar.Text>
          <p><b>quantity </b>admin console</p>
        </Navbar.Text>
      </Navbar.Collapse>
      <Navbar.Collapse >
          <Nav className="ml-auto">
          <Navbar.Text>
            <p className="paragraph-spacing"><b>username</b>
            <br></br>email@email.com</p>
          </Navbar.Text>
            <Nav.Item>
              <Nav.Link href="/">
                  <img src={loginIcon} alt="userIcon" className="login-logo"/>
              </Nav.Link>
            </Nav.Item> 
          </Nav>
      </Navbar.Collapse>

        {/*
            <Form className="form-center">
            <FormControl type="text" placeholder="Search" className="" />
          </Form>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        */}
        {
          /*
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> 
                <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
              </Nav>
            </Navbar.Collapse>
          */
        }
    </Navbar>
  </Styles>
)