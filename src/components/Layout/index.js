import './index.scss'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className="App">
            <Navbar />
            {/* <div className="Page"> */}
                {/* <span className="tags top-tags">&lt;body&gt;</span> */}

            <Outlet />
                {/* <span className="tags bottom-tags">
                    &lt;/body&gt;
                    <br />
                    <span className="bottom-tag-html">&lt;/html&gt;</span>
                </span> */}
            {/* </div> */}
        </div>
    )
}

export default Layout