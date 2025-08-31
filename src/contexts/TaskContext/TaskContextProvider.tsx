import { useEffect, useReducer, useState } from 'react';
import { TaskContext } from './TaskContext';
import type { TaskStateModel } from '../../components/models/TaskStateModel';
import { initialTaskState } from './initialTaskState';
import { taskReducer } from './taskReducer';

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
