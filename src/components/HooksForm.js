import {useState} from 'react';

function HooksForm() {
    // this is the syntax for use state.
    // first one is value, second one is function to update the value.
    const [inputValue, setInputValue] = useState(
        {
            FirstName : "First",
            LastName: "Last"
        }
    );
    function changeHandler(event) {
        setInputValue({
            ...inputValue,
            FirstName: event.target.value
        });
    }
    return (
        <div>
            <div>
                <label>Enter First Name: </label>
                <input value={inputValue.FirstName} onChange = {changeHandler}></input>
            </div>
            
            <div>
                <label>Enter Last Name: </label>
                <input value={inputValue.LastName} onChange = {(event)=>{
                    setInputValue({
                        ...inputValue,
                        LastName: event.target.value
                    });
                }}></input>
            </div>
            <p>This is live update of text you entered using react hooks:<br/>  
            {inputValue.FirstName} {inputValue.LastName}</p>
        </div>
    );
}

export default HooksForm;