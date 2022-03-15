import React, { useState } from 'react';

const Tag = () => {
    const [tags, setTags] = useState(['a','b']);
    const removeTags = indexToRemove =>{
        setTags([...tags.filter((_, index) => index !== indexToRemove )])
    };
    const addTags = event => {
        if (event.target.value !==''){
            setTags([...tags, event.target.value])
            event.target = '';
        }
    }
    return (
        <div className='componentWrap'>
            <h2 className='tit'>Tag</h2>
            <div className='componentInner tags'>
                <ul>
                    { tags.map((tag, index) => (
                        <li key={index} className='tag'>
                            <span className='tagTitle'>
                                {tag}
                            </span>
                            <span className='tagClose' onClick={ ()=>{removeTags(index)} }>
                                x
                            </span>
                        </li>
                        ))
                    }
                </ul>
                <input type='text' onKeyUp={ event=> event.key === 'Enter' ? addTags(event) : null} placeholder='press enter to add tags'/>

            </div>
        </div>
    );
};

export default Tag;