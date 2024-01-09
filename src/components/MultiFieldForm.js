import { useState } from "react"

export default function MultiFieldForm() {
    const [inputs, setInputs] = useState({
        username: "",
        age: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target
        //  setInputs(values => ({ ...values, [name]: value }))
        setInputs({ ...inputs, [name]: value })

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Age  ' + inputs.age + ' and name is ' + inputs.username);
    }

    return (
        <form onSubmit={handleSubmit}>
           <div> 
            <label>Enter your name: &nbsp;
                <input
                    type="text"
                    name="username"
                    value={inputs.username}
                    onChange={handleChange}
                />
            </label>
            <br/>
            <label>Enter your age:&nbsp;
                <input
                    type="number"
                    name="age"
                    value={inputs.age}
                    onChange={handleChange}
                />
            </label>
            </div>
            <div> <input type="submit" /></div>
        </form>
    )
}