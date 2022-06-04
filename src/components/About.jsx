import { LanguageOutlined } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  padding: 30px;
  background-color: #b1d0e0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h3`
  font-size: 20px;
  margin-bottom: 20px;
  ${mobile({ fontSize: "20px" })}
`;

const Div = styled.div`
  padding: 20px;
`;

const StyledButton = styled(LanguageOutlined)`
  font-size: 40px;
`;

const Desc = styled.p`
  font-size: 14px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ fontSize: "15px" })}
`;

const About = () => {
  return (
    <div>
      <Container>
        <Title>
          <StyledButton /> About
        </Title>
        <Div>
          <Desc>
            Created for the community affected by the opioid crisis,
            drughelp.care is a free website that allows drug treatment providers
            to list the number of open treatment slots daily. The site is fully
            searchable, and quickly and efficiently matches substance users with
            the best available treatment services.
            <br /> <br />
            Drughelp.care was developed by Dr. Miyuki Fukushima Tedor and Dr.
            Patricia Stoddard-Dare at Cleveland State University (CSU) in 2016.
            They met with over 100 community members over the years to develop
            the site. The technical specifications were designed by engineering
            graduate students with Dr. Wenbing Zhao, and they continue to refine
            and improve drughelp.care. <br />
            <br />
          </Desc>
        </Div>
      </Container>
    </div>
  );
};

export default About;
