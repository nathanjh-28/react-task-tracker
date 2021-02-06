import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([    {
    id: 0,
    text: 'Doctors Appt',
    day: 'Feb 4th at 2:30pm',
    reminder: true,
    },
    {
    id: 1,
    text: 'Meeting at School',
    day: 'Feb 5th at 4:30pm',
    reminder: false,
    },
    {
    id: 2,
    text: 'Walk the Dog',
    day: 'Feb 6th at 10:30pm',
    reminder: true,
    },
    {
    id: 3,
    text: 'Food Shopping',
    day: 'Feb 8th at 11:30pm',
    reminder: false,
    }

])
  return (
    <div className="container">
      <Header />
      <Tasks tasks={ tasks } />

    </div>
  )
}

export default App;






// Class Based Components Example

// import React from 'react'
// class App extends React.Component {
//   render(){
//     return <h1>Hello from a class based component</h1>
//   }
// }
// export default App