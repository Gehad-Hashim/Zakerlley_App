import React from 'react';
import { Nav,Navbar,Container} from 'react-bootstrap';
import Button from 'react-bootstrap/button';


const Header=()=>{
   
    return(
        <Navbar  data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Logoipsum</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">الرئيسيه</Nav.Link>
            <Nav.Link href="#features">عن المنصه</Nav.Link>
            <Nav.Link href="#pricing">المراحل الدراسيه</Nav.Link>
            <Nav.Link href="#">المدونه</Nav.Link>
            <Nav.Link href="#f">تواصل معنا</Nav.Link>

          </Nav>
          <Button variant="primary">تسجيل دخول</Button>{' '}
                  </Container>
      </Navbar>
    )
}

export default Header;