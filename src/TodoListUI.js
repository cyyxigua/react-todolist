import React from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';

const TodoListUI = (props) => {
  return ( 
    <div style={{margin: '10px'}}>
      <Input 
        value={props.inputValue} 
        placeholder="todo info" 
        style={{width: '300px', marginRight: '10px'}} 
        onChange={props.handleInputChange}
      />
      <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
      <List
        style={{width: '500px', marginTop: '10px'}}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item onClick={(index) => {props.handleItemDelete(index)}}>
            {item}
          </List.Item>
        )}
      />
     </div>
  );
}
 
export default TodoListUI;