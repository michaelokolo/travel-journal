import './App.css';
import Travel from './Travel'
import Navbar from './Navbar';
import traveldata from './data'

function App() {

  const travelElements = traveldata.map(data => {
    return(
      <Travel
          id = {data.id}
          title = {data.title}
          location = {data.location}
          googleMapsUrl = {data.googleMapsUrl}
          startDate = {data.startDate}
          endDate = {data.endDate}
          description = {data.description}
          imageUrl = {data.imageUrl}
      />
    )
  })

  return (
    <div className="App">
        <Navbar />
        {travelElements}
        
    </div>
  );
}

export default App;
