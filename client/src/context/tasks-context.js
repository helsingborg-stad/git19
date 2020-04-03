import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import StorageService, { COMPLETED_FORMS_KEY } from '../services/StorageService';

const TasksContext = React.createContext();

export const TasksConsumer = TasksContext.Consumer;

export class TasksProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
    };
  }

  componentDidMount = () => {
    this.getStoredTasks();
  };

  getStoredTasks = async () => {
    const storedTasks = await StorageService.getData(COMPLETED_FORMS_KEY);
    try {
      if (storedTasks) {
        this.setState({ tasks: storedTasks });
      }
    } catch (error) {
      console.error('Could not load tasks form StorageService', error);
    }
  };

  addTask = task => {
    StorageService.putData(COMPLETED_FORMS_KEY, task);
    this.setState(prevState => {
      const { tasks } = prevState;
      const currentTasks = tasks || [];
      const newTasksState = { tasks: [...currentTasks, task] };
      return newTasksState;
    });
  };

  getTask = taskId => {
    const { tasks } = this.state;
    const task = tasks.find(t => t.id === taskId);
    return task;
  };

  render() {
    const { tasks } = this.state;
    const { children } = this.props;
    return (
      <TasksContext.Provider value={{ tasks, addTask: this.addTask }}>
        {children}
      </TasksContext.Provider>
    );
  }
}

TasksProvider.propTypes = {
  children: PropTypes.node,
};

export default TasksContext;
