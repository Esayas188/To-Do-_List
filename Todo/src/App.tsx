import {FC,ChangeEvent,useState} from 'react'
import './App.css'
import { ITask } from './interfaces';

const App:FC = () => {
  const [task, setTask] = useState<string>("");
  const [description,setdescription] = useState<string>("");
  const [completed, setcompleted] = useState<string>("");
  const [taskList,settaskList] = useState<ITask[]>([]);


  const handleChange = (event: ChangeEvent<HTMLInputElement>): void =>{
    if(event.target.name === "task"){
      setTask(event.target.value);
    }else{
      setcompleted(event.target.value);
    }

  };
  const handleChangeTextArea = (event: ChangeEvent<HTMLTextAreaElement>): void => {

      setdescription(event.target.value);
  };

  const addTask = ():void =>{
    const newTask = { taskName: task, description:description, completed:completed};
    settaskList([...taskList,newTask])
  }




  return (
    <>
    <div className='min-h-screen grid grid-cols-5 '>
      <div className='bg-gray-800 w-full h-full col-span-2'>
        <div className="max-w-[450px] border border-gray-500  p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Create new tasks</h2>


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
              value={completed}
              onChange={handleChange}
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

      </div>

    </div>

      
    </>
  )
}

export default App
