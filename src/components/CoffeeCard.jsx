import { Eye, Pencil, Trash2 } from "lucide-react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const { _id, price, name, photo, supplier } = coffee;

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      console.log(result.isConfirmed);
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/coffees/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0)
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
          });
      }
    });
  };

  return (
    <div className="bg-[#F5F4F1] rounded-2xl flex flex-col sm:flex-row items-center justify-between p-6 shadow-sm hover:shadow-md transition">
      {/* Left: Coffee Image */}
      <div className="flex-shrink-0">
        <img
          src={photo}
          alt={name}
          className="w-32 h-40 object-cover rounded-md"
        />
      </div>

      {/* Middle: Coffee Info */}
      <div className="flex-1 text-center sm:text-left sm:pl-8 mt-4 sm:mt-0 raleway space-y-2">
        <p className="text-lg font-semibold text-[#1B1A1A]">
          Name: <span className="font-normal text-[#5C5C5C]">{name}</span>
        </p>
        <p className="text-lg font-semibold text-[#1B1A1A]">
          Supplier:{" "}
          <span className="font-normal text-[#5C5C5C]">{supplier}</span>
        </p>
        <p className="text-lg font-semibold text-[#1B1A1A]">
          Price:{" "}
          <span className="font-normal text-[#5C5C5C]">{price} Taka</span>
        </p>
      </div>

      {/* Right: Action Buttons */}
      <div className="flex flex-row sm:flex-col gap-3 mt-4 sm:mt-0">
        <Link
          to={`/coffees/${_id}`}
          className="bg-[#D2B48C] text-white p-2 rounded-md hover:opacity-90 transition"
        >
          <Eye size={20} />
        </Link>
        <button className="bg-[#3C3C3C] text-white p-2 rounded-md hover:opacity-90 transition">
          <Pencil size={20} />
        </button>
        <button
          onClick={() => handleDelete(`${_id}`)}
          className="bg-[#EA4744] text-white p-2 rounded-md hover:opacity-90 transition"
        >
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
