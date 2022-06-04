import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  color: white;
  background-color: #36596f;
`;

const Logo = styled.h6`
  flex: 1;
  margin: 0;
  padding: 5px;
  font-size: 15px;
`;

const Center = styled.div`
  flex: 1;
  padding: 5px;
`;

const Footer = () => {
  return (
    <Container>
      <Center className="text-center">
        <Logo>Copyright ©️2022, All rights reserved.</Logo>
      </Center>
    </Container>
  );
};

export default Footer;
