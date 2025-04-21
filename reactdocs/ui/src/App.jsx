import Greetings from "./Greetings";
import { Greeting } from "./Greetings";
import List from "./List";
import People from "./People";
import Profile from "./Profile";
import Recipe from "./Recipe";

const person = {
  name: "mann",
  age: 22
}

export default function App() {
  return (
    // return only a single element
    <>
      <h1>Greetings</h1>
      <Greetings />
      <Greeting />
      <ul>
        {/* all opening tags should be closed */}
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
      </ul>
      <div style={
        {
          backgroundColor: 'black',
          color: 'beige'
        }
      }>
        <h3>Name: {person.name}</h3>
        <h6>Age: {person.age}</h6>
      </div>

      <Profile />

      <List />

      <People />

      <Recipe />
    </>
  )
}

// function Greeting() {
//   return <div> Hello World </div>
// }

// export default function App() {
//   return (
//     <div>
//       <h1>Greetings!</h1>
//       <Greeting />
//       <Greeting />
//       <Greeting />
//     </div>
//   )
// }