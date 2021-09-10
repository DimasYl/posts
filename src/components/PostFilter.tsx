import React, {Dispatch, SetStateAction} from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

type PostFilterPropsType = {
    filter: {
        sort: string,
        query: string
    },
    setFilter: Dispatch<SetStateAction<{ sort: string; query: string; }>>
}

const PostFilter: React.FC<PostFilterPropsType> = ({filter,setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={(event: any) => setFilter({...filter, query: event.target.value})}
                placeholder='Поиск ...'
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue='Сортировка'
                options={[
                    {value: 'title', name: 'По названию'},
                    {value: 'body', name: 'По описанию'}
                ]}
            />
        </div>
    );
};

export default PostFilter;