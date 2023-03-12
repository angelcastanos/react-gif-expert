import { useState } from 'react';

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('');
    const onInputChange = ({target}) => {        
        setInputValue(target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        const newCategory = inputValue.trim();
        console.log(newCategory);
        if(newCategory.length <= 1) return;
        onNewCategory(newCategory);
        setInputValue('');
    }
    return(
        <form onSubmit={ onSubmit }>
            <input
                type='text'
                placeholder='Search your gif'
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}
