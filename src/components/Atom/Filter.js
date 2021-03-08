import React from "react";

const Filter = () => {
  return (
    <div className="container">
      <div className="container mx-auto desktop mb-2 md:mb-10">
        <div className="w-full md:w-5/6 mx-auto bg-white p-6 rounded-md shadow-lg">
          <p className="text-left text-xl ff font-semibold mb-1">
            Find an amazing event on Hostnotes
          </p>

          <div class="w-full">
            <form method="GET">
              <input
                type="search"
                name="q"
                class="bg-purple-white bg-gray-200 shadow rounded border-0 p-3 w-full"
                placeholder="Search for an event on Hostnotes..."
                value=""
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
