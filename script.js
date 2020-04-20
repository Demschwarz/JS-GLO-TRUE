'use strict';

const todoControl = document.querySelector('.todo-control');
const headerInput = document.querySelector('.header-input');
const todoList = document.querySelector('.todo-list');
const todoCompleted = document.querySelector('.todo-completed');

const todoData = [
    {
        value: 'Сварить кофе',
        completed: false
    },
    {
        value: 'Помыть посуду',
        completed: true
    }
];


const render = function(){
    todoData.forEach(function(item) {
        const li = document.createElement('li');
        li.classList.add('todo-item');
        li.inerHTML = '<span class="text-todo">' + item.value + '</span>' + 
        '<div class="todo-buttons">' + 
            '<button class="todo-remove"></button>' + 
            '<button class="todo-complete"></button>' + 
        '</div>';
        todoList.append(li);
    });
};

todoControl.addEventListener('submit', function(event) {
    event.preventDefault();
    const newTodo = {
        value: headerInput.value,
        completed: false
    }
    todoData.push(newTodo);
    render();
})