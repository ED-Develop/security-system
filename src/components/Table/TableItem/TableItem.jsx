import React from 'react';
import style from './Table.module.css';

const Table = () => {
    return (
        <div className={style.wrapper}>
            <table className={style.table}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Created At</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>5</td>
                        <td>asdasd</td>
                        <td>adsssssssssssssssssss</td>
                        <td>16.12.19</td>
                        <td> <button>Show</button> <button>Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
};

export default Table;