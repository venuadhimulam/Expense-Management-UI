import React, { Component } from "react";
import styled from "styled-components";
import ExpenseForm from "./ExpenseForm";
import { mobile, tab } from "../responsive";
import ExpenseTable from "./ExpenseTable";
import { AddToPhotosOutlined, ListAltRounded } from "@material-ui/icons";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #b6b6b6;
  ${mobile({ flexDirection: "column", height: "auto" })}
  ${tab({ height: "auto", flexDirection: "column" })}
`;

const AddExpenses = styled.div`
  width: 70%;
  padding: 20px;
  height: 100%;
  background: white;
  flex: 1;
  ${mobile({ width: "100%" })}
`;

const ListOfExpenses = styled.div`
  width: 70%;
  padding: 20px;
  height: 100%;
  background: white;
  flex: 2;
  ${mobile({ width: "100%" })}
`;

const Tilte = styled.h2`
  font-size: 20px;
  font-weight: 300;
`;

const TitleDiv = styled.div`
  display: flex;
  background-color: #36596f;
  color: white;
  padding: 5px;
  ${mobile({ marginBottom: "5px" })}
`;

const Add = styled(AddToPhotosOutlined)`
  font-size: 25px;
  margin-right: 10px;
`;

const List = styled(ListAltRounded)`
  font-size: 25px;
  margin-right: 10px;
`;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: true,
    };
  }

  callBack = () => {
    let flag = !this.state.flag;
    this.setState({ flag: flag });
  };

  render() {
    const { flag } = this.state;
    return (
      <div>
        <Container>
          <AddExpenses>
            <TitleDiv>
              <div>
                <Add className="text-white" />
              </div>
              <Tilte>Add Expenses</Tilte>
            </TitleDiv>
            <ExpenseForm update={this.callBack} />
          </AddExpenses>
          <ListOfExpenses>
            <TitleDiv>
              <div>
                <List className="text-white" />
              </div>
              <Tilte>List of Expenses</Tilte>
            </TitleDiv>
            <ExpenseTable update={this.callBack} />
          </ListOfExpenses>
        </Container>
      </div>
    );
  }
}

export default Home;
