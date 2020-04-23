
import React, { useState } from 'react';
import { Select } from 'shared';
import './test.scss';
import { Radio } from 'antd';

interface ITestProp {}

export const Test = (props: ITestProp) => {
  const [mode, setMode] = useState('multiple' as any);
  const [value, setValue] = useState([]);
  const [selectedRowKeys, setSelectRowKeys] = useState([]);
  const dataSource = [
    { tenderPlanName: '重庆永行1', tenderPlanCode: 1 },
    { tenderPlanName: '重庆永行2', tenderPlanCode: 2 },
  ];
  const handleOnChange = (e) => {
    setValue([]);
    setSelectRowKeys([]);
    setMode(e.target.value);
  };
  return (
    <div>
      <div>组件测试路由</div>
      <Radio.Group
        options={[
          { label: '单选' as any, value: undefined },
          { label: '多选' as any, value: 'multiple' },
        ]}
        onChange={handleOnChange}
        value={mode}
      />
      <Select
        mode={mode}
        className="test-input"
        placeholder="请选择"
        label="名称"
        columns={[{
          title: '招标计划名称',
          dataIndex: 'tenderPlanName',
        }, {
          title: '编号',
          dataIndex: 'tenderPlanCode',
        }]}
        rowKey="tenderPlanCode"
        rowValue="tenderPlanName"
        selectedRowKeys={selectedRowKeys}
        onSelectChange={(keys) => setSelectRowKeys(keys)}
        value={value}
        dataSource={dataSource}
        onConfirm={(e) => setValue(e.map((o) => o.tenderPlanName))}
      />
    </div>
  );
};

export default Test;
