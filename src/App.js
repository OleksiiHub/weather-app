import { GetWeaterData } from './components/API/GetWeatherData'
import './css/style.min.css'

function App() {
  return (
    <div className="App">
      <div className='background_img'>
        <div>
          <GetWeaterData />
        </div>
      </div>
    </div>
  );
}

export default App;
