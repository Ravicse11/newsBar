
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const [progress, setProgress] = useState(0);
  const pageSize = 6;
  const country = "in"

  const apiKey = process.env.REACT_APP_NEWS_API;

  return (
    <>
      < div >
        <LoadingBar
          color='#f11946'
          setProgress={progress} />
      </div>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} category="general" country={country} />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} category="technology" country={country} />} />
          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} category="science" country={country} />} />
          <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} category="general" country={country} />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} category="entertainment" country={country} />} />
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} category="health" country={country} />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} category="sports" country={country} />} />
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} category="business" country={country} />} />
        </Routes>
      </BrowserRouter>

    </>
  )

}
export default App;


