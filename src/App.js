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
// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task)=> task.id !== id))
}

// Toggle Reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task)=>task.id === id ? { ...task,reminder: !task.reminder } : task))
}

  return (
    <div className="container">
      <Header />
      {tasks.length>0 ? <Tasks tasks={ tasks } onDelete={ deleteTask } onToggle={toggleReminder}/> : ('No Tasks to Show')}

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