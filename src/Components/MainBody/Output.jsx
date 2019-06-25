import React, { Component } from 'react';

class Output extends Component { 
   constructor(props) {
      super(props);
      this.state = {

      };
   }

   componentDidMount() { 

   }

   // githubOutput = () => {
   //    for (title in sorted_list) {
   //       <h1>{{ result[title]['title'] }}</h1>
   //          <h2>Due date: {{ result[title]['due_date'] }}</h2>
   //  { { result[title]['description'] | safe } }
   //    }
   // }

   render() {
      const { githubTitle, githubDueDate } = this.state;
      return (
         <div>
            <h1>{ githubTitle }/</h1>
            <h2> { githubDueDate } </h2>
         </div>
      )
   }
}

export default Output;