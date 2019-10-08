import React     from 'react';
import {flexRow, flexGrow, noGrow} from './header-text-component.module.scss';

export function HeaderText({header, sentence, bool}) {

    const flexGrowClass = bool === true ? flexGrow : noGrow;
    return (
        <div className={`${flexRow} ${flexGrowClass}`}>
            <div>
                <h1>{header}</h1>
            </div>
            <div>
                <p>{sentence}</p>
                {bool}
            </div>
        </div>
    );
}