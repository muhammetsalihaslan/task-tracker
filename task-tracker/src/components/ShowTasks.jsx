import {TiTrash} from "react-icons/ti";


const ShowTasks = () => {
  return ( 
    <div className="container">
      <div key={1} className="btn-tasks" >
        <div className="task-area">
          <h3>yapılacak listesi</h3>
          <p>05.01.2022</p>
        </div>
        <div className="btn-delete">
          <TiTrash size={35}/>
        </div>
      </div>

    </div>
  )
} 

export default ShowTasks;