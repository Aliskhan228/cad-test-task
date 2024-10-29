import { Link } from "react-router-dom";
import { Button } from "antd";
import styled from "styled-components";

const HeaderWrapper = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 15px 35px;
	position: sticky;
`;

function Header() {
  return (
    <HeaderWrapper>
      <Link to='/'>
        <img src='/public/vite.svg' alt='Logo of company' />
      </Link>
      <Button color='default' variant='solid' size="large">
        Contact us
      </Button>
    </HeaderWrapper>
  );
}
export default Header;
