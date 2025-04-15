import React, { useState, useEffect, useRef } from 'react';

const CustomDatatable = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editCustomer, setEditCustomer] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false); // State cho modal Add User
  const [newCustomer, setNewCustomer] = useState({
    customer: '',
    company: '',
    orderValue: '',
    orderDate: '',
    status: 'New',
  });
  const displayLimit = 10;
  const modalRef = useRef(null);
  const addModalRef = useRef(null); // Ref cho modal Add User

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

  // Mở modal chỉnh sửa
  const handleEditClick = (customer) => {
    setEditCustomer(customer);
    setShowEditModal(true);
  };

  // Cập nhật giá trị trong form chỉnh sửa
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditCustomer((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Gọi API PUT để cập nhật dữ liệu và commit thay đổi
  const handleSaveEdit = () => {
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

  // Đóng modal chỉnh sửa khi click bên ngoài
  const handleClickOutsideEdit = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setShowEditModal(false);
      setEditCustomer(null);
    }
  };

  // Mở modal Add User
  const handleAddClick = () => {
    setNewCustomer({
      customer: '',
      company: '',
      orderValue: '',
      orderDate: '',
      status: 'New',
    });
    setShowAddModal(true);
  };

  // Cập nhật giá trị trong form Add User
  const handleAddInputChange = (e) => {
    const { name, value } = e.target;
    setNewCustomer((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Gọi API POST để thêm khách hàng mới
  const handleSaveAdd = () => {
    if (!newCustomer.customer || !newCustomer.company) return; // Validation đơn giản

    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: newCustomer.customer,
        company: { name: newCustomer.company },
        orderValue: newCustomer.orderValue,
        orderDate: newCustomer.orderDate,
        status: newCustomer.status,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // Thêm khách hàng mới vào state (dùng id từ API trả về)
        setCustomers((prev) => [
          ...prev,
          {
            id: data.id || Date.now(), // API giả lập trả về id, nếu không thì dùng timestamp
            customer: newCustomer.customer,
            company: newCustomer.company,
            orderValue: newCustomer.orderValue,
            orderDate: newCustomer.orderDate,
            status: newCustomer.status,
          },
        ]);
        setShowAddModal(false);
        setNewCustomer({
          customer: '',
          company: '',
          orderValue: '',
          orderDate: '',
          status: 'New',
        });
      })
      .catch((err) => console.error('Error adding data:', err));
  };

  // Đóng modal Add User khi click bên ngoài
  const handleClickOutsideAdd = (e) => {
    if (addModalRef.current && !addModalRef.current.contains(e.target)) {
      setShowAddModal(false);
      setNewCustomer({
        customer: '',
        company: '',
        orderValue: '',
        orderDate: '',
        status: 'New',
      });
    }
  };

  if (loading) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  return (
    <div className="mt-8">
      {/* Tiêu đề bảng và nút Add User */}
      <div className="flex items-center justify-between p-3 mb-4">
        <div className="flex items-center">
          <img src="./image/File text 1.png" className="mr-2 h-5" alt="Report Icon" />
          <h2 className="font-bold text-lg">Detailed report</h2>
        </div>
        <button
          onClick={handleAddClick}
          className="bg-pink-400 text-white px-4 py-2 rounded hover:bg-pink-500"
        >
          Add User
        </button>
      </div>

      {/* Modal chỉnh sửa */}
      {showEditModal && editCustomer && (
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-40 flex items-center justify-center z-50"
          onClick={handleClickOutsideEdit}
        >
          <div
            ref={modalRef}
            className="bg-white p-6 rounded-lg w-full max-w-md border border-gray-300"
            onClick={(e) => e.stopPropagation()}
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
                onClick={handleSaveEdit}
                className="bg-pink-400 text-white px-4 py-2 rounded hover:bg-pink-500"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal thêm khách hàng mới */}
      {showAddModal && (
        <div
          className="fixed inset-0  flex items-center justify-center z-50"
          onClick={handleClickOutsideAdd}
        >
          <div
            ref={addModalRef}
            className="bg-white p-6 rounded-lg w-full max-w-md border border-gray-300"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold mb-4">Add New Customer</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Customer Name</label>
                <input
                  type="text"
                  name="customer"
                  value={newCustomer.customer}
                  onChange={handleAddInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-pink-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Company</label>
                <input
                  type="text"
                  name="company"
                  value={newCustomer.company}
                  onChange={handleAddInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-pink-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Order Value</label>
                <input
                  type="text"
                  name="orderValue"
                  value={newCustomer.orderValue}
                  onChange={handleAddInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-pink-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Order Date</label>
                <input
                  type="date"
                  name="orderDate"
                  value={newCustomer.orderDate}
                  onChange={handleAddInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-pink-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Status</label>
                <select
                  name="status"
                  value={newCustomer.status}
                  onChange={handleAddInputChange}
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
                onClick={() => setShowAddModal(false)}
                className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveAdd}
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