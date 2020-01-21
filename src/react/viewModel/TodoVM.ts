import { observable, action, computed } from 'mobx';
import Todo from '../model/TodoModel';

export default class TodoVm {
    todos = observable<Todo>([]);
    @computed get todoLength() {
        return this.todos.filter(todo => !todo.isDone).length;
    }
    @action addTodo(content: string) {
        this.todos.push(new Todo(content));
    }
    @action modifyTodo(todo: Todo) {
        const index = this.todos.findIndex(el => el.id === todo.id);
        this.todos[index] = todo;
    }
    @action deleteTodo(todo: Todo) {
        console.log(todo)
        this.todos.remove(todo)
        console.log(this.todos)
    }
}
