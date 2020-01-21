import React, { Component, ChangeEvent } from "react";
import { inject, observer } from "mobx-react";
import TodoVM from '../../viewModel/TodoVM';
import { ITodo } from '../../model/TodoModel';
import Todo from './Todo';

interface TodoPageProps {
    todoVm?: TodoVM
}
interface TodoState {
    todoContent: string;
}

@inject("todoVm")
@observer
export default class TodoPage extends Component<TodoPageProps, TodoState> {
    state = {
        todoContent: ''
    };

    addTodo = () => {
        this.props.todoVm?.addTodo(this.state.todoContent);
        this.setState({ todoContent: '' })
    }
    deleteTodo = (todo: ITodo) => {
        this.props.todoVm?.deleteTodo(todo);
    }
    modifyTodo = (todo: ITodo) => {
        this.props.todoVm?.modifyTodo(todo);
    }
    modifyTodoContent = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            todoContent: e.target.value
        });
    }
    render() {
        const todoList = this.props.todoVm?.todos.map(todo => <Todo key={todo.id} deleteTodo={this.deleteTodo} modifyTodo={this.modifyTodo} todo={todo} />)
        return (
            <div>
                <div>
                    <input type="text" value={this.state.todoContent} onChange={this.modifyTodoContent} />
                    <button onClick={this.addTodo}>추가하기</button>
                    {todoList}
                </div>
                <div>
                    남은 todo의 개수: {this.props.todoVm?.todoLength}
                </div>
            </div>
        )
    }
}

