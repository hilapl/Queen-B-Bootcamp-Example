import React, { useState, useEffect } from 'react';
// import {Box} from "@mui/material";
// import {GoToCard} from "./components/SmallMentorCard";
import axios from 'axios';
// import firstPerson from './images/person1.svg';
import MentorCard from "./components/SmallMentorCardNew";
const port = process.env.PORT || 5001;

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:${port}/api/helloworld`)
      .then(response => setMessage(response.data))
      .catch(error => console.error(`There was an error retrieving the message: ${error}`))
  }, [])

  return (

    <div className="App">
        <h1>The Best App</h1>
      <h1>Search Bar...</h1>
      {/*<Box>hi</Box>*/}
        <MentorCard/>
        {/*<GoToCard/>*/}
      {/*<img src={firstPerson} alt="person1" />*/}
     </div>
  );
}

export default App;