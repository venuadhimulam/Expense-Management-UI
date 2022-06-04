import React, { Component } from "react";
import ExpenseForm from "./ExpenseForm";
import styled from "styled-components";

class EditExpenses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      model: true,
    };
  }

  render() {
    const ModelHeader = styled.nav`
      background-color: #36596f;
      color: white;
    `;

    const CloseBtn = styled.button`
      background: white !important;
      padding: 10px;
      justify-content: center;
      align-items: center;
      display: flex;
    `;

    return (
      <div
        className="modal fade"
        id={"editExpenseModal" + this.props.rowId}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <ModelHeader className="modal-header">
              <h5
                onClick={() => console.log(this.props)}
                className="modal-title"
                id="exampleModalLabel"
              >
                Edit Expense
              </h5>
              {/* <CloseBtn
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <strong>X</strong>
              </CloseBtn> */}
            </ModelHeader>
            <div className="modal-body">
              <ExpenseForm type="update" expenseData={this.props.expenseData} />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => this.props.update()}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditExpenses;
