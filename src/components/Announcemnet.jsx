import styled from "styled-components";
import React from "react";

const Container = styled.div`
  height: 30px;
  font-weight: 500;
  font-size: 14px;
  background-color: #b1d0e0;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Announcemnet = () => {
  return <Container>Welcome! Find the Expense Management you need</Container>;
};

export default Announcemnet;
