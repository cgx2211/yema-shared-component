import React, { ReactNode } from 'react';
import { Button } from 'antd';
import {
  CheckOutlined, CloseOutlined,
} from '@ant-design/icons';

interface ISelectDropdown {
  className?: string;
  children?: ReactNode;
  onMouseEnter?: Function;
  onMouseLeave?: Function;
  ok?: Function;
  cancel?: Function;
}

const SelectDropdown = (props:ISelectDropdown) => {
  const { children } = props;
  const onMouseEnter = (e) => {
    if (props.onMouseEnter) { props.onMouseEnter(e); }
  };
  const onMouseLeave = (e) => {
    if (props.onMouseLeave) { props.onMouseLeave(e); }
  };
  const ok = (e) => {
    if (props.ok) { props.ok(e); }
  };
  const cancel = (e) => {
    if (props.cancel) { props.cancel(e); }
  };
  return (
    <div
      className="yema-select"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
      <div className="yema-select-keysearch__footer">
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
  );
};
export default SelectDropdown;
