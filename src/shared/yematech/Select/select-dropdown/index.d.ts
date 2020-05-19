/// <reference types="react" />
import { ReactNode } from 'react';

export interface ISelectDropdown {
  className?: string;
  children?: ReactNode;
  onMouseEnter?: Function;
  onMouseLeave?: Function;
  ok?: Function;
  cancel?: Function;
}
declare const SelectDropdown: (props: ISelectDropdown) => JSX.Element;
export default SelectDropdown;
