import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './_UserBtn.scss';
import './_SatelLogo.scss';
import './_SelectionForm.scss';
import './_Navbar.scss';
import './_LoadingSpinner.scss';
import './_WelcomeMessage.scss';


import App from './App.jsx';

const app = document.getElementById('app');

class WasTheButtonClicked extends React.Component {
  constructor() {
    super();
    this.state = {
      buttonHasBeenClicked: false,
      howManyTimes: 0
    };
  }
  render() {
    const changeButtonHasBeenClicked = () => {
      this.setState({
        buttonHasBeenClicked: true,
        howManyTimes: this.state.howManyTimes + 1
      });
    };
    return (
      <div>
        <h1> Was The Button Clicked?</h1>
        <p>{this.state.buttonHasBeenClicked ? 'Yes' : 'No'}</p>
        <p>How many times has it been clicked? {this.state.howManyTimes}</p>
        <button onClick={changeButtonHasBeenClicked}>The Button</button>
      </div>
    );
  }
}

// class HeaderForm extends Component {
//   constructor() {
//     state = {
//       selectValue: null,
//     }
//   }

//   componentDidMount() {

//   }
//   handleSelectChange = val => {
//     this.setState({ selectValue: val });
//   }

//   render() {
//     const { selectValue } = this.state;

//     return (
//       <div>
//         <select onchange={this.handleSelectChange} value={selectValue} />
//       </div>
//     )
//   }
// }

// export default HeaderForm;


function SatelLogo() {
  return (
    <img alt="satel-logo" id="logo" src="https://cdn.shopify.com/s/files/1/0902/0536/files/satelcreative_horizontal_colour_v2_360x.png" />
  );
}

// function UserBtn() { 
//   if (user === "logged-in") {
//     return (
//       <div className="user-actions">
//         <a id="qsLogoutBtn" href="/test/logout"> Log Out </a>
//       </div>
//     )
//   } else {
//     return (
//       <div className="user-actions">
//         <a id="qsLoginBtn" className="btn btn-primary btn-lg btn-logout btn-satel" href="/test/login"> Log In </a>
//       </div>
//     )
//   }
// }

function SelectionForm() { 
  // if (user === "logged-in") {
    return (
      <div className="api-actions">
        <form id="form" action="submit" method="POST" name="host">

          <select onChange="setVal(this)" className="btn btn-secondary btn-lg btn-satel" name="host" id="host">
            <option disabled selected value="none">  Select</option>
            <option value="github"> Github </option>
            <option value="jira"> Jira </option>
          </select>

          <input id="repo" className="inputForm" type="text" name="repo" />
          <input id="project" className="inputForm" type="text" name="project" />

          <button id="btn-private" className="btn btn-satel"> Submit</button>

          <button id="btn-clear" onclick="setVal(this)" value="none" className="btn btn-secondary btn-satel"> Clear </button>
        </form>
      </div>
    )
  // } else { 
  //   return (
  //     <div className="api-actions"></div>
  //   )
  // }
}

    
function Navbar() { 
  return (
    <div>
      <div className="w3-bar w3-light-grey">
        <div className="w3-bar-item w3-mobile bar-left">
          <SatelLogo />
        </div>
        <div className="w3-bar-item w3-mobile bar-middle">
          <SelectionForm />
        </div>
        <div className="w3-bar-item w3-mobile bar-right">
          {/* <UserBtn /> */}
        </div>
      </div>
    </div>
  )
}

function LoadingSpinner() {
  return (
    <div className="sk-folding-cube">
      <div className="sk-cube1 sk-cube"></div>
      <div className="sk-cube2 sk-cube"></div>  
      <div className="sk-cube4 sk-cube"></div>  
      <div className="sk-cube3 sk-cube"></div>  
    </div>
  )
}

// function WelcomeMessage() {
//   if (user === "logged-in") {
//     return (
//       <div className="info-container">
//         <h2 className="w3-animate-opacity" id="infoTitle">Welcome to Satel Roadmapper </h2>
//         <h4 className="w3-animate-opacity" id="infoText"> Please use the Github or Jira buttons above to search for either a Github repo or a Jira project </h4>
//       </div>
//     )
//   } else {
//     return (
//       <div className="info-container">
//         <h2 className="w3-animate-opacity" id="infoTitle"> Welcome to Satel Roadmapper </h2>
//         <h4 className="w3-animate-opacity" id="infoText"> Please log in to continue. </h4>
//       </div>
//     )
//   }
// }


// RENDERING AREA //

ReactDOM.render(<WasTheButtonClicked />, app);
ReactDOM.render(<App />, app);



ReactDOM.render(<Navbar />, document.querySelector('#nav'));
ReactDOM.render(<LoadingSpinner />, document.querySelector('#loading'));
// ReactDOM.render(<WelcomeMessage /> , document.querySelector('#welcome-msg'));
