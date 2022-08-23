import React from "react";

const tasks = [
    {
        task: "Escovar os dentes",
        checked: false,
    },
    {
        task: "Tomar o café",
        checked: false,
    },
    {
        task: "Tomar banho",
        checked: false,
    },
    {
        task: "Ler um livro",
        checked: false,
    },
    {
        task: "Estudar ReactJS",
        checked: false,
    },
    {
        task: "Continuar estudando ReactJS",
        checked: false,
    },
];

type TitleList = {
    title: string
  }

type ToDoListState = {
    stateTasks: {
        task: string, 
        checked: boolean } [],
        valueInput: string,
}

export class ToDoList extends React.Component <TitleList, ToDoListState> {
    state:ToDoListState = {
        stateTasks: [],
        valueInput: ''
    }
    
addTask = () => {
    this.setState(
        {stateTasks: [
            ...this.state.stateTasks, {
                task: this.state.valueInput,
                checked: false,
            }
        ], valueInput: ''}
    )
}

captureInput = (event: React.FormEvent<HTMLInputElement>) => [
    this.setState(
        {valueInput: event.currentTarget.value}
    )
]

    render() { 
        return(
            <>
                <div>
                    <label htmlFor="newTask">Nova tarefa</label>
                    <br />
                    <input type="newTask" value={this.state.valueInput} onChange={this.captureInput} />
                    <br />
                    <button onClick={this.addTask}>Criar nova tarefa</button>
                    <br />
                </div>
                <p>
                    {this.state.valueInput}
                </p>
                <div>
                    {this.state.stateTasks.map((item) => (
                        <div>
                            {item.task}
                        </div>
                    ))}
                </div>
            </>
        )
    }
 }