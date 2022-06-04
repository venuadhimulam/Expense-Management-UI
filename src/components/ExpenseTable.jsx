import React, { Component } from "react";
import styled from "styled-components";
import EditExpenses from "./EditExpenses";
import DeleteExpense from "./DeleteExpense";
import { EditOutlined, DeleteOutlineOutlined } from "@material-ui/icons";
import { mobile, tab } from "../responsive";
import Service from "./Service";
import { toast } from "react-toastify";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: #d9d9d9;
`;

const Wrapper = styled.div`
  width: 80%;
  padding: 20px;
  height: 100%;
  background: white;
  overflow: auto;
  ${mobile({ width: "100%", padding: "0" })}
  ${tab({ width: "100%", padding: "0" })}
`;

const THead = styled.thead`
  background: #36596f;
  color: white;
`;

const SocialIcon = styled.a`
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;

class ExpenseTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: "",
      description: "",
      data: [],
    };
  }

  componentDidMount() {
    this.fetchAllExpenses();
  }
  componentWillReceiveProps() {
    this.fetchAllExpenses();
  }

  fetchAllExpenses = async () => {
    let url = "http://127.0.0.1:8000/getAllExpenses";
    const resData = await Service.getAllExpeses(url);
    if (resData != null) {
      this.setState({ data: resData });
    }
  };

  getExpense = async (id) => {
    toast.dismiss();
    let url = "http://127.0.0.1:8000/show/";
    const resData = await Service.getExpenseById(url, id);
    if (resData != null) {
      this.setState({
        name: resData.name,
        price: resData.price,
        description: resData.description,
      });
    }
  };

  render() {
    const data = this.state.data;
    return (
      <Container>
        <Wrapper>
          <table className="table tablehover">
            <THead>
              <tr>
                <th scope="col"></th>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Description</th>
                <th scope="col">Date & Time</th>
                <th scope="col"></th>
              </tr>
            </THead>
            <tbody>
              {data &&
                data.map &&
                data.map((row) => {
                  var date = new Date(row.created_at);
                  return (
                    <tr key={row.id}>
                      <td>
                        <SocialIcon
                          data-bs-toggle="modal"
                          data-bs-target={"#editExpenseModal" + row.id}
                          rowId={row.id}
                        >
                          <EditOutlined
                            onClick={() => {
                              this.getExpense(row.id);
                            }}
                          />
                        </SocialIcon>
                        <EditExpenses
                          update={this.props.update}
                          rowId={row.id}
                          expenseData={row}
                        />
                      </td>
                      <th scope="row">{row.id}</th>
                      <td>{row.name}</td>
                      <td>{row.price}</td>
                      <td>{row.description}</td>
                      <td>{date.toDateString()}</td>
                      <td>
                        <SocialIcon
                          data-bs-toggle="modal"
                          data-bs-target={"#deleteExpenseModal" + row.id}
                        >
                          <DeleteOutlineOutlined />
                        </SocialIcon>
                        <DeleteExpense
                          fetch={this.fetchAllExpenses}
                          rowId={row.id}
                        />
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </Wrapper>
      </Container>
    );
  }
}

export default ExpenseTable;
