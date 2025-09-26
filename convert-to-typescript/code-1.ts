// Convert the code below to Typescript.
// You are asked to give description on the steps you will do to make the changes ( create a well-commented code)
// 
// CODE 01:
//   import React from 'react'; 
// 
//   const Greeting = ({ name }) => { 
//     return <div>Hello, {name}!</div>;
//   };
// 
//   export default Greeting;

 

 // Step 1: Import React
import React from 'react';

// Step 2: Define an interface for the component props
// This ensures type safety for the props passed to the component
interface GreetingProps {
  name: string; // 'name' prop must be a string
}

// Step 3: Convert to TypeScript functional component
// Use React.FC<GreetingProps> to type the component and its props
const Greeting: React.FC<GreetingProps> = ({ name }) => { 
  return <div>Hello, {name}!</div>;
};

export default Greeting;
