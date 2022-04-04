import React from 'react';
import MonthToInvesment from '../MyChart/MonthToInvesment';
import MonthToRevenue from '../MyChart/MonthToRevenue';
import MonthToSell from '../MyChart/MonthToSell';
import SellToRevenue from '../MyChart/SellToRevenue';

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <div className='chart'>
            <div className='chart-item'>
            <MonthToSell></MonthToSell>
            </div>
            <div className='chart-item'>
                <MonthToRevenue></MonthToRevenue>
            </div>
            <div className='chart-item'>
                <MonthToInvesment></MonthToInvesment>
            </div>
            <div className='chart-item'>
                <SellToRevenue></SellToRevenue>
            </div>
            </div>
        </div>
    );
};

export default Dashboard;