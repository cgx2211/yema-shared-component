# 下拉选择器--可搜索分页控件

## 何时使用

- 1、弹出一个下拉菜单给用户选择操作，下拉菜单数据需要分页
- 2、当选项少时（少于 5 项），建议直接将选项平铺

## 举个栗子

```tsx
<Select
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
```

### Select props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| className | 下拉菜单的 className 属性 | string | - |  |
| mode | 设置 Select 的模式为多选或单选 | string | - |  |
| columns | 表格的 columns 属性 | Array | - |  |
| rowKey | 表格的 rowKey 属性 | string | - |  |
| rowValue | row value 的属性名 | string | - |  |
| dataSource | 表格的 dataSource 属性 | Array | - |  |
| selectedRowKeys | 指定选中项的 key 数组，需要和 onSelectChange 进行配合 | Array&lt;string> | - |  |
| label | 查询框的 label 属性 | string | - |  |
| disabled | 是否禁用 | boolean | false |  |
| placeholder | 选择框默认文字 | string | - |  |
| showArrow | 是否显示下拉小箭头 | boolean | true |  |
| size | 选择框大小，可选 `large` `small` | string | default |  |
| pagination | 分页器，参考 antd 的 pagination 文档 | object |
| suffixIcon | 自定义的选择框后缀图标 | ReactNode | - |  |
| value | 指定当前选中的条目 | string&#124;number&#124;Array&lt;any> | - |  |
| onBlur | 失去焦点时回调 | function | - |  |
| onFocus | 获得焦点时回调 | function | - |  |
| onSearch | 文本框按下回车或点击搜索按钮时回调 | function(value: string) | - |  |
| onFresh | 点击刷新按钮时回调 | function | - |  |
| onConfirm | 点击确认按钮时回调，参数为选中项 | function | - |  |
| onCancel | 点击取消按钮时回调 | function | - |  |
| onSelectChange | 被选中时调用，参数为选中项 | function(selectedRowKeys, selectedRows) | - |  |
| loading | 加载中状态 | Boolean | false |  |