import { ITask } from "../Interfaces";
interface Props {
    task: ITask;
    deleteTask(taskNameToDelete: string): void;
    updateTask(taskNameToUpdate: string): void;

  
  }

const TodoTask = ({task,deleteTask,updateTask}:Props) => {
    return ( 
        <>
            <div className="task">
                <div className="content">
                    
                    <span>{task.taskName}</span>
                    <span>{task.description}</span>
                    <button onClick={() => {deleteTask(task.taskName);}}>Delete</button>
                    { task.completed ? <button onClick={() => {updateTask(task.taskName);}}>Incomplete</button> : <button onClick={() => {updateTask(task.taskName);}}>Completed</button> }
                    
                    


                </div>

            </div>
        </>

     );
}

 
export default TodoTask;