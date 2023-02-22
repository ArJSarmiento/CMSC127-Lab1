import './App.scss'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Form1 from './form1';
import Form15 from './form15';
import Form2 from './form2';
import Form3 from './form3';
import Form4 from './form4';
import ThankYou from './thankyou';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Product Form</h1>
        </header>
        <Routes>
          <Route path='/' element={<Form1 />}></Route>
          <Route path='/form-1a' element={<Form15 />}></Route>
          <Route path='/form-2' element={<Form2 />}></Route>
          <Route path='/form-3' element={<Form3 />}></Route>
          <Route path='/form-4' element={<Form4 />}></Route>
          <Route path='/thank-you' element={<ThankYou />}></Route>
          <Route path='*' element={<Navigate to='/' />}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App