import { ThemeSwitcherProvider } from 'react-css-theme-switcher';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './index.css';
import reportWebVitals from './reportWebVitals';
import RouterComponent from './routes';
import store from './store';

import Toast from '@/components/ToastNotification/index';
import { themes } from '@/theme/theme';
import 'antd/dist/antd.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <ThemeSwitcherProvider themeMap={themes} defaultTheme="light">
            <RouterComponent />
            <Toast />
        </ThemeSwitcherProvider>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
