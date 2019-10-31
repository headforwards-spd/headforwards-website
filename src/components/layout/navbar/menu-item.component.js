import React from 'react'
import Link  from '../../link/link.component'

export default MenuItem;

function MenuItem({link, linkText, children}) {
    return (
        <li className="main-list-item">
            <Link className="nav-links" to={link} activeStyle={{color: '#ffb800'}}>{linkText}</Link>
            {!!children && <ul>
                {children.map((item, key) => <MenuItem key={key} {...item} />)}
            </ul>}
        </li>
    );
}
