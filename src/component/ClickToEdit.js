import React, { useState } from 'react';

const ClickToEdit = () => {
    const [name, setName] = useState('')
    const [age, setAge] = useState()
    return (
        <div className='componentWrap'>
            <h2 className='tit'>ClickToEdit</h2>
            <div className='componentInner clickToEdit'>
                <div className='box'>
                    <label>이름 : </label>
                    <input type="text" value={name} onChange={ e => setName( e.target.value )}/>
                </div>
                <div className='box'>
                    <label>나이 : </label>
                    <input type="text" value={age} onChange={ e => setAge( e.target.value )} />
                </div>
                <p>
                    <span>
                        <em>이름 : </em>
                        <em>{name}</em>
                    </span>
                    <span>
                        <em>나이 : </em>
                        <em>{age}</em>
                    </span>
                </p>
            </div>
        </div>     
    );
};

export default ClickToEdit;