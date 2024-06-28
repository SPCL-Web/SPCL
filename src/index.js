import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import toast, { Toaster } from 'react-hot-toast';

import { AuthProvider } from "./context/auth";
import  store from './redux/store'
import {Provider} from  'react-redux'

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
     <AuthProvider>

    <Provider store={store}>

     <Toaster />
    <App />
    </Provider>
   
    </AuthProvider>
  </React.StrictMode>
)
