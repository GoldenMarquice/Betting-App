import { useState } from 'react';

function Nav() {
    const [visibleNav, setVisibleNav] = useState(1);

    function handleNavChange(option) {
        setVisibleNav(option);
    }

    function getSubNav() {
        // if (visibleNav === 1) {
        //     return <HomeNav />;
        // } else if (visibleNav === 2) {
        //     return <SecondNav />;
        // }
        
        return null;
    }

    return (
        <div className='main-nav'>
            <ul>
                <li onClick={() => handleNavChange(1)}>Home</li>
                <li onClick={() => handleNavChange(2)}>Fantasy</li>
                <li onClick={() => handleNavChange(3)}>SportsBook</li>
                <li onClick={() => handleNavChange(4)}>Casino</li>
            </ul>

            {getSubNav()}
        </div>
    );
}

export default Nav;