import React from 'react';
import {useState} from 'react';
import './App.css';
//axios
const Content = () => {


    //axois libaray to use below 
    //post = data sending;
    //get = data receiving;
    //put = data updating;
    //delete = data deleting; 
    const [name, setName] = useState('');
    //ToDo list usestate
    const [items, setItems] = useState([
        {
            id:1,checked:false,item:'playing'
        },
        {
            id:2,checked:true,item:'reading'
        },
        {
            id:3,checked:false,item:'coding'
        },
        {
            id:4,checked:true,item:'watching'
        }
    ]);

    const handlecheck = (id) => { /// id = 3
    const newItems = items.map((item)=> item.id === id ? {...item, checked: !item.checked} : item);
 // newItem = item = {id:1,checked:false,item:'playing'} //item = {id:2,checked:true,item:'reading'} //item = {id:3,item:'coding',checked=!false} //item = {id:4,checked:true,item:'watching'}
//newItem = [{id:1,checked:false,item:'playing'},{id:2,checked:true,item:'reading'},item = {id:3,item:'coding',checked=!false},{id:4,checked:true,item:'watching'}]
        setItems(newItems);
    }

    const handledelete = (id) => { 
        //delete the item with id                      3 !=3 
        const newItems = items.filter((item) => item.id !== id); // 
        setItems(newItems);

    }

    const handleAdd = () => {
        const newItems=[...items,{id:items.length+1,checked:false,item:name}];
        setItems(newItems);
    }
  return (
    <>
    <div className="content">
  
        <div>{items.map ((item) => (  ///map is used to iterate the array 1. item={id:1, name:'item1', price:100} 2. item={id:2, name:'item2', price:200} 3. item={id:3, name:'item3', price:300}
            <div key={item.id}>
                <li>
                <input type="checkbox" checked={item.checked} onChange={() => handlecheck(item.id)}/>
                <lable>{item.item}</lable>
                <button onClick={()=>handledelete(item.id)}> Delete </button>
                </li>
            </div>
        ) )}</div>
        <div>
            <input type="text" placeholder="Add list" name="newitem" value={name} onChange={(e) => setName(e.target.value)}/>
            <button onClick={handleAdd}>Add list</button>
        </div>
    </div>
    </>
  );
}

export default Content;
