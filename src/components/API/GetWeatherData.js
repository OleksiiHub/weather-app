import { useState } from 'react';
import Form from '../Form/Form';

const API_KEY = 'a1c78bc26f6332af3f0710d75b9ae1da';

export function GetWeaterData() {
    const [city, setCity] = useState('');
    const [cityData, setCityData] = useState(null);

    const handleFormSubmit = (event) => {
        event.preventDefault(); // prevent the form from refreshing the page
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&cnt=3`)
            .then((response) => response.json())
            .then((data) => {

                setCityData(data);
            })
            .catch((error) => console.log('Error:', error.message));
    };

    return (
        <div>
            <Form setInput={setCity} handleSubmit={handleFormSubmit} />            
            {cityData && cityData.main && (
                <div className='data_position'>
                    <h2>{cityData.name}</h2>
                    <h3>{cityData.main.temp.toFixed()}°C</h3>
                </div>
            )}

        </div>
    );
}
