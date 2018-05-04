import React from 'react';
import { render } from 'react-dom';
import Counter from './components/Counter';
import './styles.less';

const appHTMLContainer = document.getElementById('app');

render(
    <Counter />,
    appHTMLContainer
);
