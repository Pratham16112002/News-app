
import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const  App = ()  =>  {
  const pageSize = 10
  const apiKey = process.env.REACT_APP_APIKEY
  const date = `${ new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`

  const [progress,setProgress] = useState(0)
    return ( 
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color='#FFFFFF'
            progress={progress}
          />
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} date={date} key="Tesla" pageSize={pageSize} category="tesla" />} />
            <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} date={date} key="business" pageSize={pageSize} category="business" />} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={pageSize} category="entertainment" />} />
            <Route exact path="/health" element={<News setProgress={setProgress}apiKey={apiKey} date={date} key="health" pageSize={pageSize} category="health" />} />
            <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} date={date} key="science" pageSize={pageSize} category="science" />} />
            <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} date={date} key="sports" pageSize={pageSize} category="sports" />} />
            <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} date={date} key="technology" pageSize={pageSize} category="technology" />} />
          </Routes>
        </Router>
      </div>
    )
}

export default App

