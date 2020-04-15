/// <reference types="react" />
import { ReactNode } from 'react';
import './select.scss';
declare type SizeType = 'small' | 'middle' | 'large' | undefined;
declare type Mode = 'multiple' | undefined;
export interface ISelect {
  className?: string;
  mode?: Mode;
  loading?: boolean;
  disabled?: boolean;
  showArrow?: boolean;
  placeholder?: string;
  suffixIcon?: ReactNode;
  size?: SizeType;
  pagination?: Object;
  selectedRowKeys?: Array<string> | Array<number>;
  columns: Array<any>;
  rowKey: string;
  rowValue: string;
  label: string;
  value: string |number | Array<any>;
  dataSource: Array<any>;
  onSearch?: Function;
  onFresh?: Function;
  onConfirm?: Function;
  onCancel?: Function;
  onFocus?: Function;
  onBlur?: Function;
  onSelectChange?:Function;
}
declare const Select: (props: ISelect) => JSX.Element;
export default Select;
