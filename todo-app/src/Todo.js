import React, {useState} from 'react';
import './App.css';

function Todo() {
const [task, setTask] = useState('');
const [list, setList] = useState([]);

const onSetTask = (e) => {
    setTask(e.target.value);
}
const addTask = () => {
   
    if(task !== ''){
        const newTask = {
            id: Math.floor(Math.random() * 1000),
            value: task,
            isCompleted: false,
        }
        setList([...list,newTask]);
    }
    
}
const deleteTask = (e, id) =>{
    e.preventDefault();
    setList(list.filter((t) => t.id !== id))
}


const onIsCompleted = (e, id) =>{
    e.preventDefault();
    const element = list.findIndex((item) => item.id === id);
    const newList = [...list];
    newList[element] = {
        ...newList[element],
        isCompleted: true,
    };
    setList(newList);
}

    return (
    
    <div>
    <h1> PLAN YOUR DAY </h1>
    <input type="text"
    placeholder='Add item'
    value={task} 
    onChange={(e) =>onSetTask(e)}

    />
    
    <button onClick={addTask}> Add item </button>
    <br />
    { list !==[] ? (
        <ol>
            {list.map((item) =>(
                
                <li className={item.isCompleted === false ? 'none': 'completed'}>{item.value}
                <button className='done' onClick={(e) => onIsCompleted(e, item.id)}> Completed</button>
                <button className='deleteItem' onClick={(e)=> deleteTask(e, item.id)}> Delete</button>
                
                
                </li> 
            
            ))}
        </ol>
    ): null}
    
   
    </div>
   
    )
}

export default Todo;
