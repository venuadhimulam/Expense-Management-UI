import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import ExpenseTable from "./ExpenseTable";
import Home from "./Home";
import { Redirect } from "react-router-dom";
import Announcemnet from "./Announcemnet";
import { BlurOnOutlined } from "@material-ui/icons";
import { Facebook, LinkedIn, Twitter } from "@material-ui/icons";
import { mobile } from "../responsive";

const Logo = styled.h5`
  display: flex;
  flex: 1;
  margin: 0;
  padding: 10px;
  letter-spacing: 3px;
  color: white;
  align-items: center;
`;

const Nav = styled.nav`
  background-color: #36596f;
  color: white;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled(BlurOnOutlined)`
  font-size: 40px !important;
  margin-right: 10px;
`;

const SocialContainer = styled.div`
  display: flex;
  float: right;
  padding: 10px;
`;

const SocialIcon = styled.a`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  &:hover {
    background-color: #e9f5f5;
  }
`;

const ContainerDiv = styled.div`
  ${mobile({ flexDirection: "column" })}
`;

const TitleDiv = styled.div`
  ${mobile({ fontSize: "20px !important" })}
`;

const Navbar = () => {
  return (
    <Div>
      <div>
        <Nav className="navbar navbar-expand-lg navbar-light">
          <ContainerDiv className="container-fluid">
            <Link className="navbar-brand" to="#">
              <Logo>
                <div>
                  <StyledButton className="text-white" />
                </div>
                <TitleDiv>drughelp.care!</TitleDiv>
              </Logo>
            </Link>
            <SocialContainer>
              <SocialIcon href="https://www.facebook.com/Drughelp.careApp/">
                <Facebook />
              </SocialIcon>
              <SocialIcon href="https://twitter.com/DrughelpC">
                <Twitter />
              </SocialIcon>
              <SocialIcon href="https://www.linkedin.com/company/drughelp-care/">
                <LinkedIn />
              </SocialIcon>
            </SocialContainer>
          </ContainerDiv>
        </Nav>
      </div>
      <div>
        <Announcemnet />
      </div>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/getExpenses" component={ExpenseTable} />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    </Div>
  );
};

export default Navbar;
