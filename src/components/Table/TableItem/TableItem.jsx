import React from 'react';

const TableItem = ({id, title, description, date, showDeleteMode, showInformation}) => {
    const onDelete = () => {
        showDeleteMode(id);
    };

    const onShow = () => {
        showInformation(id);
    };
    return (
        <>
            <tr>
                <td>{id}</td>
                <td>{title}</td>
                <td>{description}</td>
                <td>{date}</td>
                <td> <button onClick={onShow}>Show</button> <button onClick={onDelete}>Delete</button></td>
            </tr>
        </>
    )
};

export default TableItem;