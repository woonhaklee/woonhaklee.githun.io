import React, { useState } from 'react';

const Tab = () => {

    const [tabpanel, setTabpanel] = useState(0)
    
    return (
        <div className='componentWrap'>
            <h2 className='tit'>Tab</h2>
            <div className='componentInner tabWrap'>
                <ul className='tabBtn'>
                    <li>
                        <button type="button" role="tab" id="tapPanel-01" onClick={ ()=>{setTabpanel(0)}}>
                            <span>Tab1</span>
                        </button>
                    </li>
                    <li>
                        <button type="button" role="tab" id="tapPanel-02" onClick={ ()=>{setTabpanel(1)}}>
                            <span>Tab2</span>
                        </button>
                    </li>
                    <li>
                        <button type="button" role="tab" id="tapPanel-03" onClick={ ()=>{setTabpanel(2)}}>
                            <span>Tab3</span>
                        </button>
                    </li>
                </ul>
                <div className='tabView'>
                    <div role="tabpanel" id="tapPanel-01" className={`tapPanel ${tabpanel === 0 ? 'active':''}`}>
                            <p>Tab menu ONE</p>
                    </div>
                    <div role="tabpanel" id="tapPanel-02" className={`tapPanel ${tabpanel === 1 ? 'active':''}`}>
                            <p>Tab menu TWO</p>
                    </div>
                    <div role="tabpanel" id="tapPanel-03 " className={`tapPanel ${tabpanel === 2 ? 'active':''}`}>
                            <p>Tab menu THREE</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tab;