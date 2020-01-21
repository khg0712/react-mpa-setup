export interface ITodo {
    isDone: boolean;
    content: string;
    id: number;
}

export default class Todo implements ITodo {
    static todoId = 0;
    isDone: boolean;
    content: string;
    id: number;

    constructor(content: string) {
        this.isDone = false;
        this.content = content || '';
        this.id = Todo.todoId++;
    }
}