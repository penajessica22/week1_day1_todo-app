import React, {Component} from 'react'

class Todo extends Component {
    state = {
        count : 0,
        inputText: '',
        todo: [],
        isClicked: false,

    }
    increase = () => {
        this.setState({ count: this.state.count +1})
    }
    handleTextChange = (e) => {
this.setState({inputText: e.target.value})
    }
    submitTodo = () => {
        const currentTodo = this.state.todo
        currentTodo.push(this.state.inputText)
        console.log(currentTodo)
        this.setState({todo: currentTodo})
    }
    render(){
        return (
           <div>
                <h1>count:</h1>
                <h3>{this.state.count}</h3>
                <button onClick ={this.increase}>Increase Counter</button>
                <input type ="text" 
                onChange = {this.handleTextChange}
                value={this.state.inputText}/>
                 <button onClick ={this.submitTodo}>Add Todo</button>
                 <button onClick ={this.submitTodo}>Add Todo</button>
                 {
                     this.state.todo.map((todo, index) => {
                         return (
                             <p key = {index}>
                                 {todo}
                             </p>
                         );
                     })
                }
            </div>
        );
    }
}
export default Todo