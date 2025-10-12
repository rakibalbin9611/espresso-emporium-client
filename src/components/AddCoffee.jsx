import { Link } from "react-router";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData.entries());
    console.log(newCoffee);

    fetch("http://localhost:3000/coffees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Coffee added successfully!",
            icon: "success",
            draggable: true,
          });
          form.reset();
        }
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
            <span className="">←</span> Back to home
          </Link>
        </div>

        {/* Add Coffee Form */}
        <div className="bg-[#F4F3F0] py-16 px-6 sm:px-10 md:px-16 rounded-2xl shadow-sm">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#374151]">
              Add New Coffee
            </h2>
            <p className="raleway text-base sm:text-lg text-[#1B1A1AB3] max-w-3xl mx-auto">
              Add your favorite coffee to the collection by filling out the
              details below. Provide the name, chef, supplier, taste, category,
              and a photo so that everyone can discover and enjoy it.
            </p>
          </div>

          {/* Form Section */}
          <form onSubmit={handleAddCoffee} className="raleway space-y-6">
            {/* Grid Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <fieldset className="fieldset bg-white shadow-sm rounded-xl border border-base-300 p-4">
                <label className="label font-semibold text-[#374151]">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-[#D2B48C]"
                  placeholder="Enter coffee name"
                />
              </fieldset>

              <fieldset className="fieldset bg-white shadow-sm rounded-xl border border-base-300 p-4">
                <label className="label font-semibold text-[#374151]">
                  Price
                </label>
                <input
                  type="text"
                  name="price"
                  className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-[#D2B48C]"
                  placeholder="Enter coffee price"
                />
              </fieldset>

              <fieldset className="fieldset bg-white shadow-sm rounded-xl border border-base-300 p-4">
                <label className="label font-semibold text-[#374151]">
                  Supplier
                </label>
                <input
                  type="text"
                  name="supplier"
                  className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-[#D2B48C]"
                  placeholder="Enter coffee supplier"
                />
              </fieldset>

              <fieldset className="fieldset bg-white shadow-sm rounded-xl border border-base-300 p-4">
                <label className="label font-semibold text-[#374151]">
                  Taste
                </label>
                <input
                  type="text"
                  name="taste"
                  className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-[#D2B48C]"
                  placeholder="Enter coffee taste"
                />
              </fieldset>

              <fieldset className="fieldset bg-white shadow-sm rounded-xl border border-base-300 p-4">
                <label className="label font-semibold text-[#374151]">
                  Category
                </label>
                <input
                  type="text"
                  name="category"
                  className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-[#D2B48C]"
                  placeholder="Enter coffee category"
                />
              </fieldset>

              <fieldset className="fieldset bg-white shadow-sm rounded-xl border border-base-300 p-4">
                <label className="label font-semibold text-[#374151]">
                  Details
                </label>
                <input
                  type="text"
                  name="details"
                  className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-[#D2B48C]"
                  placeholder="Enter coffee details"
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
                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-[#D2B48C]"
                placeholder="Enter photo URL"
              />
            </fieldset>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn w-full bg-[#D2B48C] border border-[#331A15] hover:bg-[#b58973] text-[#331A15] font-semibold text-lg rounded-xl transition duration-300"
            >
              Add Coffee
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCoffee;
