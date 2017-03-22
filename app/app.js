import './styles/app.css';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { App } from './config/routes';

const mountingPoint = document.getElementById('app');
ReactDom.render(<App />, mountingPoint);
