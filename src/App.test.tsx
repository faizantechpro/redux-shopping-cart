import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import '@testing-library/jest-dom'
import App from './App'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import { Provider } from "react-redux";
import globaStore from "./redux/store/store";

const store = globaStore();

test('full app rendering/navigating', async () => {


  render(
    <Provider store={store}>
    <App />
  </Provider>
  )


})


