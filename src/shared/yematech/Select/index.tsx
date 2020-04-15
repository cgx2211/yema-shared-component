import React, { useState } from 'react';
import {
  SyncOutlined,
} from '@ant-design/icons';
import {
  Input, Button, Table, Select,
} from 'antd';

import { ISelect } from './index.d';
import './index.scss';
import SelectDropdown from './SelectDropdown';

const { Search } = Input;

/* 下拉多选控件 */
const YemaSelect = (props: ISelect) => {
  const {
    dataSource, value, loading, columns, label, rowKey, placeholder, size, className, disabled,
    showArrow, suffixIcon, rowValue, pagination, selectedRowKeys, mode,
  } = props;

  // 展开状态
  const [open, isOpen] = useState(false);
  // 获取焦点状态
  const [focus, isFocus] = useState(false);
  // 选中项
  const [selectedRows, setSelectedRows] = useState([] as any);

  const selectRef = React.createRef<any>();

  // 关闭
  const close = () => {
    isOpen(false);
    isFocus(false);
  };
  // 搜索
  const onSearch = (v:any) => {
    if (props.onSearch) { props.onSearch(v); }
  };
  // 刷新
  const onFresh = () => {
    if (props.onFresh) { props.onFresh(); }
  };
  // 确认
  const ok = () => {
    if (props.onConfirm) { props.onConfirm(selectedRows); }
    close();
  };
  // 取消
  const cancel = () => {
    if (props.onCancel) { props.onCancel(); }
    close();
  };
  // 获取焦点
  const onFocus = (v) => {
    isOpen(true);
    if (props.onFocus) { props.onFocus(v); }
  };
  // 失去焦点
  const onBlur = (v) => {
    isOpen(false || focus);
    if (props.onBlur) { props.onBlur(v); }
  };
  // table选项发生变化
  const onSelectChange = (selectedRowKey, selectedRow) => {
    setSelectedRows(selectedRow);
    // 注释不知选择表格是否同步更新Select的value
    // props.onConfirm(selectedRow);
    if (props.onSelectChange) { props.onSelectChange(selectedRowKey, selectedRow); }
  };
  // select值发生变化
  const onChange = (e:Array<any>) => {
    const currentRows = selectedRows.filter((row) => e.includes(row[rowValue]));
    const currentRowKeys = currentRows.map((row) => row[rowKey]);
    setSelectedRows(currentRows);
    props.onConfirm(currentRows);
    if (props.onSelectChange) { props.onSelectChange(currentRowKeys, currentRows); }
  };

  return (
    <Select
      mode={mode}
      className={className}
      disabled={disabled}
      showArrow={showArrow}
      suffixIcon={suffixIcon}
      value={value}
      ref={selectRef}
      open={open}
      onFocus={onFocus}
      onBlur={onBlur}
      placeholder={placeholder}
      size={size}
      onChange={onChange}
      dropdownRender={() => (
        <SelectDropdown
          onMouseEnter={() => isFocus(true)}
          onMouseLeave={() => isFocus(false)}
          ok={ok}
          cancel={cancel}
        >
          <div className="yema-select-checkbox__dropdown">
            <div className="yema-select-checkbox__dropdown-main">
              <div className="yema-select-keysearch">
                <span className="yema-select-keysearch__label">{label}</span>
                <Search onSearch={onSearch} loading={loading} />
                {
                  props.onFresh ? (
                    <span className="yema-select-keysearch__control">
                      <Button
                        size="small"
                        type="primary"
                        onClick={onFresh}
                        icon={<SyncOutlined />}
                      />
                    </span>
                  ) : null
                }
              </div>
              <Table
                columns={columns}
                dataSource={dataSource}
                rowKey={rowKey}
                rowSelection={{
                  fixed: true,
                  type: mode ? 'checkbox' : 'radio',
                  onChange: onSelectChange,
                  selectedRowKeys,
                }}
                pagination={({ size: 'small', ...pagination })}
              />
            </div>
          </div>
        </SelectDropdown>
      )}
    />
  );
};

export default YemaSelect;
