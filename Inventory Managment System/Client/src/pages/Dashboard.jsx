import DashboardLayout from '../layouts/DashboardLayout';
import '../Dashboard.css';

function Dashboard() {
    return (
        <DashboardLayout>
            <div className="dashboard">
                <div className="dashboard-header">
                    <h1>Dashboard Inventory</h1>
                    <h2>Welcome to your inventory dashboard</h2>
                </div>

                <div className="cards">
                    <div className="card">
                        <h3>Total Stock</h3>
                    </div>
                    <div className="card">
                        <h3>Total Customers</h3>
                    </div>
                    <div className="card">
                        <h3>Total Categories</h3>
                    </div>
                </div>

                <div className="charts">
                    <div className="chart">
                        <h3>Monthly GSN chart</h3>
                    </div>
                    <div className="chart">
                        <h3>Monthly Stock Out Chart</h3>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}

export default Dashboard;