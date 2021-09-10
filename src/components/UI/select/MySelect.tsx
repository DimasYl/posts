import React from 'react';

type OptionType = {
    value: string,
    name: string
}

type MySelectPropsType = {
    value: string
    defaultValue: string,
    options: Array<OptionType>
    onChange: (sort: any) => void
}

const MySelect:React.FC<MySelectPropsType> = ({options, defaultValue, value, onChange}) => {
    return (
        <select
        value={value}
        onChange={event => onChange(event.target.value)}
        >
            <option disabled value="">{defaultValue}</option>
            {options.map(option => {
               return  <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            })}
        </select>
    );
};

export default MySelect;