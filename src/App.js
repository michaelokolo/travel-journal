import './App.css';
import Travel from './Travel'
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Travel 
          title = "Mount Fuji"
          location = "Japan"
          googleMapsUrl = "https://goo.gl/maps/eBZGdRaZVtEBREtg8"
          startDate = "12 Jan, 2021"
          endDate = "24 Jan, 2021"
          description = "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet).Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
          imageUrl = "kilimanjaro-photo.jpg"
        />
    </div>
  );
}

export default App;
