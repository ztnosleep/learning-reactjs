import React, { useState, useEffect } from 'react';

const CustomDatatable = () => {
  const [customers, setCustomers] = useState([]);

  const generateRandomData = () => {
    const statuses = ["New", "In-progress", "Completed"];
    const orderValue = Math.floor(Math.random() * 10000) + 1000; 
    const randomDate = new Date(
      Date.now() - Math.floor(Math.random() * 10000000000)
    ).toISOString().split('T')[0];
    const status = statuses[Math.floor(Math.random() * statuses.length)]; 
    return { orderValue, orderDate: randomDate, status };
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
 
        const mappedData = data.map((user) => {
          const { orderValue, orderDate, status } = generateRandomData();
          return {
            customer: user.name,
            company: user.company.name,
            orderValue: orderValue.toString(),
            orderDate,
            status,
          };
        });
        setCustomers(mappedData);
      })
      .catch((err) => console.error('Error fetching data:', err));
  }, []);

  return (
    <div className="mt-8">
      {/* Tiêu đề bảng */}
      <div className="flex items-center p-3 mb-4">
        <img src="./image/File text 1.png" className="mr-2 h-5" alt="Report Icon" />
        <h2 className="font-bold text-lg">Detailed report</h2>
      </div>

      {/* Bảng dữ liệu */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-50">
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <input type="checkbox" disabled />
              </th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Customer Name
              </th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Company
              </th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Order Value
              </th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Order Date
              </th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {customers.map((customer, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
                  <input type="checkbox" disabled />
                </td>
                <td className="py-4 px-6 whitespace-nowrap text-sm font-medium text-gray-900">
                  {customer.customer}
                </td>
                <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
                  {customer.company}
                </td>
                <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500 font-medium">
                  {customer.orderValue}
                </td>
                <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
                  {customer.orderDate}
                </td>
                <td className="py-4 px-6 whitespace-nowrap">
                  <span
                    className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      customer.status === 'New'
                        ? 'bg-blue-100 text-blue-800'
                        : customer.status === 'In-progress'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-green-100 text-green-800'
                    }`}
                  >
                    {customer.status}
                  </span>
                </td>
                <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
                  <img src="./image/create.png" alt="Edit" className="h-5" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomDatatable;