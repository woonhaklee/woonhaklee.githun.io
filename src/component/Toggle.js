import React, { useState } from 'react';

const Toggle = () => {

    const [active, setActive] = useState(true);
    
    const changeInput = (e) => {
        const { checked } = e.target
        setActive( checked )
    }

    return (
        <div className='componentWrap'>
            <h2 className='tit'>Toggle</h2>
            <div className='componentInner'>
                <label className='toggleLabel'>
                    <input type='checkbox' onChange={changeInput} checked={active}></input>
                    <span className='toggleSwitch'>
                        <em>
                            {active ? 'Off':'On'}
                        </em>
                    </span>
                </label>
            </div>
            <p className='txt'>
                {active ? 'Toggle Switch Off':'Toggle Switch On'}
            </p>
        </div>
    );
};

export default Toggle;