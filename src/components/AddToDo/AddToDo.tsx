import styles from './AddToDo.module.css';

<div className={styles.rowAddTask}>
  <input
    type='text'
    value={inputValue}
    onChange={handleInputChange}
    placeholder='Enter a new task'
  />
  <button onClick={handleAddTask}>Add Task</button>
</div>;
