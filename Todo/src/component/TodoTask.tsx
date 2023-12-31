import { ITask } from "../Interfaces";
interface Props {
    task: ITask;
    deleteTask(taskIdToDelete: string): void;
    updateTask(taskIdToUpdate: string): void;

  
  }

const TodoTask = ({task,deleteTask,updateTask}:Props) => {
    return ( 
        <>
            <div className="task">
                
            
                <div className={`content flex justify-between gap-8 mb-4 rounded-md items-center p-[5px] sm:p-[10px] ${task.completed ? 'border border-gray-500' : 'border border-orange-300'}`}>
                    <p className={`max-w-100 overflow-hidden text-ellipsis ${task.completed ?'line-through':'no-underline'}`}>{task.taskName}</p>
                    <div className="flex items-center justify-between gap-2">
                        { task.completed ? <span onClick={() => {updateTask(task.id);}}
                        className="material-symbols-outlined  font-bold sm:py-3 sm:px-3 px-2 py-2  rounded-full bg-gradient-to-r from-purple-600 via-purple-400 to-blue-500 text-white hover:cursor-pointer hover:brightness-90">check_box</span>  : <span onClick={() => {updateTask(task.id);}} 
                        className="material-symbols-outlined  font-bold sm:py-3 sm:px-3 px-2 py-2 rounded-full bg-gradient-to-r from-orange-200 to-red-500 text-white hover:cursor-pointer hover:brightness-90" >check_box_outline_blank</span> }
                        <span onClick={() => {deleteTask(task.id);}} className="material-symbols-outlined font-bold sm:py-3 sm:px-3 px-2 py-2 rounded-full bg-gradient-to-r from-orange-200 to-red-500 text-white hover:cursor-pointer hover:brightness-90">delete</span>
                    </div>



                </div>

            </div>
        </>

     );
}

 
export default TodoTask;