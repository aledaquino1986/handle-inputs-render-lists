# Practice project: HANDLE INPUTS AND RENDER LISTS (The Odin Project)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Assignment

Our application will be made of two components, App and Overview. Your application should render an input field and a submit button. With the submit button, you can add the content from your input to a “tasks array” that is managed in state. (We will use class components for this example because we haven’t introduced hooks in this section yet). Finally, for each task in the tasks array, an HTML list element should be rendered.

### Learning Outcomes:

The purpose of this project is to practise React class and functional components, state management, rendering lists

### Optional Tasks:

### Easy:

Instead of displaying unordered list items, manage the amount of tasks in state and let each task display its number. Yes, you could also do that with a simple ordered list, but where’s the fun in that? Try using state.
Implement a delete button for each task. The delete button should remove the specific task from the state array. Don’t forget to never directly assign state. If you want you can use Font Awesome for the icon. Tip: You can remove each task by its id, but for that you have to save the task id together with the task title.

### Hard:

Implement an edit button for each task. When you press the edit button, this specific task should become changeable, and the edit button should change to a resubmit button.
