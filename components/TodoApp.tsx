import React from 'react';
import { DataResponse } from '../data-provider';
import TodoInput from './TodoInput';
import TodoList from './TodoList';


interface TodoAppProps {
  title: string;
  appData: DataResponse;
}

export const TodoApp = ({title: string, appData:DataResponse}: TodoAppProps) => {



  return (
    <div className="container px-3 w-screen mx-auto">
      <div className="bg-white rounded shadow px-4 py-4">
        <div className="title font-bold text-lg">{title}</div>
        <TodoInput />
        <TodoList />
      </div>
    </div>
  );
};
