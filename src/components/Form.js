import React from 'react';

class Form extends React.Component{

    render(){
        return(
<form>
    <input type="text" name ="city" Placeholder = "City..."/>
    <input type="text" name ="country" Placeholder = "Country..."/>
    <button>Get Weather</button>
</form>
        );
    }
}

export default Form;