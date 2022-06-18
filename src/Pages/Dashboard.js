import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
       <div className="container">
        <div className="row">
            <div className="col-md-2">
            <nav className="nav flex-column vh-100">
                <Link to='/dashboard/homeDashboard' className="nav-link">Dashboard</Link>
                <Link to='/dashboard/allUsers' className="nav-link">All Users</Link>
            </nav>
            </div>
            <div className="col-md-10">
                <h1><h1>Welcome to Dashboard</h1></h1>
            <Outlet />
            </div>
            </div>
       </div>
    );
};

export default Dashboard;