import React, { useState } from 'react';
import { RadioSelect } from 'shared';
import './App.scss';

const App: React.FC = (props) => {
  const [value, setValue] = useState('');
  return (
    <div>
      <h1>组件展示</h1>
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

export default App;
