import React from 'react';
import { connect } from 'dva';
import Redirect from 'umi/redirect';

function IndexPage() {
    return <Redirect to="/admin/login"/>
}

export default connect()(IndexPage)