/// <reference types="react" />
import { ReactNode } from 'react';
import './select.scss';
declare type SizeType = 'small' | 'middle' | 'large' | undefined;
interface IRadiosSelect {
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
declare const RadiosSelect: (props: IRadiosSelect) => JSX.Element;
export default RadiosSelect;
