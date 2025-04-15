import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const Dashboard = () => {
  const [data, setData] = useState({
    turnover: 0,
    profit: 0,
    newCustomer: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const turnoverResponse = await axios.get('API_URL_FOR_TURNOVER');
        const profitResponse = await axios.get('API_URL_FOR_PROFIT');
        const customerResponse = await axios.get('API_URL_FOR_CUSTOMER');

        setData({
          turnover: turnoverResponse.data.value,
          profit: profitResponse.data.value,
          newCustomer: customerResponse.data.value,
        });
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex-1 p-5 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">Overview</h2>
      <div className="grid grid-cols-3 gap-4">
        <Card title="Turnover" value={`$${data.turnover}`} percentage="1.53%" />
        <Card title="Profit" value={`$${data.profit}`} percentage="2.68%" />
        <Card title="New Customer" value={data.newCustomer} percentage="6.84%" />
      </div>
    </div>
  );
};

export default Dashboard;