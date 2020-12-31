import './Header.css'

import React from 'react';

const Header = () => {
    return (
        <header tabIndex="0">
            <h1>Frequently asked questions</h1>
            <h2>ACIT4200 - Interdisciplinary Innovation - OsloMet</h2>
            <h3 className="edit-notice">Updated weekly for the duration of the course</h3>
        </header>
    );
}

export default Header;