import React from 'react';
import classNames from 'classnames/bind';
import styles from './login.module.scss';

let cx = classNames.bind(styles);


export type ILoginProps = {
    title: string;
}

const Login: React.FC<ILoginProps> = ({ title }) => (
    <div className={cx('test')}>{title}</div>
);

export { Login };
