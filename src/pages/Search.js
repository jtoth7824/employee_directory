import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
// import SearchResults from "../components/SearchResults";
// import Alert from "../components/Alert";
import Card from "../components/Card";

class Search extends Component {
  state = {
    search: "",
    breeds: [],
    results: [],
    employees: [],
    error: ""
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    API.getEmployees()
      .then(res => {
        console.log(res.data.results)
        this.setState({ employees: res.data.results})
      })
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    // API.getDogsOfBreed(this.state.search)
    //   .then(res => {
    //     if (res.data.status === "error") {
    //       throw new Error(res.data.message);
    //     }
    //     this.setState({ results: res.data.message, error: "" });
    //   })
    //   .catch(err => this.setState({ error: err.message }));
  };
  render() {
    // console.log(this.state.breeds);
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            // breeds={this.state.breeds}
          />
          <Card results={this.state.employees} />

        </Container>
      </div>
    );
  }
}

export default Search;
