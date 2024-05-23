import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://api.example.com/data')
      .then(response => {
        setData(response.data);
      });
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      {data ? <p>{data}</p> : <p>Loading...</p>}
    </div>
  );
}

export default Home;
