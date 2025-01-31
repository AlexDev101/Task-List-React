import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
// import { TaskProviderWrapper } from './context/task.context.jsx'
import { RecoilRoot } from 'recoil';

createRoot(document.getElementById('root')).render(

    <BrowserRouter>
      {/* <TaskProviderWrapper> */} {/* Con React Context */}
        <RecoilRoot> {/* Con Recoil */}
          <App />
        </RecoilRoot>
      {/* </TaskProviderWrapper> */} {/* Con React Context */}
    </BrowserRouter>

)
