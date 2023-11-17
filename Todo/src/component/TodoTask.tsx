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
            
                <div className={`content flex justify-between gap-8 mb-4 rounded-md items-center p-[10px] ${task.completed ? 'border border-gray-500' : 'border border-orange-300'}`}>

                    <p className="max-w-100 overflow-hidden text-ellipsis ">{task.taskName}</p>
                    <div className="flex justify-between gap-2">
                        { task.completed ? <span onClick={() => {updateTask(task.taskName);}}
                        className="material-symbols-outlined  font-bold py-3 px-3 rounded-full bg-gradient-to-r from-purple-600 via-purple-400 to-blue-500 text-white hover:cursor-pointer hover:brightness-90">check_box</span>  : <span onClick={() => {updateTask(task.taskName);}} 
                        className="material-symbols-outlined  font-bold py-3 px-3 rounded-full bg-gradient-to-r from-orange-200 to-red-500 text-white hover:cursor-pointer hover:brightness-90" >check_box_outline_blank</span> }
                        <span onClick={() => {deleteTask(task.taskName);}} className="material-symbols-outlined font-bold py-3 px-3 rounded-full bg-gradient-to-r from-orange-200 to-red-500 text-white hover:cursor-pointer hover:brightness-90">delete</span>
                    </div>



                </div>

            </div>
        </>

     );
}

 
export default TodoTask;