import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
       <div className="container mt-3">
            <div className="row">
                <div className="col-md-2 sticky='top">
                    <nav className="nav flex-column vh-100">
                        <Link to='/dashboard' className="nav-link">All products</Link>
                        <Link to='/dashboard/allUsers' className="nav-link">All Users</Link>
                        <Link to='/dashboard/productAdd' className="nav-link">Product Add</Link>
                        <Link to='/dashboard/myOrder' className="nav-link">My Order</Link>
                        <Link to='/dashboard/blogAdd' className="nav-link">Add Blog</Link>
                    </nav>
                </div>
                <div className="col-md-10">
                    <h1>Welcome to Dashboard</h1>
                    <Outlet />
                </div>
            </div>
       </div>
    );
};

export default Dashboard;