import React, {Component, Fragment} from 'react';
import {connect} from 'dva';
import {Form, Input, Button, Icon, Checkbox, Row, Col, Alert} from 'antd';
import DocumentTitle from 'react-document-title';
import styles from './login.less';
import GlobalFooter from 'components/GlobalFooter';

const FormItem = Form.Item;

class LoginRoute extends Component {
    render() {
        const { form, login } = this.props;
        const {getFieldDecorator} = form;
        return (
            <DocumentTitle title={`登录 - 开发环境搭建`}>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <div className={styles.top}>
                            <div className={styles.header}>
                                <span className={styles.logo}>开发环境搭建</span>
                            </div>
                            <div className={styles.desc}>登录页</div>
                        </div>
                        <div className={styles.main}>
                            <Form onSubmit={this.handleSubmit}>
                                <FormItem>
                                    {getFieldDecorator('username', {
                                        // rules: [{
                                        //     required: login.loginType === 'account', message: '请输入账户名！',
                                        // }],
                                    })(
                                        <Input
                                            size="large"
                                            prefix={<Icon type="user" className={styles.prefixIcon}/>}
                                            placeholder="请输入账户名"
                                        />,
                                    )}
                                </FormItem>
                                <FormItem>
                                    {getFieldDecorator('password', {
                                        // rules: [{
                                        //     required: login.loginType === 'account', message: '请输入密码！',
                                        // }],
                                    })(
                                        <Input
                                            size="large"
                                            prefix={<Icon type="lock" className={styles.prefixIcon}/>}
                                            type="password"
                                            placeholder="请输入密码"
                                        />,
                                    )}
                                </FormItem>
                                {/*<FormItem>*/}
                                {/*    <Row gutter={8}>*/}
                                {/*        <Col span={16}>*/}
                                {/*            {getFieldDecorator('captcha', {*/}
                                {/*                rules: [{*/}
                                {/*                    required: login.loginType === 'account',*/}
                                {/*                    message: '请输入验证码！',*/}
                                {/*                    len: 1,*/}
                                {/*                }],*/}
                                {/*            })(*/}
                                {/*                <Input*/}
                                {/*                    size="large"*/}
                                {/*                    prefix={<Icon type="mail" className={styles.prefixIcon}/>}*/}
                                {/*                    placeholder="验证码"*/}
                                {/*                />,*/}
                                {/*            )}*/}
                                {/*        </Col>*/}
                                {/*        <Col span={8}>*/}
                                {/*            <img*/}
                                {/*                width="117"*/}
                                {/*                height="40"*/}
                                {/*                alt="验证码"*/}
                                {/*                onClick={this.changeRandCode}*/}
                                {/*                src={`${window.api_host}/captcha?time=${time}`}*/}
                                {/*            />*/}
                                {/*        </Col>*/}
                                {/*    </Row>*/}
                                {/*</FormItem>*/}

                                <FormItem className={styles.additional}>
                                    {/*{getFieldDecorator('remember', {*/}
                                    {/*valuePropName: 'checked',*/}
                                    {/*initialValue: true,*/}
                                    {/*})(*/}
                                    {/*<Checkbox className={styles.autoLogin}>自动登录</Checkbox>,*/}
                                    {/*)}*/}
                                    {/* <a className={styles.forgot} href="">忘记密码</a> */}
                                    <Button size="large"  className={styles.submit}
                                            // loading={login.submitting}
                                            type="primary"
                                            htmlType="submit">
                                        登录
                                    </Button>
                                </FormItem>
                            </Form>
                        </div>
                    </div>
                    <GlobalFooter/>
                </div>
            </DocumentTitle>
        )
    }
}
export default Form.create()(LoginRoute);
