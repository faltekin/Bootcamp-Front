import React, { useState } from "react";

const TodoHead = ({ addTodo, todos, setTodos }) => {
    
    const [newTodo, setNewTodo] = useState("");       // input olarak alacağımız yeni todo 
    const [checkAll, setCheckAll] = useState(false);
    
    const handleInputChange = (event) => {            
        setNewTodo(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newTodo.trim()) {       //  newTodo boş ulup olmadığının kontrolünü yapar
          addTodo(newTodo);
          setNewTodo("");
        }
    };

    const handleToggleAll = () => {
        const updatedTodos = todos.map((todo) => ({
          ...todo,
          done: !checkAll,
        }));
        setTodos(updatedTodos);     // güncellenmiş ( checkbox ile seçilmiş todo listesi )
        setCheckAll(!checkAll);
      };

    return (
        <div>
          <form onSubmit={handleSubmit}>
            <input
              className="new-todo"
              placeholder="What needs to be done?"
              autoFocus
              value={newTodo}
              onChange={handleInputChange}
            />
          </form>
          {todos.length > 0 && (      // listede en az bir görev olduğunda checkbox'ın gösterilmesini sağlar.
            <div className="round">
              <input
                id="checkbox"
                type="checkbox"
                checked={checkAll}
                onChange={handleToggleAll}
              />
              <label htmlFor="checkbox"></label>
            </div>
          )}
        </div>
      );

};

export default TodoHead;
