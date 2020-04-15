
import React, { useState } from 'react';
import { Select } from 'shared';
import './test.scss';

interface ITestProp {}

export const Test = (props: ITestProp) => {
  const [value, setValue] = useState(['重庆永行1']);
  const [selectedRowKeys, setSelectRowKeys] = useState([1]);
  const dataSource = [
    { tenderPlanName: '重庆永行1', tenderPlanCode: 1 },
    { tenderPlanName: '重庆永行2', tenderPlanCode: 2 },
  ];

  return (
    <div>
      <div>组件测试路由</div>
      <Select
        mode="multiple"
        className="test-input"
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
