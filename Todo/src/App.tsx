import {FC,ChangeEvent,useState, useEffect} from 'react'
import {v4 as uuidv4} from 'uuid';
import './App.css'
import { ITask } from './Interfaces';
import TodoTask from './component/TodoTask';

const App:FC = () => {
  const [task, setTask] = useState<string>("");
  const [description,setdescription] = useState<string>("");
  const [completed, setcompleted] = useState<boolean>(false);
  const [taskList,settaskList] = useState<ITask[]>([]);
  const [formError, setFormError] = useState<string>("")


  useEffect(() => {
    // Retrieve tasks from local storage on initial render
   const tasksFromLocalStorage = localStorage.getItem('tasks');
   if (tasksFromLocalStorage) {
     const parsedTasks: ITask[] = JSON.parse(tasksFromLocalStorage);
     settaskList(parsedTasks);
    }
  }, []);
  
  useEffect(() => {
    if(taskList?.length) { // only store the state if products exists and it's length is greater than 0
      localStorage.setItem('tasks', JSON.stringify(taskList));
    }
  }, [taskList]);


  const handleChange = (event: ChangeEvent<HTMLInputElement>): void =>{

      setTask(event.target.value);

  };
  const handleChangeTextArea = (event: ChangeEvent<HTMLTextAreaElement>): void => {

      setdescription(event.target.value);
  };



  const addTask = ():void =>{
    if (task && description){
      const newTask = { taskName: task, description:description, completed:completed,id: uuidv4()};
      settaskList((prevTaskList) => [...prevTaskList, newTask]);
      
      setTask("");
      setcompleted(false);
      setdescription("");
      setFormError("")
      // Update tasks in local storage


    }else{
      setFormError("All fields required.")
    }

  }
  const deleteTask = (taskIdToDelete: string): void => {
    settaskList(taskList.filter((task) => {
        return task.id != taskIdToDelete;
      })
    );
    
  };
  const updateTask = (taskIdToUpdate: string,): void => {
    settaskList(taskList.map((task) => {
      if (task.id === taskIdToUpdate) {
        return { ...task, completed: !task.completed  }; 

      } else {
        return task; 
      }
    }));
  };




  return (
    <>
    <div className='min-h-screen text-white bg-gray-800 grid grid-cols-1 md:grid-cols-5 gap-8 p-[50px]'>
      <div className=' w-full h-full md:col-span-2 flex justify-center items-center '>
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

          <div className="flex justify-end ">
            <button className="bg-gradient-to-r from-purple-600 via-purple-400 to-blue-500 text-white px-4 py-2 font-bold rounded-md hover:opacity-80"
              onClick={addTask}>
              Add Task
            </button>
          </div>

        </div>






      </div>

      <div className=' w-full h-full md:col-span-3  p-[10px] sm:p-[50px] rounded-md border border-gray-500  '>
      
      {taskList.map((task:ITask, key:number) => {
          return <TodoTask key={key} task={task} deleteTask={deleteTask} updateTask={updateTask}/>;
        })}

      </div>

    </div>

      
    </>
  )
}

export default App
