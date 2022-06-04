import React, { Component } from "react";
import styled from "styled-components";
import { mobile, tab } from "../responsive";
import Service from "./Service";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: #d9d9d9;
  ${mobile({ height: "auto", flexDirection: "column" })}
  ${tab({ height: "auto", flexDirection: "column" })}
`;

const Wrapper = styled.div`
  width: 70%;
  padding: 20px;
  height: 100%;
  background: white;
  ${mobile({ width: "100%" })}
  ${tab({ width: "100%" })}
`;

const Left = styled.div`
  flex: 1;
  padding: 5px;
`;

const Center = styled.div`
  flex: 1;
  padding: 5px;
`;

const Input = styled.input`
  flex: 1;
  min-width: 100%;
  margin: 10px 0px;
  padding: 10px;
  outline: none;
  border: 1px solid #192637;
  border-radius: 5px;
`;

const Right = styled.div`
  flex: 1;
  padding: 5px;
`;

const TextArea = styled.textarea`
  resize: none;
  width: 100%;
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
  outline: none;
  border-radius: 3px;
  border: 1px solid #192637;
`;

const Button = styled.button`
  width: 30%;
  background-color: #36596f;
  color: white;
  cursor: pointer;
  border-radius: 3px;
  border: none;
  padding: 5px;

  ${mobile({ width: "25%" })}
  ${tab({ width: "25%" })}
`;

class ExpenseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: "",
      description: "",
    };
  }

  componentDidMount() {
    if (this.props && this.props.expenseData) {
      const data = this.props.expenseData;
      this.setState({
        name: data.name,
        description: data.description,
        price: data.price,
      });
    }
  }

  handleInputChanges = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  isNumericInput = (event) => {
    const reg = new RegExp("^[+]?([0-9]{0,})*[.]?([0-9]{0,})?$", "g");
    if (event === "" || reg.test(event)) {
      this.setState({
        price: event,
      });
    }
  };

  resetValues = (flag) => {
    if (flag) {
      this.setState({
        name: "",
        price: "",
        description: "",
      });
    }
    this.props && this.props.update();
  };

  notify = (message, Error) => {
    if (Error) {
      toast.error(message, {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      toast.success(message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  validateExpenses = () => {
    const { name, price, description } = this.state;
    var flag = true;
    if (name === "" || name === " ") {
      this.notify("Please Enter Name!", true);
      flag = false;
    }

    if (price === "" || price === " " || Number(price) <= 0) {
      this.notify("Please Enter Price!", true);
      flag = false;
    }

    if (description === "" || description === " ") {
      this.notify("Please Enter Description!", true);
      flag = false;
    }
    return flag;
  };

  throwValidations = (resData) => {
    var messages =
      resData &&
      resData.response &&
      resData.response.data &&
      resData.response.data.errors;
    if (messages) {
      if (messages.name && messages.name.length > 0) {
        this.notify(messages.name[0], true);
      }
      if (messages.price && messages.price.length > 0) {
        this.notify(messages.price[0], true);
      }
      if (messages.description && messages.description.length > 0) {
        this.notify(messages.description[0], true);
      }
    }
  };

  updateExpense = async (name, price, description) => {
    const { expenseData } = this.props;

    var id = expenseData && expenseData.id,
      url = "http://127.0.0.1:8000/updateExpense/" + id,
      payload = {
        name: name,
        price: price,
        description: description,
      };

    const resData = await Service.updateExpenseMethod(url, payload);

    if (resData && resData.status === 200) {
      this.notify("Updated Succesfully!");
      this.resetValues(false);
    } else {
      this.notify("Updated Failed!", true);
      this.throwValidations(resData);
    }
  };

  saveExpenses = async (name, price, description) => {
    var url = "http://127.0.0.1:8000/saveExpense",
      payload = {
        name: name,
        price: price,
        description: description,
      };

    const resData = await Service.saveExpense(url, payload);

    if (resData && resData.status === 200) {
      this.notify("Saved Succesfully!");
      this.resetValues(true);
    } else {
      this.notify("Saved Failed!", true);
      this.throwValidations(resData);
    }
  };

  submit = () => {
    toast.dismiss();
    const { name, price, description } = this.state;
    const { type } = this.props;

    const proceed = this.validateExpenses();

    if (proceed) {
      if (type && type === "update") {
        this.updateExpense(name, price, description);
      } else {
        this.saveExpenses(name, price, description);
      }
    }
  };

  render() {
    const { name, price, description } = this.state;
    return (
      <Container>
        <Wrapper>
          <Left>
            <Input
              id="name"
              value={name}
              placeholder="name"
              onChange={(event) => {
                this.handleInputChanges(event);
              }}
              required
            />
          </Left>
          <Center>
            <Input
              id="price"
              placeholder="price"
              value={price}
              onChange={(event) => {
                this.isNumericInput(event.target.value);
              }}
              onKeyPress={(e) => {
                if ("1234567890.".includes(e.key) === false) {
                  e.preventDefault();
                }
              }}
              required
            />
          </Center>
          <Right>
            <TextArea
              id="description"
              name="description"
              value={description}
              placeholder="Item Description"
              onChange={(event) => {
                this.handleInputChanges(event);
              }}
              required
            />
          </Right>
          {this.props && this.props.type && this.props.type === "update" ? (
            <Button onClick={() => this.submit()}>Update</Button>
          ) : (
            <Button onClick={() => this.submit()}>Add</Button>
          )}
          <ToastContainer />
        </Wrapper>
      </Container>
    );
  }
}

export default ExpenseForm;
