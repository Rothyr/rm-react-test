import React, { Component } from 'react';


class SelectDropdownValue extends Component {
  
  render() {
    return (
      <div>
        <select onChange={this.props.changeTheSelection} id="host" className="btn btn-secondary btn-lg btn-satel" name="host">
          <option value='repo'> Github </option>
          <option value='project'> Jira </option>
        </select>
      </div>
    );
  }
}

export default SelectDropdownValue;