import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

class DeleteExpense extends Component {
  render() {
    const ModelHeader = styled.nav`
      background-color: #36596f;
      color: white;
    `;

    const deleteExpenseRecord = async (id) => {
      await axios
        .delete("http://127.0.0.1:8000/deleteExpense/" + id)
        .then(() => {
          console.log("delete press", this.props);
          this.props.fetch();
        })
        .catch((error) => {
          console.log(error);
        });
    };

    return (
      <div
        className="modal fade"
        id={"deleteExpenseModal" + this.props.rowId}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <ModelHeader className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Delete Expense
              </h5>
            </ModelHeader>
            <div className="modal-body">Are you sure wants to delete?</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={() => {
                  deleteExpenseRecord(this.props && this.props.rowId);
                }}
              >
                Yes
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
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

export default DeleteExpense;
