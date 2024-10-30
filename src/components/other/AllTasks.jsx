import { useContext } from "react"
import { AuthContext } from "../../context/AuthProvider"


function AllTasks() {

    const [userData, setuserData] = useContext(AuthContext)
    

  return (
    <div className="bg-[#1c1c1c] p-5 mt-5 rounded ">
        <div className=" mb-2 py-2 px-4 flex justify-between rounded ">
            <h2 className = "w-1/5 text-lg font-medium">
            Employee
            </h2>

            <h3 className = "w-1/5 text-lg font-medium">
            New Task
            </h3>

            <h5 className = "w-1/5 text-lg font-medium">
            Active Task
            </h5>

            <h5 className = "w-1/5 text-lg font-medium">
            Completed
            </h5>

            <h5 className = "w-1/5 text-lg font-medium">
            Failed
            </h5>
            
            </div>

        <div className="">
        {userData.map(function(elem, idx){

            return <div key={idx} className="bg-black-200 mb-2 py-2 px-4 flex justify-between rounded border">

            <h2 className = "text-lg font-medium w-1/5 ">
            {elem.firstname}
            </h2>

            <h3 className = "text-lg font-medium w-1/5 text-blue-400">
            {elem.taskNumbers.newTask}
            </h3>

            <h5 className = "text-lg font-medium w-1/5 text-yellow-400">
            {elem.taskNumbers.active}
            </h5>

            <h5 className = "text-lg font-medium w-1/5 text-green-600">
            {elem.taskNumbers.completed}
            </h5>

            <h5 className = "text-lg font-medium w-1/5 text-red-400">
            {elem.taskNumbers.failed}
            </h5>

            </div>

        })}

        </div>

    </div>
  )
}

export default AllTasks