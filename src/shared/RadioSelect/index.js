import React, { useState } from 'react';
import { SyncOutlined, CheckOutlined, CloseOutlined, } from '@ant-design/icons';
import { Input, Button, Table, Select, } from 'antd';
import './select.scss';
var Search = Input.Search;
var RadiosSelect = function (props) {
    var dataSource = props.dataSource, value = props.value, loading = props.loading, columns = props.columns, label = props.label, rowKey = props.rowKey, placeholder = props.placeholder, size = props.size, className = props.className;
    var _a = useState(false), open = _a[0], isOpen = _a[1];
    var _b = useState(false), focus = _b[0], isFocus = _b[1];
    var _c = useState([]), selectedRow = _c[0], setSelectedRow = _c[1];
    var selectRef = React.createRef();
    var close = function () {
        isOpen(false);
        isFocus(false);
    };
    var onSearch = function (v) {
        if (props.onSearch) {
            props.onSearch(v);
        }
    };
    var onFresh = function () {
        if (props.onFresh) {
            props.onFresh();
        }
    };
    var ok = function () {
        if (props.onConfirm && selectedRow.length > 0) {
            props.onConfirm(selectedRow[0]);
        }
        close();
    };
    var cancel = function () {
        close();
        if (props.onCancel) {
            props.onCancel();
        }
    };
    return (React.createElement(Select, { className: className, value: value, ref: selectRef, open: open, onFocus: function () { return isOpen(true); }, onBlur: function () { return isOpen(false || focus); }, placeholder: placeholder, size: size, dropdownRender: function () { return (React.createElement("div", { className: "radio-select", onMouseEnter: function () { return isFocus(true); }, onMouseLeave: function () { return isFocus(false); } },
            React.createElement("div", { className: "radio-select-keysearch" },
                React.createElement("span", { className: "radio-select-keysearch__label" }, label),
                React.createElement(Search, { onSearch: onSearch, loading: loading }),
                React.createElement("span", { className: "radio-select-keysearch__control" },
                    React.createElement(Button, { size: "small", type: "primary", onClick: onFresh, icon: React.createElement(SyncOutlined, null) }))),
            React.createElement(Table, { columns: columns, dataSource: dataSource, rowKey: rowKey, rowSelection: {
                    fixed: true,
                    type: 'radio',
                    onChange: function (selectedRowKeys, selectedRows) {
                        setSelectedRow(selectedRows);
                    },
                } }),
            React.createElement("div", { className: "radio-select-keysearch__footer" },
                React.createElement(Button, { size: "small", onClick: ok, type: "primary", icon: React.createElement(CheckOutlined, null) }, "\u786E\u5B9A"),
                React.createElement(Button, { className: "mgl-8", size: "small", onClick: cancel, icon: React.createElement(CloseOutlined, null) }, "\u5173\u95ED")))); } }));
};
export default RadiosSelect;
