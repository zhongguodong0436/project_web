import React, {Fragment} from 'react';
import { Icon } from 'antd';
import classNames from 'classnames';
import styles from './index.less';

export default ({ className, links }) => {
    const copyright = <Fragment>Copyright <Icon type="copyright" /> 2019.10 张召强 仲国栋</Fragment>;
    const clsString = classNames(styles.globalFooter, className);
    return (
        <div className={clsString}>
            {
                links && (
                    <div className={styles.links}>
                        {links.map(link => (
                            <a
                                key={link.title}
                                target={link.blankTarget ? '_blank' : '_self'}
                                href={link.href}
                            >
                                {link.title}
                            </a>
                        ))}
                    </div>
                )
            }
            {copyright && <div className={styles.copyright}>{copyright}</div>}
        </div>
    );
};
