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

  // When the component mounts, get a list of all available employees and update this.state.employees and also this.state.filtered
  componentDidMount() {
    API.getEmployees()
      .then(res => {
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
        return (values.indexOf(filter.toLowerCase()) !== -1)
          || (item.name.last.toLowerCase().indexOf(filter.toLowerCase()) !== -1)
          || (item.phone.toLowerCase().indexOf(filter.toLowerCase()) !== -1)
          || (item.email.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
      });
  
      this.setState({filtered: filteredList});
      console.log(this.state.filtered);
    }
    else {
      this.setState({filtered: this.state.employees});
    }
  };

  sortField = (field) => {
    var sortList;
    sortList = this.state.filtered.sort((a, b) => {
      return a[field].localeCompare(b[field])
    })

    this.setState({filtered: sortList});
  }

  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <SearchForm
            handleInputChange={this.handleInputChange}
          />
          <Card
            sortField = {this.sortField} 
            results={this.state.filtered} />
        </Container>
      </div>
    );
  }
}

export default Search;