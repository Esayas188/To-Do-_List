import {FC,ChangeEvent,useState} from 'react'
import './App.css'
import { ITask } from './Interfaces';
import TodoTask from './component/TodoTask';

const App:FC = () => {
  const [task, setTask] = useState<string>("");
  const [description,setdescription] = useState<string>("");
  const [completed, setcompleted] = useState<boolean>(false);
  const [taskList,settaskList] = useState<ITask[]>([]);
  const [formError, setFormError] = useState<string>("")


  const handleChange = (event: ChangeEvent<HTMLInputElement>): void =>{

      setTask(event.target.value);

  };
  const handleChangeTextArea = (event: ChangeEvent<HTMLTextAreaElement>): void => {

      setdescription(event.target.value);
  };

  const addTask = ():void =>{
    if (task && description){
      const newTask = { taskName: task, description:description, completed:completed};
      console.log('this is completed:',completed)
      settaskList([...taskList,newTask]);
      setTask("");
      setcompleted(false);
      setdescription("");
      setFormError("")

    }else{
      setFormError("All fields required.")
    }

  }
  const deleteTask = (taskNameToDelete: string): void => {
    settaskList(taskList.filter((task) => {
        return task.taskName != taskNameToDelete;
      })
    );
  };
  const updateTask = (taskNameToUpdate: string,): void => {
    settaskList(taskList.map((task) => {
      if (task.taskName === taskNameToUpdate) {
        return { ...task, completed: !task.completed  }; 
        // Update completed status
      } else {
        return task; // Keep other tasks unchanged
      }
    }));
  };




  return (
    <>
    <div className='min-h-screen grid grid-cols-5 '>
      <div className='bg-gray-800 w-full h-full col-span-2'>
        <div className="max-w-[450px] border border-gray-500  p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Create new tasks</h2>
          {formError && <p className='text-red-400 text-sm'>{formError}</p>}


          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300" >Name</label>
            <input
              className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
              type="text"
              placeholder='Task Name'
              name='task'
              value={task}
              onChange={handleChange}
              />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300"  htmlFor="email">Description</label>
            <textarea
              className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white" rows={3}
              name="description"
              placeholder='description'
              value={description}
              onChange={handleChangeTextArea}
              
            ></textarea>
          </div>
          <div className="">
            <label className="text-white flex gap-2 items-center"> 
              <input className="dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-8 h-8" type="checkbox"
              name='completed'
              checked={completed}
              onChange={() => setcompleted((prev) => !prev)}
              />
              Completed</label>
          </div>

          <div className="flex justify-end">
            <button className="bg-gradient-to-r from-purple-600 via-purple-400 to-blue-500 text-white px-4 py-2 font-bold rounded-md hover:opacity-80"
              onClick={addTask}>
              Submit
            </button>
          </div>

        </div>






      </div>

      <div className='bg-yellow-200 w-full h-full col-span-3'>
      {taskList.map((task:ITask, key:number) => {
          return <TodoTask key={key} task={task} deleteTask={deleteTask} updateTask={updateTask}/>;
        })}

      </div>

    </div>

      
    </>
  )
}

export default App
