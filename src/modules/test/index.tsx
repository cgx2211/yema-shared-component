
import React, { useState } from 'react';
import { RadioSelect } from 'shared';
import './test.scss';

interface ITestProp {}

export const Test = (props: ITestProp) => {
  const [value, setValue] = useState('');
  return (
    <div>
      <div>组件测试路由</div>
      <RadioSelect
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
        value={value}
        dataSource={[
          { tenderPlanName: 'typescript', tenderPlanCode: 1 },
          { tenderPlanName: 'javascript', tenderPlanCode: 2 },
        ]}
        onConfirm={(e) => setValue(e.tenderPlanName)}
      />
    </div>
  );
};

export default Test;
