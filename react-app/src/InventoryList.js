import React, { Component } from "react";
import AppNavbar from "./Navbar";
import { Link } from "react-router-dom";
import { Button, ButtonGroup, Container, Table } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class InventoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventories: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch("api/inventories")
      .then((response) => response.json())
      .then((data) => this.setState({ inventories: data, isLoading: false }));
  }

  removeInv = async (id) => {
    await fetch(`/api/inventory/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    console.log("Remove Done!");
    //update inventory state minus removed item
    let updatedInventories = [...this.state.inventories].filter(
      (i) => i._id !== id
    );
    this.setState({ inventories: updatedInventories });
  };

  render() {
    const { inventories, isLoading } = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    const inventoryList = inventories.map((inventory) => {
      return (
        <tr key={inventory._id}>
          <td style={{ whiteSpace: "nowrap" }}>
            {inventory.prodname}
          </td>
          <td>{inventory.qty}</td>
          <td>{inventory.price}</td>
          <td>{inventory.status}</td>
          <td>
            <ButtonGroup>
              <Button
                className="btn-outline-primary"
                size="sm"
                color=""
                tag={Link}
                to={"/inventories/" + inventory._id}
              >
                Edit
              </Button>
              <Button
                size="sm"
                className="btn-outline-danger"
                color=""
                tag={Link}
                onClick={() => this.removeInv(inventory._id)}
              >
                Delete
              </Button>
            </ButtonGroup>
          </td>
        </tr>
      );
    });

    return (
      <div>
        <AppNavbar />
        <Container fluid>
          <h3 className="formtitle m-5 d-flex justify-content-center">
            Employee List
          </h3>

          <Table responsive className="mt-4 listform">
            <thead>
              <tr>
                <th  width="20%">
                  Name
                </th>
                <th width="15%">
                  Work Hours/Week
                </th>
                <th width="15%">
                  Hourly Wage($)
                </th>
                <th width="15%">
                  Current Status
                </th>
                <th width="15%">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>{inventoryList}</tbody>
          </Table>
          <div className="float-left">
            <Button
              color="primary"
              className="my-4"
              tag={Link}
              to="/inventories/new"
            >
              Add Employee
            </Button>
          </div>
        </Container>
      </div>
    );
  }
}

export default InventoryList;
