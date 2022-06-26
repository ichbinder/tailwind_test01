import React from 'react';
import second from './login.module.scss'

export type ILoginProps = {
    title: string;
}

const Login: React.FC<ILoginProps> = ({ title }) => (
    <div className={second.test}>{title}</div>
);

export { Login };
