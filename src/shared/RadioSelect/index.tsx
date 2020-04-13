import React, { useState } from 'react';
import {
  SyncOutlined, CheckOutlined, CloseOutlined,
} from '@ant-design/icons';
import {
  Input, Button, Table, Select,
} from 'antd';
import './select.scss';

const { Search } = Input;
type SizeType = 'small' | 'middle' | 'large' | undefined;

interface IRadiosSelect {
  className?: string;
  loading?: boolean;
  placeholder?: string;
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
}

const RadiosSelect = (props: IRadiosSelect) => {
  const {
    dataSource, value, loading, columns, label, rowKey, placeholder, size, className,
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
  return (
    <Select
      className={className}
      value={value}
      ref={selectRef}
      open={open}
      onFocus={() => isOpen(true)}
      onBlur={() => isOpen(false || focus)}
      placeholder={placeholder}
      size={size}
      dropdownRender={() => (
        <div
          className="radio-select"
          onMouseEnter={() => isFocus(true)}
          onMouseLeave={() => isFocus(false)}
        >
          <div className="radio-select-keysearch">
            <span className="radio-select-keysearch__label">{label}</span>
            <Search onSearch={onSearch} loading={loading} />
            <span className="radio-select-keysearch__control">
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
              onChange: (selectedRowKeys, selectedRows) => {
                setSelectedRow(selectedRows);
              },
            }}
          />
          <div className="radio-select-keysearch__footer">
            <Button
              size="small"
              onClick={ok}
              type="primary"
              icon={<CheckOutlined />}
            >
              确定
            </Button>
            <Button
              className="mgl-8"
              size="small"
              onClick={cancel}
              icon={<CloseOutlined />}
            >
              关闭
            </Button>
          </div>
        </div>
      )}
    />
  );
};

export default RadiosSelect;
