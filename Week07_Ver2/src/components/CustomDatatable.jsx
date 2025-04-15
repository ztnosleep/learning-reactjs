import React from 'react';

const CustomDatatable = () => {
  // Dữ liệu tĩnh hard-coded
  const customers = [
    {
      customer: "John Doe",
      company: "ABC Corp",
      orderValue: "5000",
      orderDate: "2023-10-01",
      status: "New",
    },
    {
      customer: "Jane Smith",
      company: "XYZ Inc",
      orderValue: "7500",
      orderDate: "2023-11-15",
      status: "In-progress",
    },
    {
      customer: "Mike Johnson",
      company: "Tech Ltd",
      orderValue: "3000",
      orderDate: "2023-12-20",
      status: "Completed",
    },
  ];

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