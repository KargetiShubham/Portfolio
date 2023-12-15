import './index.scss';
import Sidebar from '../Sidebar/index.js';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return( 
        <div className='App'>
            <Sidebar/>
            <div className='page'>
                <span className='tags top-tags'>&lt;body&gt;</span>
                <span className='tags bottom-tags'>
                    &lt;/body&gt;
                    <br/>
                    <span className='bottom-tag-html' > &lt;/html&gt;</span>
                </span>
                <Outlet/>
            </div>
        </div>
    )
}

export default Layout;