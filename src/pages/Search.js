import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import Card from "../components/Card";

class Search extends Component {
  state = {
    search: "",
    results: [],
    employees: [],
    filtered: [],
    error: ""
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    API.getEmployees()
      .then(res => {
        console.log(res.data.results)
        this.setState({ employees: res.data.results})
        this.setState({ filtered: res.data.results})
      })
      .catch(err => console.log(err));
  }

  handleInputChange = event => {

    if(event) {
      const filter = event.target.value;
      const filteredList = this.state.employees.filter(item => {
        let values = item.name.first.toLowerCase();
        return values.indexOf(filter.toLowerCase()) !== -1;
      });
  //console.log("filtered list = " + filteredList)
  
      this.setState({filtered: filteredList});
      console.log(this.state.filtered);
    }
    else {
      this.setState({filtered: this.state.employees});
//      this.state.filtered = this.state.employees;
    }
  };

  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <SearchForm
            handleInputChange={this.handleInputChange}
          />
          <Card results={this.state.filtered} />
        </Container>
      </div>
    );
  }
}

export default Search;