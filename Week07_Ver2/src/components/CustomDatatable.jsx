import React, { useState, useEffect, useRef } from 'react';

const CustomDatatable = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editCustomer, setEditCustomer] = useState(null);
  const displayLimit = 10;
  const modalRef = useRef(null); // Ref để tham chiếu đến nội dung modal

  // Hàm tạo dữ liệu giả lập cho Order Value, Order Date, Status
  const generateRandomData = () => {
    const statuses = ["New", "In-progress", "Completed"];
    const orderValue = Math.floor(Math.random() * 10000) + 1000;
    const randomDate = new Date(
      Date.now() - Math.floor(Math.random() * 10000000000)
    ).toISOString().split('T')[0];
    const status = statuses[Math.floor(Math.random() * statuses.length)];
    return { orderValue, orderDate: randomDate, status };
  };

  // Tải dữ liệu từ API
  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        const mappedData = data.slice(0, displayLimit).map((user, index) => {
          const { orderValue, orderDate, status } = generateRandomData();
          return {
            id: user.id,
            customer: user.name,
            company: user.company.name,
            orderValue: orderValue.toString(),
            orderDate,
            status,
          };
        });
        setCustomers(mappedData);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
        setLoading(false);
      });
  }, []);

  // Mở modal và điền dữ liệu khách hàng vào form
  const handleEditClick = (customer) => {
    setEditCustomer(customer);
    setShowEditModal(true);
  };

  // Cập nhật giá trị trong form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditCustomer((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Gọi API PUT để cập nhật dữ liệu và commit thay đổi
  const handleSave = () => {
    if (!editCustomer) return;

    fetch(`https://jsonplaceholder.typicode.com/users/${editCustomer.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: editCustomer.id,
        name: editCustomer.customer,
        company: { name: editCustomer.company },
        orderValue: editCustomer.orderValue,
        orderDate: editCustomer.orderDate,
        status: editCustomer.status,
      }),
    })
      .then((res) => res.json())
      .then((updatedData) => {
        setCustomers((prev) =>
          prev.map((customer) =>
            customer.id === editCustomer.id ? editCustomer : customer
          )
        );
        setShowEditModal(false);
        setEditCustomer(null);
      })
      .catch((err) => console.error('Error updating data:', err));
  };

  // Đóng modal khi click bên ngoài
  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setShowEditModal(false);
      setEditCustomer(null);
    }
  };

  if (loading) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  return (
    <div className="mt-8">
      {/* Tiêu đề bảng */}
      <div className="flex items-center p-3 mb-4">
        <img src="./image/File text 1.png" className="mr-2 h-5" alt="Report Icon" />
        <h2 className="font-bold text-lg">Detailed report</h2>
      </div>

      {/* Modal chỉnh sửa */}
      {showEditModal && editCustomer && (
        <div
          className="fixed inset-0 bg-gray-30 bg-opacity-40 flex items-center justify-center z-50"
          onClick={handleClickOutside}
        >
          <div
            ref={modalRef}
            className="bg-white p-6 rounded-lg w-full max-w-md border border-gray-400"
            onClick={(e) => e.stopPropagation()} // Ngăn chặn sự kiện click từ modal lan ra ngoài
          >
            <h3 className="text-xl font-bold mb-4">Edit Customer</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Customer Name</label>
                <input
                  type="text"
                  name="customer"
                  value={editCustomer.customer}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-pink-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Company</label>
                <input
                  type="text"
                  name="company"
                  value={editCustomer.company}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-pink-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Order Value</label>
                <input
                  type="text"
                  name="orderValue"
                  value={editCustomer.orderValue}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-pink-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Order Date</label>
                <input
                  type="date"
                  name="orderDate"
                  value={editCustomer.orderDate}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-pink-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Status</label>
                <select
                  name="status"
                  value={editCustomer.status}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-pink-400"
                >
                  <option value="New">New</option>
                  <option value="In-progress">In-progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={() => setShowEditModal(false)}
                className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="bg-pink-400 text-white px-4 py-2 rounded hover:bg-pink-500"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

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
                  <button onClick={() => handleEditClick(customer)}>
                    <img src="./image/create.png" alt="Edit" className="h-5" />
                  </button>
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