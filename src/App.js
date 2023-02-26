import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

const App = () => {
  const pageSize = 6;
  const [progress, setProgress] = useState(0)



  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          color='#f11946'
          progress={progress}

        />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} key="general" country="in" category="general" pageSize={pageSize} />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" country="in" category="sports" pageSize={pageSize} />} />
          <Route exact path="/science" element={<News setProgress={setProgress} key="science" country="in" category="science" pageSize={pageSize} />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" country="in" category="entertainment" pageSize={pageSize} />} />
          <Route exact path="/business" element={<News setProgress={setProgress} key="business" country="in" category="business" pageSize={pageSize} />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" country="in" category="technology" pageSize={pageSize} />} />
          <Route exact path="/health" element={<News setProgress={setProgress} key="health" country="in" category="health" pageSize={pageSize} />} />
        </Routes>
      </Router>
    </div>
  )

}

export default App;
