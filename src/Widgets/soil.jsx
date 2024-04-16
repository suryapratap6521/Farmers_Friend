import { useState } from 'react';
import data from '../data/soil.json';
import './soil.css';
import Header from './header';
import Footer from './footer';

const Soil = () => {
    const [selectedOptions, setSelectedOptions] = useState({
        soil_type: '',
        temperature: '',
        geolocation: '',
        weather_conditions: ''
    });

    const [recommendation, setRecommendation] = useState(null);

    const handleSelectChange = (e) => {
        const { name, value } = e.target;
        setSelectedOptions(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleButtonClick = () => {
        const matchingData = data.find(item => {
            return (
                item.input_fields.soil_type === selectedOptions.soil_type &&
                item.input_fields.temperature === selectedOptions.temperature &&
                item.input_fields.geolocation === selectedOptions.geolocation &&
                item.input_fields.weather_conditions === selectedOptions.weather_conditions
            );
        });

        if (matchingData) {
            setRecommendation(matchingData.recommendations);
        } else {
            setRecommendation(null);
        }
    };

    return (
        <div>
            <Header />
            <div className='main-container h-screen flex items-center justify-center'>
                <div className="soil-container">
                    <h1>Know What is 👍 right for you?</h1>
                    <div>
                        <label>
                            Soil Type:
                            <select name="soil_type" value={selectedOptions.soil_type} onChange={handleSelectChange}>
                                <option value="">Select Soil Type</option>
                                <option value="Clay">Clay</option>
                                <option value="Sandy">Sandy</option>
                            </select>
                        </label>
                    </div>
                    <div>
                        <label>
                            Temperature:
                            <select name="temperature" value={selectedOptions.temperature} onChange={handleSelectChange}>
                                <option value="">Select Temperature</option>
                                <option value="Very Hot (>35°C)">Very Hot (greater thean 35°C)</option>
                                <option value="Temperate (10-20°C)">Temperate (10-20°C)</option>
                                <option value="Subtropical (15-25°C)">Subtropical (15-25°C)</option>
                                <option value="Cold (<5°C)">Cold (less than 5°C)</option>
                                <option value="Cool (5-10°C)">Cool (5-10°C)</option>
                                <option value="Hot (30-35°C)">Hot (30-35°C)</option>
                            </select>
                        </label>
                    </div>
                    <div>
                        <label>
                            Geolocation:
                            <select name="geolocation" value={selectedOptions.geolocation} onChange={handleSelectChange}>
                                <option value="">Select Geolocation</option>
                                <option value="Mathura">Mathura</option>
                                <option value="Vrindavan">Vrindavan</option>
                                <option value="Agra">Agra</option>
                                <option value="Bulandshahr">Bulandshahr</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Fatehpur Sikri">Fatehpur Sikri</option>
                                <option value="Meerut">Meerut</option>
                                <option value="Firozabad">Firozabad</option>
                                <option value="Bharatpur">Bharatpur</option>
                                <option value="Aligarh">Aligarh</option>
                                <option value="Jaipur">Jaipur</option>
                                <option value="Hathras">Hathras</option>
                                <option value="Kasganj">Kasganj</option>
                            </select>
                        </label>
                    </div>
                    <div>
                        <label>
                            Weather Conditions:
                            <select name="weather_conditions" value={selectedOptions.weather_conditions} onChange={handleSelectChange}>
                                <option value="">Select Weather Conditions</option>
                                <option value="Sunny">Sunny</option>
                                <option value="Thunderstorm">Thunderstorm</option>
                                <option value="Cloudy">Cloudy</option>
                                <option value="Rainy">Rainy</option>
                                <option value="Windy">Windy</option>
                                <option value="Foggy">Foggy</option>
                                <option value="Hailstorm">Hailstorm</option>
                                <option value="Snowy">Snowy</option>
                                <option value="Overcast">Overcast</option>
                                <option value="Partly cloudy">Partly cloudy</option>
                            </select>
                        </label>
                    </div>
                    <button className="btn" onClick={handleButtonClick}>Get Recommendation</button>
                    {recommendation && (
                        <div>
                            <h2>Recommendations</h2>
                            <ul>
                                <li>{recommendation.irrigation_schedule.watering_interval}</li>
                                <li>{recommendation.irrigation_schedule.water_quantity}</li>
                                <li>{recommendation.resource_management.irrigation_method}</li>
                                <li>{recommendation.resource_management.fertilizer_application}</li>
                                <li>{recommendation.resource_management.pest_control}</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Soil;
