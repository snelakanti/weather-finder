import React from 'react';

const From = props => (

<form onSubmit = {this.props.getWeather}>
    <input type="text" name ="city" placeholder = "City..."/>
    <input type="text" name ="country" placeholder = "Country..."/>
    <button>Get Weather</button>
</form>
        );
  

export default Form;