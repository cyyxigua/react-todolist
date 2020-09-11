import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';

class TodoListUI extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div style={{margin: '10px'}}>
        <Input 
          value={this.props.inputValue} 
          placeholder="todo info" 
          style={{width: '300px', marginRight: '10px'}} 
          onChange={this.props.handleInputChange}
        />
        <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
        <List
          style={{width: '500px', marginTop: '10px'}}
          bordered
          dataSource={this.props.list}
          renderItem={(item, index) => (
            <List.Item onClick={(index) => {this.props.handleItemDelete(index)}}>
              {item}
            </List.Item>
          )}
        />
       </div>
    );
  }
}
 
export default TodoListUI;