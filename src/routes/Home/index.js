import React, { useEffect, useState } from 'react';
import DynamicElement from '../../ElementMapper';

const Home = () => {

const [homeConfig, setHomeConfig] = useState(null);

  useEffect(() => {
    // Fetch configuration from your BE/AppConfig/RemoteConfig
    // For now, use the static JSON file
    fetch('data/schema.json',{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      })
      .then((response) => response.json())
      .then((data) => setHomeConfig(data?.screens?.["/"]))
      .catch((error) => console.error('Error fetching config:', error));
  }, []);
  return (
    <div>
      {homeConfig?.components?.map((item, index) => {
        const {props, type, id} = item;
        return (
          <DynamicElement type={type} key={id+index} {...props}/>
        );
      })}
    </div>
  );
};

export default Home;