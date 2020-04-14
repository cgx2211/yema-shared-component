# 下拉选择器的列表容器

## 何时使用

- 1、弹出一个下拉菜单给用户选择操作，下拉列表需要自定义并且带确认和取消按钮
- 2、不需要自定义时，建议直接使用 antd 的下拉列表

## 举个栗子

```tsx
<Select
  className={className}
  disabled={disabled}
  showArrow={showArrow}
  suffixIcon={suffixIcon}
  value={value}
  ref={selectRef}
  open={open}
  onFocus={onFocus}
  onBlur={onBlur}
  placeholder={placeholder}
  size={size}
  dropdownRender={() => (
    <SelectDropdown
      onMouseEnter={() => isFocus(true)}
      onMouseLeave={() => isFocus(false)}
      ok={ok}
      cancel={cancel}
    >
      <div className="yema-select-keysearch">
        <span className="yema-select-keysearch__label">{label}</span>
        <Search onSearch={onSearch} loading={loading} />
        <span className="yema-select-keysearch__control">
          <Button
            size="small"
            type="primary"
            onClick={onFresh}
            icon={<SyncOutlined />}
          />
        </span>
      </div>
      <Table
        columns={columns}
        dataSource={dataSource}
        rowKey={rowKey}
        rowSelection={{
          fixed: true,
          type: 'radio',
          onChange: onSelect,
        }}
      />
    </SelectDropdown>
  )}
/>
/>
```

### Select props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| className | 下拉菜单的 className 属性 | string | - |  |
| children | 子元素 | ReactNode | - |  |
| onMouseEnter | 鼠标进入时回调 | function | - |  |
| onMouseLeave | 鼠标离开时回调 | function | - |  |
| ok | 点击确认时回调 | function | - |  |
| cancel | 点击取消时回调 | function | - |  |