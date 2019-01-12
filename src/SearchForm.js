import React, { Component } from 'react'

export default class SearchForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: ''
        }
    }

    handleChange = (event) => {
        this.setState({
          name: event.target.value
        })
      };

    render() {
        return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <form className="form-inline my-2 my-lg-0" onSubmit={(event) => { event.preventDefault()
                this.props.findCard(this.state.name)}}>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search Books by ID</button>  
                <input className="form-control mr-sm-2" type="search" placeholder="Search" name="bookID" value={this.state.name} onChange={this.handleChange} aria-label="Search"/>
            </form>
        </nav>
        )
    }

}