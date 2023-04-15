
import './App.css';
import SideBar from './Components/SideBar';
import AllRoutes from './Pages/AllRoutes';
import Dashboard from './Pages/Charts_and_Maps';
import {useLocation} from "react-router-dom"

function App() {

  const location = useLocation();
  const currentRoute = location.pathname;
  console.log(currentRoute)
  return (
    <div className="App">

      <h1 className='z-50 w-full fixed shadow-sm shadow-slate-700 top-0 text-2xl text-yellow-100 bg-indigo-300 font-bold p-4'>
    {
      currentRoute=="/" ? ' Contact Management App' :"Charts and Maps"
    }
     

        </h1>
      <div className='flex w-full '>
          <div className='sticky  top-0 h-screen'>
          <SideBar />
        </div>
        <div className='w-full'>

      <AllRoutes/>
        </div>
        {/* <Dashboard /> */}
      </div>
      
      
       
    




    </div>
  );
}

export default App;
