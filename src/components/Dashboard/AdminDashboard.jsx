
import AllTasks from '../other/AllTasks'
import CreateTask from '../other/CreateTask'
import Header from '../other/Header'

function AdminDashboard(props) {
  return (
    <div className='h-screen w-full p-7'>
        <Header changeUser = {props.changeUser} />
        <CreateTask />
        <AllTasks />

    </div>
  )
}

export default AdminDashboard