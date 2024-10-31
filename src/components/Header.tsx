import { Link, useLocation } from "react-router-dom";
import { Button } from "antd";
import styled from "styled-components";
import React from "react";

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 35px;
	background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <HeaderWrapper>
      <Link to='/'>
        <img src='/public/vite.svg' alt='Logo of company' />
      </Link>
      {location.pathname !== "/contact" && (
        <Link to='/contact'>
          <Button color='default' variant='solid' size='large'>
            Contact us
          </Button>
        </Link>
      )}
    </HeaderWrapper>
  );
};
export default Header;
