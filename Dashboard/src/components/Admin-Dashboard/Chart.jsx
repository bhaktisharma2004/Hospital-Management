import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";

const Chart = () => {
  const [appointments, setAppointments] = useState([
    { name: "Chance Vaccaro", date: "10.01.2003 12:54", status: "Pending" },
    { name: "Desirae Kenter", date: "04.12.2003 03:21", status: "Rejected" },
    { name: "Paityn Lubin", date: "10.01.2003 12:54", status: "Pending" },
    { name: "Phillip Bator", date: "04.12.2003 03:21", status: "Pending" },
    { name: "Emerson Stanton", date: "10.01.2003 12:54", status: "Accept" },
    {
      name: "Alfredo Rhiel Madsen",
      date: "03.08.2019 12:54",
      status: "Rejected",
    },
  ]);

  const [activeRow, setActiveRow] = useState(null);

  const handleStatusChange = (index, newStatus) => {
    const updated = [...appointments];
    updated[index].status = newStatus;
    setAppointments(updated);
    setActiveRow(null); // Hide buttons after selection
  };

  const handleToggle = (index) => {
    setActiveRow(prev => (prev === index ? null : index));
  };
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    axios
      .get("../../data/patient.json")
      .then((response) => {
        setData(response.data.chartData);
        setTotal(response.data.totalPatients);
      })
      .catch((error) => console.error("Error fetching chart data", error));
  }, []);

  return (
    <div className="flex">
      <div className="left bg-yellow-100 p-2 ml-10 w-125 h-100  rounded-2xl shadow-md">
        <div className="flex justify-between items-center ">
          <h2 className="text-xl font-semibold text-gray-700">Patients</h2>
          <span className="text-sm text-gray-500">Last 7 days</span>
        </div>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="count"
              stroke="#4F46E5"
              strokeWidth={3}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>

        <div className=" text-sm text-gray-600">
          <p>
            All time: <strong>{total}</strong>
          </p>
          <p>
            30 days: <strong>{total}</strong>
          </p>
          <p>
            7 days: <strong>{total}</strong>
          </p>
        </div>
      </div>

      <div className="right w-125  ">
        <div className="right bg-white p-4 ml-4 w-full rounded-2xl shadow-md">
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-700">
              Appointments
            </h2>
            <div className="flex gap-4 text-sm text-gray-500 mt-1">
              <span className="border-b-2 border-indigo-500 pb-1">
                Appointments
              </span>
              <span className="pb-1">Two tab</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left text-gray-600">
              <thead className="text-xs uppercase text-gray-500">
                <tr>
                  <th className="px-4 py-2">First Name Last Name</th>
                  <th className="px-4 py-2">Date</th>
                  <th className="px-4 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((item, idx) => (
                  <tr key={idx} className="border-b">
                    <td className="px-4 py-2 font-medium">{item.name}</td>
                    <td className="px-4 py-2">{item.date}</td>
                    <td className="px-4 py-2">
                      {item.status === "Pending" && activeRow === idx ? (
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleStatusChange(idx, "Accept")}
                            className="px-2 py-1 text-xs bg-green-100 text-green-600 rounded-full font-semibold hover:bg-green-200"
                          >
                            Accept
                          </button>
                          <button
                            onClick={() => handleStatusChange(idx, "Rejected")}
                            className="px-2 py-1 text-xs bg-red-100 text-red-600 rounded-full font-semibold hover:bg-red-200"
                          >
                            Reject
                          </button>
                        </div>
                      ) : item.status === "Pending" ? (
                        <button
                          onClick={() => handleToggle(idx)}
                          className="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded-full font-semibold hover:bg-blue-200"
                        >
                          Pending
                        </button>
                      ) : (
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            item.status === "Rejected"
                              ? "bg-red-100 text-red-600"
                              : "bg-green-100 text-green-600"
                          }`}
                        >
                          {item.status}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center space-x-2">
              <button className="px-2 py-1 rounded-full text-gray-500 hover:bg-gray-200">
                &lt;
              </button>
              {[1, 2, 3, "...", 13].map((p, idx) => (
                <button
                  key={idx}
                  className={`px-3 py-1 rounded-full ${
                    p === 1
                      ? "bg-indigo-100 text-indigo-600 font-semibold"
                      : "text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {p}
                </button>
              ))}
              <button className="px-2 py-1 rounded-full text-gray-500 hover:bg-gray-200">
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
