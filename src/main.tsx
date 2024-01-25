import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/router'
import { TankStackProvider } from './providers/TankStackProvider'

import './index.css';




ReactDOM.createRoot(document.getElementById('root')!).render(
  //<React.StrictMode>
    <TankStackProvider>
      <RouterProvider router={ router }/>
    </TankStackProvider>
  //</React.StrictMode>
)
