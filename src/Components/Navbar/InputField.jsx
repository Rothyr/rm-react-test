import React, { Component } from 'react';


class InputField extends Component {
  constructor(props) { 
    super(props);
    this.state = {
      
    };
  }
  render() {
    const { selectedValue } = this.props ;
    console.log({ selectedValue })
    return (
      <div>
        <input id={ selectedValue } className="inputForm" type="text" name={ selectedValue } />
      </div>
    );
  }
}

export default InputField;