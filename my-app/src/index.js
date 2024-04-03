import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import App from './App';
import Library from "./chapter03/Library";
import Hello from "./chapter03/Hello";
import Hello2 from "./chapter03/Hello2";
import ConfirmDialog from './chapter04/ConfirmDialog';
import Clock from './chapter04/Clock';
import CommentList from './chapter05/CommentList'
import Comment from './chapter05_ex/Comment';
import First from "./chapter05_ex2/First";
import Second from "./chapter05_ex2/Second";
import NotificationList from './chapter06/NotificationList';
import Counter from './chapter07/Counter';
import Counter2 from './chapter07/Counter2';
import Accommodate from './chapter07_ex/Accommodate';
import LikeFeature from './chapter07_ex/Recommend1';
import Recommend from './chapter07_ex/Recommend2';
import Gugudan from './chapter07_ex2/Gugudan';
import Gugufunction from './chapter07_ex2/Gugufunction';
import GuguGPT from './chapter07_ex2/GuguGPT';
import WordRelay from './chapter07_ex2/WordRelay';
import ConfirmButton from './chapter08/ConfirmButton';
import MailBox from './chapter09/MailBox';
import Counter3 from './chapter09/MailBox';
import LoginControl from './chapter09/LoginControl';
import MainPage from './chapter09/MainPage';
import LandingPage from './chapter09_ex/LandingPage';
import LoginPage from './chapter09_ex/LoginPage';
import LoginPage2 from './chapter09_ex/LoginPage2';
import NumberList from './chapter10/NumberList';
import AttendanceBook from './chapter10_ex/AttendanceBook';
import FruitSelect from "./chapter11/FruitSelect";
import Reservation from "./chapter11/Reservation";
import SignUp from "./chapter11_ex/SignUp";
import Pet from "./chapter11_ex/Pet";
import Pet2 from "./chapter11_ex2/Pet2";
import Diary from "./chapter11_ex3/Diary";
import Diary2 from "./chapter11_ex4/Diary2";
import Calculator from "./chapter12/Calculator";
import ProfileCard from "./chapter13/ProfileCard";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Diary />
    </React.StrictMode>
);

reportWebVitals();
