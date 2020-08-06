import React from 'react'
import Sidebar from '../../components/Admin/Common/Sidebar'
import Topbar from '../../components/Admin/Common/TopBar'
import Footer from '../../components/Admin/Common/Footer'
import '../../assets/css/admin/main.scss'


export default ({ children }) => {
    return (
        <div className="App">
        <div className="admin-page">
           <Topbar />
         <div id="layoutSidenav">
           <Sidebar />
           <div id="layoutSidenav_content">
             {children}
             <Footer />
           </div>
         </div>

        </div>
        </div>

    )
}

