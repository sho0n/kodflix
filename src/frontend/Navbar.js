import React from 'react';

export default function Navbar() {

    return (
        <div className='nav-box'>
            <div className='logo'>
                <label className='start'>Kod</label>
                <label className='middle'>F</label>
                <label className='end'>lix</label>
            </div>
            <div className='search-box'>
                <input className='search-bar'
                        placeholder='Search..'
                        value=''
                />
            </div>
        </div>
    )
}
