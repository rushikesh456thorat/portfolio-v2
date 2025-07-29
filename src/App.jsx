import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import NotFound from './pages/404'
import About from './pages/About'
import Blog from './pages/Blog'
import Projects from './pages/Projects'
import ProjectPage from './pages/ProjectPage.jsx'
import { useEffect, useState } from 'react'
import OfflinePage from './pages/Offline.jsx'

function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  

  useEffect(() => {
    const updateOnlineStatus = () => setIsOnline(navigator.onLine);
    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);
    return () => {
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
    };
  }, []);

  if (!isOnline) {
    return <OfflinePage />;
  }

  return (
    <>
       <div className='dark:bg-black font-sans overflow-hidden dark:text-white bg-white min-h-screen min-w-screen'>
        <Routes>
          <Route path='/' element={<HomePage/> }/>
          <Route path='/about' element={<About/> }/>
          <Route path='/blog' element={<Blog/> }/>
          <Route path='/project/:projectId' element={<ProjectPage/>}/>
           <Route path='/projects' element={<Projects/> }/>
          <Route path='*' element={<NotFound/>}/>
           
        </Routes>
        
       </div>
    </>
  )
}

export default App
