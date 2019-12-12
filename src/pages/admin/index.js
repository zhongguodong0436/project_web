import React from 'react';
import { connect } from 'dva';
import Redirect from 'umi/redirect';
import { getMenuData } from 'common/menu';

function IndexPage({ loginFlag }) {

  //两种思路实现：1.跳转到menu.js的第一个有权限的菜单
  //              2.跳转到公共的界面

  const menuData = getMenuData();
  let firstPageUrl = "/system/user";
  try {
    menuData.forEach((item, index) => {
      const children = item.children;
      if (children && children.length > 0) {
        firstPageUrl = children[0].path;
        throw new Error("EndIterative");
      } else {
        firstPageUrl = item.path;
        throw new Error("EndIterative");
      }
    })
  }catch(e) {
    if(e.message!="EndIterative") throw e;
  };
  return <Redirect to={firtPageUrl} />;
}

IndexPage.propTypes = {
};

const mapStateToProps = (state) => {
  return {
    loginFlag: state.global.loginFlag,
  };
};

export default connect(mapStateToProps)(IndexPage);
