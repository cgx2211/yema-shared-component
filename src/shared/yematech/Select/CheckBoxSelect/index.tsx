import React, { useState, ReactNode } from 'react';
import {
  SyncOutlined,
} from '@ant-design/icons';
import {
  Input, Button, Table, Select,
} from 'antd';

import '../index.scss';
import './index.scss';
import SelectDropdown from '../SelectDropdown';

const { Search } = Input;
type SizeType = 'small' | 'middle' | 'large' | undefined;

interface ICheckBoxSelect {
  className?: string;
  loading?: boolean;
  disabled?: boolean;
  showArrow?: boolean;
  placeholder?: string;
  suffixIcon?: ReactNode;
  size?: SizeType;
  columns: Array<any>;
  rowKey: string;
  label: string;
  value: any;
  dataSource: Array<any>;
  onSearch?: Function;
  onFresh?: Function;
  onConfirm?: Function;
  onCancel?: Function;
  onFocus?: Function;
  onBlur?: Function;
  onSelect?:Function;
}

const CheckBoxSelect = (props: ICheckBoxSelect) => {
  const {
    dataSource, value, loading, columns, label, rowKey, placeholder, size, className, disabled,
    showArrow, suffixIcon,
  } = props;

  const [open, isOpen] = useState(false);
  const [focus, isFocus] = useState(false);
  const [selectedRow, setSelectedRow] = useState([] as any);

  const selectRef = React.createRef<any>();

  const close = () => {
    isOpen(false);
    isFocus(false);
  };
  const onSearch = (v:any) => {
    if (props.onSearch) {
      props.onSearch(v);
    }
  };
  const onFresh = () => {
    if (props.onFresh) {
      props.onFresh();
    }
  };
  const ok = () => {
    if (props.onConfirm && selectedRow.length > 0) {
      props.onConfirm(selectedRow[0]);
    }
    close();
  };
  const cancel = () => {
    close();
    if (props.onCancel) {
      props.onCancel();
    }
  };
  const onFocus = (v) => {
    isOpen(true);
    if (props.onFocus) { props.onFocus(v); }
  };
  const onBlur = (v) => {
    isOpen(false || focus);
    if (props.onBlur) { props.onBlur(v); }
  };
  const onSelect = (selectedRowKeys, selectedRows) => {
    setSelectedRow(selectedRows);
    if (props.onSelect) { props.onSelect(selectedRows[0]); }
  };

  return (
    <Select
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
                <span className="yema-select-keysearch__control">
                  <Button
                    size="small"
                    type="primary"
                    onClick={onFresh}
                    icon={<SyncOutlined />}
                  />
                </span>
              </div>
              <Table
                columns={columns}
                dataSource={dataSource}
                rowKey={rowKey}
                rowSelection={{
                  fixed: true,
                  type: 'radio',
                  onChange: onSelect,
                }}
              />
            </div>
            <div className="yema-select-checkbox__dropdown-tags">
              <span className="yema-select-keysearch__label">{label}</span>
            </div>
          </div>
        </SelectDropdown>
      )}
    />
  );
};

export default CheckBoxSelect;
