import { Link } from 'react-router-dom';
import config from '~/config';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Home() {
    return <h1>HomePage</h1>;
}

export default Home;
