import React, { useState } from 'react';

const Modal = () => {
    let [modal, setModal] = useState(false)

    return (
        <div className='componentWrap'>
            <h2 className='tit'>Modal</h2>
            <div className='componentInner'>
                <button type='button' className='modalOpenButton' onClick={ ()=>{ setModal(true) } }>
                    <span>Open Madal</span>
                </button>
                {
                  modal && <ModalDialog setModal={setModal}/>
                }
            </div>
        </div>
    );
};

const ModalDialog = (props) => {
    return (
        <>
            <div className='dim'>
            </div>
            <div className='ModalDialog'>
                <button className='modalCloseButton' onClick={ ()=>{ props.setModal(false) } }>
                    <span>Close Modal</span>
                </button>
                <p>
                    HELLO CODESTATES!
                </p>
            </div>
        </>
    );
};

export default Modal;