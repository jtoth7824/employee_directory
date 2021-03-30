import React, { Component } from "react";
import API from "../../utils/API";
import Container from "../Container";
import SearchForm from "../SearchForm";
import EmployeeTable from "../EmployeeTable";

// set up stateful values
class Search extends Component {
  state = {
    search: "",
    employees: [],
    filtered: [],
    error: "",
    sortDir: "asc"
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
      var filter = (event.target.value).toLowerCase();

      const filteredList = this.state.employees.filter(result => {
        // check search string exists within any of the fields and return the array value if a match
        return (result.name.first.toLowerCase().indexOf(filter) !== -1)
            || (result.name.last.toLowerCase().indexOf(filter) !== -1)
            || (result.phone.toLowerCase().indexOf(filter) !== -1)
            || (result.location.street.number.toString().indexOf(filter) !== -1)
            || (result.location.street.name.toLowerCase().indexOf(filter) !== -1)
            || (result.location.city.toLowerCase().indexOf(filter) !== -1)
            || (result.location.state.toLowerCase().indexOf(filter) !== -1);
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
      // check if ascending sortDir state
      if(this.state.sortDir === "asc") {
      // perform sort - need this because first/last is buried below "name" not at root
      sortList = this.state.filtered.sort((a, b) => {
        return a.name[field].localeCompare(b.name[field])
      })
      // change sortDir state to descending
      this.setState({sortDir: "desc"});
      }
      else {
      // perform sort - need this because first/last is buried below "name" not at root
      sortList = this.state.filtered.sort((a, b) => {
        return b.name[field].localeCompare(a.name[field])
      })
      // change sortDir state to ascending
      this.setState({sortDir: "asc"});
      }

    }
    // check if sorting by street
    else if((field === "street")) {
      // check if ascending sortDir state
      if(this.state.sortDir === "asc") {
        // perform sort - need this because name is buried under location & street not at root
        sortList = this.state.filtered.sort((a, b) => {
          return a.location[field].name.localeCompare(b.location[field].name)
        })
        // change sortDir state to descending
        this.setState({sortDir: "desc"});
      }
      else {
        // perform sort - need this because name is buried under location & street not at root
        sortList = this.state.filtered.sort((a, b) => {
          return b.location[field].name.localeCompare(a.location[field].name)
        })
        // chnage sortDir state to ascending
        this.setState({sortDir: "asc"});
      }
    }
    // check if sorting by city or state
    else if((field === "city") || (field === "state")) {
      // check if ascending sortDir state
      if(this.state.sortDir === "asc") {
        // perform sort - need this because city/state are buried under location not at root
        sortList = this.state.filtered.sort((a,b) => {
          return a.location[field].localeCompare(b.location[field])
        })
        // change sortDir state to descending
        this.setState({sortDir: "desc"});
      }
      else {
        // perform sort - need this because city/state are buried under location not at root
        sortList = this.state.filtered.sort((a, b) => {
          return b.location[field].localeCompare(a.location[field]);
        });
        // change sortDir state to ascending
        this.setState({sortDir: "asc"});
      }
    }
    else {
      // check if ascending sortDir state
      if(this.state.sortDir === "asc") {
      // use filtered list of employees to sort on
      sortList = this.state.filtered.sort((a, b) => {
        // compare the values of each array record for sorting based upon field name passed in
        return a[field].localeCompare(b[field])
      })
      // change sortDir state to descending
      this.setState({sortDir: "desc"});
      }
      else {
      // use filtered list of employees to sort on
      sortList = this.state.filtered.sort((a, b) => {
        // compare the values of each array record for sorting based upon field name passed in
        return b[field].localeCompare(a[field])
      })
      // change sortDir state to ascending
      this.setState({sortDir: "asc"});
      }

    }
    // update the state variable filtered with new sorted list
    this.setState({filtered: sortList});
  }

  render() {
    return (
      <div className="container-fluid">
        <Container style={{ minHeight: "80%" }}>
          <SearchForm
            handleInputChange={this.handleInputChange}
          />
          <EmployeeTable
            sortField = {this.sortField} 
            results={this.state.filtered} />
        </Container>
      </div>
    );
  }
}

export default Search;