import React,{useEffect,useState} from 'react'
import './App.css';

//Note that the national=true parameter is used to retrieve the load shedding information
//for the entire country. If you want to retrieve information for a specific region, 
//you can replace national=true with municipalityId=<ID> or suburbId=<ID>, where <ID> is the ID
//of the municipality or suburb you're interested in. You can find the ID of a municipality or
//suburb by inspecting the HTML source of the Eskom load shedding website.

// const getData=()=>{
//   //example of api call:
//   //curl --location --request GET 'https://developer.sepush.co.za/business/2.0/area?id=eskde-10-fourwaysext10cityofjohannesburggauteng'
  
//   fetch('https://crossorigin.me/https://loadshedding.eskom.co.za/LoadShedding/GetStatus?national=true')
//   .then(response => response.json())
//   .then(data => {
//     console.log('Current load shedding status:', data.currentStage);
//     console.log('Next load shedding stage:', data.nextStage);
//     console.log('Load shedding schedules:', data.schedules);
//   })
//   .catch(error => {
//     console.error('Error fetching load shedding data:', error);
//   });
// }

// fetch('https://loadshedding.eskom.co.za/LoadShedding/GetStatus?national=true')
//   .then(response => response.json())
//   .then(data => {
//     console.log('Current load shedding status:', data.currentStage);
//     console.log('Next load shedding stage:', data.nextStage);
//     console.log('Load shedding schedules:', data.schedules);
//   })
//   .catch(error => {
//     console.error('Error fetching load shedding data:', error);
//   });
// }




function App() {
  const [data,setData]=useState([])
  useEffect(() => {
    fetch('https://api.eskom.co.za/idmapi/v1/municipalities')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);
  return (
    <div>
    <h1>Eskom Municipalities</h1>
    <ul>
      {data.map(municipality => (
        <li key={municipality.id}>{municipality.name}</li>
      ))}
    </ul>
  </div>
);
//     <div>
// {getData()}
//     </div>
//   );
}

export default App;
