import React from 'react';
import { RadioSelect } from 'shared';
import './App.scss';

const App: React.FC = (props) => (
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
      value={1}
      dataSource={[
        { tenderPlanName: 1, tenderPlanCode: 2 }, { tenderPlanName: 2, tenderPlanCode: 3 }]}
    />
  </div>
);

export default App;
