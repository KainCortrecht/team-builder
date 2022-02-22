import React from "react";

const Form = (props) => {

    const handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        
    }

    return (
        <form>
            <label>Name
                <input
                    placeholder = 'Please enter name.'
                    value = {value.name}
                    name = 'name'
                    onChange = {handleChange}
                />
            </label>
            <label>Email
                <input
                    placeholder = 'Enter email here.'
                    value = {value.email}
                    name = 'email'
                    onChange = {handleChange}
                />
            </label>
            <label>Role
                <input
                    placeholder = 'Enter role here.'
                    value = {value.role}
                    name = 'role'
                    onChange = {handleChange}
                />
            </label>
            <input type = 'submit' value = 'Create your team.' />
        </form>
    )
}

export default Form;