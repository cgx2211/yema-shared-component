
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Select } from 'shared';
import './test.scss';

interface ITestProp {}

export const Test = (props: ITestProp) => {
  const [value, setValue] = useState(['重庆永行1']);
  const [selectedRowKeys, setSelectRowKeys] = useState([1]);
  const [dataSource, setDataSource] = useState([] as any);
  useEffect(() => {
    Axios.get('sharedComponent/test').then((result) => {
      setDataSource(result.data);
    });
  }, []);
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
        pagination={{
          total: 100,
        }}
        onConfirm={(e) => setValue(e.map((o) => o.tenderPlanName))}
      />
    </div>
  );
};

export default Test;
