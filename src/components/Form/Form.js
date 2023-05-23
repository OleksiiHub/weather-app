import { Button, Input } from 'semantic-ui-react';
import './css/style.min.css';


const Form = ({ setInput, handleSubmit }) => {
    const handleInputChange = (event) => {
        setInput(event.target.value);
    };
    return (
        <form onSubmit={handleSubmit}>
            <Input 
            icon ='search'
            placeholder="Enter a city" 
            onChange={handleInputChange} />
            <Button 
            className='btn'
            primary
            type="submit">Submit</Button>
        </form>
    );
};

export default Form;
