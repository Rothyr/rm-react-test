import React, {Component} from 'react';

class ClearBtn extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <button id="btn-clear" className="btn btn-second btn-satel"> Clear </button>
      </div>
    )
  }
}


export default ClearBtn;