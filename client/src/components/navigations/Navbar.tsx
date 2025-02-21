import styled from "styled-components";

const Navbar = () => {
  return (
    <NavContainer>
      <h1>Test</h1>
    </NavContainer>
  )
}

export default Navbar;


const NavContainer = styled.nav`
  position: sticky;
  top: 0;
  padding: 14px 20px;
  background-color: ${(props) => props.theme.color.accent};
  color: ${(props) => props.theme.color.light};
`
