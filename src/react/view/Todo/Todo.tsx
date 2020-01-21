import React, { Component, ChangeEvent } from "react";
import TodoModel, { ITodo } from "../../model/TodoModel";
import css from './Todo.css';

interface TodoProps {
    todo: TodoModel
    deleteTodo: (todo: ITodo) => void;
    modifyTodo: (todo: ITodo) => void;
}

export default class Todo extends Component<TodoProps> {
    constructor(props: TodoProps) {
        super(props);
    }
    onChangeIsDone = (e: ChangeEvent<HTMLInputElement>) => {
        const todo: ITodo = {
            ...this.props.todo
        };
        todo.isDone = e.target.checked;
        this.props.modifyTodo(todo);
    }
    onDeleteTodo = () => {
        this.props.deleteTodo(this.props.todo);
    }

    render() {
        const { id, isDone, content } = this.props.todo;
        return (
            <div className={css.todo}>
                <input className={css.input} type="checkbox" onChange={this.onChangeIsDone} checked={isDone} />
                <span className={css.content}>{content}</span>
                <button className={css.delete} onClick={this.onDeleteTodo}>delete</button>
            </div>
        )
    }
}