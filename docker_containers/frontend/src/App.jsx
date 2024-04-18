import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'
import JokeHomePage from './pages/JokeHomePage'
import SubmitJokePage from './pages/SubmitJokePage'
import ApproveJokePage from './pages/ApproveJoke'
import AboutPage from './pages/AboutPage'
import './App.css'
import MainLayout from './layouts/MainLayout'

const App = () => {
  // //get random joke
  // const getJoke = async () => {
  //   const 
  // }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<JokeHomePage />} />
        <Route path='/submit' element={<SubmitJokePage />} />
        <Route path='/approve' element={<ApproveJokePage />} />
        <Route path='/about' element={<AboutPage />} />
      </Route>
    )
  )
  return <RouterProvider router={router} />
}
export default App
