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


// function SelectionForm() { 
//   // if (user === "logged-in") {
//     return (
//       <div className="api-actions">
//         <form id="form" action="submit" method="POST" name="host">

//           <select onChange="setVal(this)" className="btn btn-secondary btn-lg btn-satel" name="host" id="host">
//             <option disabled selected value="none">  Select</option>
//             <option value="github"> Github </option>
//             <option value="jira"> Jira </option>
//           </select>

//           <input id="repo" className="inputForm" type="text" name="repo" />
//           <input id="project" className="inputForm" type="text" name="project" />

//           <button id="btn-private" className="btn btn-satel"> Submit</button>

//           <button id="btn-clear" onclick="setVal(this)" value="none" className="btn btn-secondary btn-satel"> Clear </button>
//         </form>
//       </div>
//     )
//   // } else { 
//   //   return (
//   //     <div className="api-actions"></div>
//   //   )
//   // }
// }



// RENDERING AREA //

ReactDOM.render(<App />, app);

