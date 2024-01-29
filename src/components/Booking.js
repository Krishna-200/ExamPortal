import '../App.css';
import Booking_exam from './Booking_exam';
import data1 from './Booking.json'
import UserNav from './UserNav'
import { Link } from 'react-router-dom';
// import data from './Assesment_desc.json';
function Booking() {

  return (
    <div>
      <UserNav/>
      <div id='Booking-page'>
      <div id="main-txt">
        {/* <h4>BOOK YOUR SLOT</h4> */}
      </div>
      {/* <div id='Booking-exam'> */}
        <Booking_exam image={data1[0].image} title1={data1[0].title1} title2={data1[0].title2} desc1={data1[0].desc1} desc2={data1[0].desc2} desc3={data1[0].desc3} desc4={data1[0].desc4} desc5={data1[0].desc5}/>
        {/* <Booking_exam image={data1[1].image} title1={data1[1].title1} title2={data1[1].title2} desc1={data1[1].desc1} desc2={data1[1].desc2} desc3={data1[1].desc3} desc4={data1[1].desc4} desc5={data1[1].desc5}/> */}
        {/* </div> */}
        <div id='instructions' class="exam-desc">
          <h3>Instructions</h3>
          <h2>Eligibility: Candidates must meet the eligibility criteria for the exam. This can include educational qualifications, work experience, and other relevant criteria.</ h2>
          <h2>Exam Format: The exam will be conducted online and may include multiple-choice questions, fill-in-the-blanks, essays, or other formats. The exam format and duration may vary based on the certification.</h2>
          <h2>Exam Rules: Candidates must follow the rules and instructions provided before and during the exam. This may include restrictions on the use of electronic devices, communication with others, or access to external resources.</h2>
          <h2>Certification Criteria: Candidates must meet the certification criteria to receive the certification. This can include passing the exam, meeting educational or work experience requirements, and other criteria as specified by the certification body.</h2>
          <h2>Results: Exam results will be provided to candidates after the exam. The results may include the candidate's score and whether they passed or failed the exam.</h2>
          <h2>Confidentiality: Candidates must maintain the confidentiality of the exam questions and content. Sharing exam content with others is strictly prohibited and may result in disqualification.</h2>
          <h2>Cancellation or Rescheduling: The certification body reserves the right to cancel or reschedule the exam for any reason. Candidates will be notified in advance of any changes.</h2>
          <h2>Legal Jurisdiction: Any disputes arising from the exam will be subject to the laws and jurisdiction of the country where the certification body is based.</h2>
          <input type="checkbox" id='checkbox'/> I agree to the instructions and terms and conditons and well aware of the exam
          <div class='slot-btn'>
          <button>BOOK SLOT</button>
          <Link to="/user/Question"><button>START Exam</button></Link>
          </div>
        </div>
        </div>
    </div>
    );
  }
  
  export default Booking;