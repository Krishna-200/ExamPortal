import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Content from './Content';
import SignIn from './components/SignIn';
import Assesment from './components/Assesment'
import Booking from './components/Booking'
import UserPage from './components/UserPage';
import UpComingCertifications from './components/UpcomingCertifications';
import User from './components/User';
import Practice_page from './components/Practice_page';
import User_assesments from './components/User_assesments';
import Question from './components/Question';
import Studentdetails from './components/Studentdetails';
import Examresult from './components/Examresult';
import AdminPortal from './components/adminPortal';
import GetAllstudents from './components/GetAllstudents';
import AdminDataDashboard from './components/AdminDataDashboard';

function App() {
  return (

    
    <BrowserRouter>

<div className="App">
      <Routes>
        <Route path='/' element={<Content/> } />

        <Route path='/login' element={<Login/>}/>
        <Route path='/signIn' element={ <SignIn/>} />
        <Route path='/user/certifications' element={ <UserPage/>} />
        <Route path='/user/Question' element={ <Question/>} />
        <Route path='/user' element={ <User/>} />
        <Route path='/user/Assesment' element={ <Assesment/>} />
        <Route path='/Booking' element={<Booking/>}/>
        <Route path='/user/UpComingCertifications' element={ <UpComingCertifications />} />

        <Route path='/admin/profile' element={<AdminPortal/>} />
        <Route path='/admin/dashboard' element={<AdminDataDashboard/>} />
        <Route path='/admin/studentDetails' element={<GetAllstudents/>} />

        <Route path='/studentDetails' element={<Studentdetails/>} />
        <Route path='/examResult' element={<Examresult/>} />
      </Routes>
     

    </div>
    </BrowserRouter>
  );
}

export default App;
