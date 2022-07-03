import React, {useState} from 'react';
import Input from "./UI/input/Input";
import Select from "./UI/select/Select";

const PostFilter = ({filter, setFilter}) => {
    
    const [options, setOptions] = useState([
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По описанию'}
    ]);

    return (
        <div>
            <Input 
                value={filter.searchQuery}
                onChange={e => setFilter({...filter, searchQuery: e.target.value})}
                placeholder="Поиск"
            />
            <Select 
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue="Сортировка по"
                options = {options}
            />
        </div>
    );
};

export default PostFilter;
