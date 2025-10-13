import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, price, supplier, taste, category, details, photo } =
    coffee || {};
  const navigate = useNavigate();

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedCoffee = Object.fromEntries(formData.entries());
    console.log(updatedCoffee);

    fetch(`http://localhost:3000/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Coffee updated successfully!",
            icon: "success",
            draggable: true,
          });
        }
        navigate(`/coffees/${_id}`);
      });
  };

  return (
    <div className="my-20 px-4">
      {/* Main Container */}
      <div className="max-w-6xl mx-auto">
        {/* Back to Home */}
        <div className="mb-6">
          <Link
            to="/"
            className="flex items-center gap-2 text-2xl text-[#374151] font-semibold hover:text-[#b58973] transition duration-200"
          >
            <span>←</span> Back to home
          </Link>
        </div>

        {/* Update Coffee Form */}
        <div className="bg-[#F4F3F0] py-16 px-6 sm:px-10 md:px-16 rounded-2xl shadow-sm">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#374151]">
              Update Coffee
            </h2>
            <p className="raleway text-base sm:text-lg text-[#1B1A1AB3] max-w-3xl mx-auto">
              Update the coffee details below and save your changes. Make sure
              to provide all the necessary information.
            </p>
          </div>

          {/* Form Section */}
          <form onSubmit={handleUpdateCoffee} className="raleway space-y-6">
            {/* Grid Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <fieldset className="fieldset bg-white shadow-sm rounded-xl border border-base-300 p-4">
                <label className="label font-semibold text-[#374151]">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-[#D2B48C]"
                />
              </fieldset>

              <fieldset className="fieldset bg-white shadow-sm rounded-xl border border-base-300 p-4">
                <label className="label font-semibold text-[#374151]">
                  Price
                </label>
                <input
                  type="text"
                  name="price"
                  defaultValue={price}
                  className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-[#D2B48C]"
                />
              </fieldset>

              <fieldset className="fieldset bg-white shadow-sm rounded-xl border border-base-300 p-4">
                <label className="label font-semibold text-[#374151]">
                  Supplier
                </label>
                <input
                  type="text"
                  name="supplier"
                  defaultValue={supplier}
                  className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-[#D2B48C]"
                />
              </fieldset>

              <fieldset className="fieldset bg-white shadow-sm rounded-xl border border-base-300 p-4">
                <label className="label font-semibold text-[#374151]">
                  Taste
                </label>
                <input
                  type="text"
                  name="taste"
                  defaultValue={taste}
                  className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-[#D2B48C]"
                />
              </fieldset>

              <fieldset className="fieldset bg-white shadow-sm rounded-xl border border-base-300 p-4">
                <label className="label font-semibold text-[#374151]">
                  Category
                </label>
                <input
                  type="text"
                  name="category"
                  defaultValue={category}
                  className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-[#D2B48C]"
                />
              </fieldset>

              <fieldset className="fieldset bg-white shadow-sm rounded-xl border border-base-300 p-4">
                <label className="label font-semibold text-[#374151]">
                  Details
                </label>
                <input
                  type="text"
                  name="details"
                  defaultValue={details}
                  className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-[#D2B48C]"
                />
              </fieldset>
            </div>

            {/* Photo URL */}
            <fieldset className="fieldset bg-white shadow-sm rounded-xl border border-base-300 p-4">
              <label className="label font-semibold text-[#374151]">
                Photo
              </label>
              <input
                type="text"
                name="photo"
                defaultValue={photo}
                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-[#D2B48C]"
              />
            </fieldset>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn w-full bg-[#D2B48C] border border-[#331A15] hover:bg-[#b58973] text-[#331A15] font-semibold text-lg rounded-xl transition duration-300"
            >
              Update Coffee
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCoffee;
