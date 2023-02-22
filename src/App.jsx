import './App.scss'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Form1 from './form1';
import Form2 from './form2';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Form1 />}></Route>
          <Route path='/form-2' element={<Form2 />}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App