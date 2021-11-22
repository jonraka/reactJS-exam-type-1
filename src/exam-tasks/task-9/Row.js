import React, { Component } from 'react';
import style from './Task9.module.css';

export default class Row extends Component {
    render() {
        const { title, completed } = this.props.item;
        return (
            <tr className={style.row + (completed ? ' ' + style.row_completed : '')}>
                <td className={style.card_body}>{title}</td>
                <td>
                    {completed ? (
                        <>
                            <i className="fa fa-check-square" aria-hidden="true"></i> Completed
                        </>
                    ) : (
                        <>
                            <i className="fa fa-pencil" aria-hidden="true"></i> Not Completed
                        </>
                    )}
                </td>
            </tr>
        );
    }
}
