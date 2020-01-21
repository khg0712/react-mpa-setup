import React, { Component } from "react";
import { Provider } from "mobx-react";
import TodoPage from "./TodoPage";
import TodoVM from "../../viewModel/TodoVM";

class index extends Component {
    private todoVm: TodoVM = new TodoVM();
    render() {
        return (
            <Provider todoVm={this.todoVm}>
                <TodoPage />
            </Provider>
        );
    }
}

export default index;