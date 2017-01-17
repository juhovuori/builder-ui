import React from 'react';
import { Link } from 'react-router';

const BuildListItem = ({buildID}) => {
    return (
        <li className="BuildItem">
            <Link to={"/build/"+buildID}>{buildID}</Link>
        </li>
    );
}

export default BuildListItem;
