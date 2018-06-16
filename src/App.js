import React from 'react';
import Titles from './components/Titles.js'
import Form from './components/Form.js'
import Weather from './components/Weather.js'

const API_KEY = "3c0a86d5467293b8069887e06f32ea2d";

class App extends React.Component {

  getWeather = async (e) => {
    e.preventDefault();
    const API_CALL = await fetch(`http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}`);
    const data = await API_CALL.json();
    console.log(data);
  }

render(){
  return (
  <div>
    <Titles />
    <Form getWeather = {this.getWeather}/>
    <Weather />
  </div>
  );
}
};

export default App; 