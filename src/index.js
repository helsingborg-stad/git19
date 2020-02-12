import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import 'typeface-roboto';
import './index.css';
import { MemoryRouter } from 'react-router-dom';
import smoothscroll from 'smoothscroll-polyfill';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { TasksProvider } from './context/tasks-context';
import { UserProvider } from './context/user-context';

smoothscroll.polyfill();

smoothscroll.polyfill();

ReactDOM.render(
  <MemoryRouter>
    <UserProvider>
      <TasksProvider>
        <App />
      </TasksProvider>
    </UserProvider>
  </MemoryRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
