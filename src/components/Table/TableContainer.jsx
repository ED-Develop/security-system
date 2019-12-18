import React from 'react';
import {connect} from "react-redux";
import Table from "./Table";
import {deleteItem, getTableItems} from "../../Redux/tableReducer";
import {Redirect} from "react-router-dom";

class TableContainer extends React.Component {
    componentDidMount() {
        this.props.getTableItems();
    }

    render() {
        if (!this.props.isAuth) {
            return <Redirect to='/login'/>
        }
        return (
            <div>
                <Table tableItems={this.props.tableItems} deleteItem={this.props.deleteItem}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tableItems: state.table.tableItems,
        isAuth: state.app.isAuth
    }
};

export default connect(mapStateToProps, {getTableItems, deleteItem})(TableContainer);