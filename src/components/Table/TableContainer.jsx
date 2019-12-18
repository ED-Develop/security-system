import React from 'react';
import style from './Table.module.css';
import TableItem from "./TableItem/TableItem";
import {connect} from "react-redux";

const Table = ({tableItems}) => {
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
                {tableItems.map(item => {
                    return <TableItem key={item.id} description={item.description} title={item.title}
                                      date={item.date} id={item.id}/>
                })}
                </tbody>
            </table>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        tableItems: state.table.tableItems
    }
};

export default connect(mapStateToProps,{})(Table);