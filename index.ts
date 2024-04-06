#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"

console.log(chalk.underline.bold.bgYellow("WELCOME TO TODOS APP"))

let todos:any = []

let condition:boolean = true;

while(condition)
{

let todoOperation:any = await inquirer.prompt(
    [
        {
            name: "operation",
            type: "list",
            message: (chalk.red("Please select operation to do: ")),
            choices: ["Add", "Delete", "Edit", "View", "Exit"]
        }
    ]
)

// Add Task
if (todoOperation.operation === "Add")
{
    let addTask:any = await inquirer.prompt(
        [
            {
                name: "addItem",
                type: "input",
                message: (chalk.green("please enter item to add in your todos? "))
            },
            {
                name: "mainMenu",
                type: "confirm",
                message: (chalk.blue("please enter Y to main menu or N to exit ")),
                default: "true"
            }
        ]
    );
    todos.push(addTask.addItem);
    console.log("Added Successfuly");
    console.log(todos)
    condition = addTask.mainMenu;
}

// Delete Task
else if (todoOperation.operation === "Delete")
{
    let deleteTask:any = await inquirer.prompt(
        [
            {
                name: "deleteItem",
                type: "input",
                message: (chalk.magenta(`you have ${todos.length} items in your todos: press enter to delete first item`))
            },
            {
                name: "mainMenu",
                type: "confirm",
                message: (chalk.cyan("please enter item to add in your todos? ")),
                default: "true"
            }
        ]
    );
    todos.splice(deleteTask.deleteItem,1);
    console.log("Deleted Successfuly");
    console.log(todos)
    condition = deleteTask.mainMenu;
    } 

    //Edit Task
    else if (todoOperation.operation === "Edit")
    {
        let editTask:any = await inquirer.prompt(
            [
                {
                    name: "editItem",
                    type: "input",
                    message: (chalk.yellowBright(`you have ${todos.length} items in your todos, please enter item number to edit`))
                },
                {
                    name: "replaceItem",
                    type: "input",
                    message: (chalk.redBright("please enter item to update: "))
                },
                {
                    name: "mainMenu",
                    type: "confirm",
                    message: (chalk.grey("please enter item to edit in your todos? ")),
                    default: "true"
                }
            ]
        );
      todos[editTask.editItem-1]=editTask.replaceItem
      console.log("Edited Successfuly");
    console.log(todos)
    condition = editTask.mainMenu;
        }

    //view Task
else if (todoOperation.operation === "View"){
    console.log(chalk.bgGreen("Here is your Todos"))
    console.log(todos);
}

// Exit Task
else if(condition=false){
    console.log("Exit");
}
else{
    console.log(chalk.bgMagenta("Its time to say Good Bye"));
}
}
