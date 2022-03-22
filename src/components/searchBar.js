import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class searchBar extends Component {
    render() {
        return (
            <div>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={this.props.customSearch} />
                </form>
            </div>
        )
    }
}

export default searchBar