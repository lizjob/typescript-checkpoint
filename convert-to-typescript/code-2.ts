// Convert the code below to Typescript.
// You are asked to give description on the steps you will do to make the changes ( create a well-commented code)
// 
// import React, { Component } from 'react'; 
// class Counter extends Component { 
//   state = {
//      count: 0
//    }; increment = () => {
//    this.setState({ count: this.state.count + 1 }); 
//   }; 
//   render() { 
//     return (
//       <div> 
//         <p>Count: {this.state.count}</p> 
//         <button onClick={this.increment}>Increment</button> 
//       </div> );
//    }
//  } 
// export default Counter;

// Step 1: Import React and Component from React
import React, { Component } from 'react';

// Step 2: Define interfaces for props and state
// Props interface (empty in this case, but defined for future extensibility)
interface CounterProps {
  // Can add props here if needed in the future
}

// State interface - defines the shape of the component's state
interface CounterState {
  count: number; // 'count' must be a number
}

// Step 3: Convert class component with TypeScript generics
// Component<PropsType, StateType> provides type safety for props and state
class Counter extends Component<CounterProps, CounterState> {
  
  // Step 4: Type the state property
  // Initialize state with proper typing
  state: CounterState = {
    count: 0
  };

  // Step 5: Type the method properly
  // Use arrow function to maintain correct 'this' context
  increment = (): void => { // ': void' indicates this method returns nothing
    this.setState({ count: this.state.count + 1 }); 
  }; 

  // Step 6: Type the render method return (implicitly handled by React types)
  render() { 
    return ( 
      <div> 
        <p>Count: {this.state.count}</p> 
        <button onClick={this.increment}>Increment</button> 
      </div> 
    );
  }
} 

export default Counter;
