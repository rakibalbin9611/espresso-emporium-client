import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UsersPage = () => {
  const initialUsers = useLoaderData();
  const [users, setUsers] = useState(initialUsers);

  // Delete User Handler
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This user will be permanently removed!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
      customClass: {
        popup: "raleway", // 👈 Tailwind font class applied here
      },
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("After delete:", data);

            // Update UI
            if (data.deletedCount > 0 || data.success) {
              const remaining = users.filter((user) => user._id !== id);
              setUsers(remaining);

              Swal.fire({
                title: "Deleted!",
                text: "User has been removed successfully.",
                icon: "success",
                customClass: {
                  popup: "raleway", // 👈 apply same font class here too
                },
              });
            } else {
              Swal.fire({
                title: "Error!",
                text: "Failed to delete user. Try again.",
                icon: "error",
                customClass: {
                  popup: "raleway",
                },
              });
            }
          })
          .catch((error) => {
            console.error(error);
            Swal.fire({
              title: "Error!",
              text: "Something went wrong. Try again later.",
              icon: "error",
              customClass: {
                popup: "raleway",
              },
            });
          });
      }
    });
  };

  return (
    <section className="min-h-screen raleway bg-[#f5f4ef] px-4 sm:px-6 lg:px-12 py-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center text-[#5b4636]">
          Registered Users
        </h2>

        {users.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">No users found.</p>
        ) : (
          <div className="overflow-x-auto rounded-lg shadow-lg bg-white">
            <table className="min-w-full table-auto">
              <thead className="bg-[#d3bfa6] text-[#3b2a1a]">
                <tr>
                  <th className="py-4 px-6 text-left text-sm sm:text-base">
                    Photo
                  </th>
                  <th className="py-4 px-6 text-left text-sm sm:text-base">
                    Name
                  </th>
                  <th className="py-4 px-6 text-left text-sm sm:text-base">
                    Email
                  </th>
                  <th className="py-4 px-6 text-left text-sm sm:text-base">
                    Phone
                  </th>
                  <th className="py-4 px-6 text-left text-sm sm:text-base">
                    Address
                  </th>
                  <th className="py-4 px-6 text-center text-sm sm:text-base">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr
                    key={user._id}
                    className="border-t hover:bg-[#f8f6f2] transition-colors duration-200"
                  >
                    <td className="py-4 px-6">
                      <img
                        src={
                          user.photoURL ||
                          "https://i.ibb.co/9n1VjYt/default-user.jpg"
                        }
                        alt={user.name || "User"}
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border border-[#c8b69e] shadow-sm"
                      />
                    </td>
                    <td className="py-4 px-6 font-medium text-[#3b2a1a] text-sm sm:text-base">
                      {user.name || "N/A"}
                    </td>
                    <td className="py-4 px-6 text-gray-700 text-sm sm:text-base break-all">
                      {user.email}
                    </td>
                    <td className="py-4 px-6 text-gray-700 text-sm sm:text-base">
                      {user.phone || "N/A"}
                    </td>
                    <td className="py-4 px-6 text-gray-700 text-sm sm:text-base">
                      {user.address || "N/A"}
                    </td>
                    <td className="py-4 px-6 text-center">
                      <button
                        onClick={() => handleDelete(user._id)}
                        className="bg-red-500 hover:bg-red-600 text-white text-sm sm:text-base font-semibold py-2 px-4 rounded-lg transition duration-300"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};

export default UsersPage;
