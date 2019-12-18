import React, {useEffect, useState} from 'react';
import style from './Table.module.css';
import TableItem from "./TableItem/TableItem";
import ModalWindow from "../common/ModalWindow/ModalWindow";
import DeleteForm from "./DeleteForm/DeleteForm";

const Table = ({tableItems, deleteItem}) => {
    const [deleteId, setDeleteId] = useState(null);
    const [showModId, setShowModeId] = useState(null);

    useEffect(() => {
        setDeleteId(null);
    }, [tableItems]);

    const showDeleteMode = (id) => {
        console.log(id);
        setDeleteId(id);
    };

    const deleteItemCheck = (formData) => {
        console.log(deleteId);
        deleteItem(deleteId, formData.password);
    };

    const hideDeleteMod = () => {
        setDeleteId(null);
    };

    const showInformation = (id) => {
        setShowModeId(id);
    };

    const closeInformation = (id) => {
        setShowModeId(null);
    };

    const checkDelete = <ModalWindow hideModalWindow={hideDeleteMod} modalTitle='Security check'>
        <p>Please enter your password!</p>
        <DeleteForm onSubmit={deleteItemCheck}/>
    </ModalWindow>;

    const information = <ModalWindow hideModalWindow={closeInformation}
                                     modalTitle={`Information about ${showModId} element`}>
        <p>A lot of interesting information about {showModId} element</p>
    </ModalWindow>;

    return (
        <div className={style.wrapper}>
            {deleteId && checkDelete}
            {showModId && information}
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
                {tableItems.map(item => {
                    return <TableItem key={item.id} description={item.description} title={item.title}
                                      date={item.date} id={item.id} showDeleteMode={showDeleteMode}
                                      showInformation={showInformation}/>
                })}
                </tbody>
            </table>
        </div>
    )
};


export default Table;