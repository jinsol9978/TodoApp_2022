import React from "react";
import {MdRemoveCircleOutline,MdCheckBoxOutlineBlank}
import classNames from 'classnames';//조건부 스타일링
import '../style/TodoListItem.css';

function TodoListItem({todo,onRemove,ontoggle}){
    //console.log(props);
    const {id,text,checked}=todo;
    return(
        <div className="TodoListItem">
            <div className={classNames('Checkbox',{checked})}
            onClick={()=>ontoggle(id)}>
            {checked ?<MdCheckBox /> : <MdCheckBoxOutlineBlank />}
            <div className='text'>{text}</div>
            </div>
            <div className='remove' onClick={()=>onRemove(id)}><MdRemoveCircleOutline /></div>
        </div>
    )
}
export default TodoListItem