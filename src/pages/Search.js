import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import Card from "../components/Card";

// set up stateful values
class Search extends Component {
  state = {
    search: "",
    results: [],
    employees: [],
    filtered: [],
    error: "",
    sortDir: {
      first: "asc",
      last: "asc",
      phone: "asc",
      email: "asc"
    }
  };

  // When the component mounts, get a list of all available employees and update this.state.employees and also this.state.filtered
  componentDidMount() {
    // call getEmployees to return the random list of employees
    API.getEmployees()
      .then(res => {
        // store returned list into state variable of employees (this will be static)
        this.setState({ employees: res.data.results})
        // also store returned list into state variable of filtered  (this will change over time)
        this.setState({ filtered: res.data.results})
      })
      .catch(err => console.log(err));
  }

  handleInputChange = event => {

    // check if a search term exists within input form field
    if(event) {
      const filter = event.target.value;
      const filteredList = this.state.employees.filter(item => {

        let values = item.name.first.toLowerCase();
        // check search string exists within any of the fields and return the array value if a match
        return (values.indexOf(filter.toLowerCase()) !== -1)
            || (item.name.last.toLowerCase().indexOf(filter.toLowerCase()) !== -1)
            || (item.phone.toLowerCase().indexOf(filter.toLowerCase()) !== -1)
            || (item.email.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
      });

      // set filtered array state to be the new filtered list
      this.setState({filtered: filteredList});
      //      console.log(this.state.filtered);
    }
    else {
      // since no search term, need to restore filtered list back to original full employee list
      this.setState({filtered: this.state.employees});
    }
  };

  // function to sort table of employees by selected column heading name
  sortField = (field) => {
    var sortList;
    // check if sorting by first or last name
    if((field === "first") || (field ==="last")) {
      // perform sort - need this because first/last is buried below "name" not at root
      sortList = this.state.filtered.sort((a, b) => {
        return a.name[field].localeCompare(b.name[field])
      })
    }
    else {
      // use filtered list of employees to sort on
      sortList = this.state.filtered.sort((a, b) => {
        // compare the values of each array record for sorting based upon field name passed in
        return a[field].localeCompare(b[field])
      })
    }
    // update the state variable filtered with new sorted list
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