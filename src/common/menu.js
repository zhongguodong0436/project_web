import { isUrl } from 'utils/common';
// import { check } from 'components/Authorized/Authorized';

const menuData = [
  {
    name: '系统管理',
    icon: 'windows',
    path: 'system',
    // auth: 'sys:manage',
    children: [{
      name: '用户管理',
      path: 'user',
      // auth: 'sys:staff:manage',
    }, {
      name: '角色管理',
      path: 'role',
      // auth: 'sys:role:manage',
    }, {
      name: '数据字典',
      path: 'dict',
      // auth: 'sys:dict:manage',
    }, {
      name: '组织管理',
      path: 'org',
      // auth: 'sys:org:manage',
    }, {
      name: '权限管理',
      path: 'auth',
      // auth: 'sys:perm:manage',
    }, {
      name: '参数管理',
      path: 'config',
      // auth: 'sys:config:manage',
    }, {
      name: '日志管理',
      path: 'log',
      // auth: 'sys:log:manage'
    }
    ],

  },
];


function formatter(data, parentPath = '/', parentAuth) {
  const datas = [];
  data.forEach((item) => {
    let { path } = item;
    if (!isUrl(path)) {
      path = parentPath + item.path;
    }
    const result = {
      ...item,
      path,
      auth: item.auth || parentAuth,
    };
    if (item.children) {
      result.children = formatter(item.children, `${parentPath}${item.path}/`, item.auth);
    }
    // if (check(true, item.auth, false)) {
      datas.push(result);
    // }
  });

  return datas;
}

export const getMenuData = () => formatter(menuData);

function formatterBreadcrumb(data) {
  return data.reduce((result, current) => {
    let childrenResult = {};
    if (current.children) {
      childrenResult = formatterBreadcrumb(current.children);
    }
    return {
      ...result,
      [current.path]: {
        name: current.name,
      },
      ...childrenResult,
    };
  }, {});
}

export const getBreadcrumbNameMap = () => formatterBreadcrumb(getMenuData(menuData));
