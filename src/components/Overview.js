import React from "react";

const Overview = ({
  tasks,
  onHandleDelete,
  onHandleEditInput,
  onEditHandler,
  onChangeEditHandler,
  inputValue
}) => {
  return (
    <>
      <h2>Listas de tareas</h2>
      <ul>
        {tasks.map(({ task, numberOfTasks, isEdit }, index) => {
          {
            return (
              numberOfTasks > 0 && (
                <li key={task + index}>
                  {isEdit ? (
                    <form onSubmit={e => onEditHandler(e, index)}>
                      <input
                        type="text"
                        placeholder="Change your task"
                        onChange={onChangeEditHandler}
                        value={inputValue}
                      />
                      <button type="Submit">Submit change</button>
                    </form>
                  ) : (
                    `${numberOfTasks} ${task}`
                  )}
                  <button onClick={() => onHandleDelete(index)}>Delete</button>

                  {!isEdit && (
                    <button onClick={() => onHandleEditInput(index)}>
                      Edit
                    </button>
                  )}
                </li>
              )
            );
          }
        })}
      </ul>
    </>
  );
};

export default Overview;
