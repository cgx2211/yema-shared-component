import React, { useState, useEffect } from 'react';
import {
  Button, Drawer,
} from 'antd';
import {
  PicLeftOutlined, AppstoreOutlined,
} from '@ant-design/icons';
import { IYemaDrawerProp } from './index.d';
import styles from './yema-drawer.module.scss';

export const YemaDrawer = (props: IYemaDrawerProp) => {
  const { appList } = props;
  const [showDrawer, setshowDrawer] = useState(false);
  const [showList, setshowList] = useState([
    { name: '供应商管理', url: `${window.location.origin}/platform` },
    { name: '物料管理', url: `${window.location.origin}/material` },
  ]);

  useEffect(() => {
    if (appList && appList.length > 0) {
      setshowList(appList);
    }
  }, [appList]);

  const onClose = () => {
    setshowDrawer(false);
  };

  const getAppList = () => showList.map((el, index) => (
    <p key={`${index + 1}`}><a href={el.url}>{el.name}</a></p>
  ));

  return (
    <>
      <Button
        className={styles.drawerbtn}
        size="large"
        onClick={() => { setshowDrawer(true); }}
      >
        <PicLeftOutlined style={{ fontSize: '24px' }} />
      </Button>
      <Drawer
        title={(
          <>
            <AppstoreOutlined style={{ marginRight: '8px' }} />
            全部应用
          </>
        )}
        placement="left"
        closable={false}
        onClose={onClose}
        visible={showDrawer}
      >
        {getAppList()}
      </Drawer>
    </>
  );
};

export default YemaDrawer;
