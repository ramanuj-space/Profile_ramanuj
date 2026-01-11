import React from "react";

function Gallary() {
  return (
    <div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-4">
        <div class="overflow-hidden rounded-lg shadow-lg">
          <img
            src="https://images.pexels.com/photos/35324745/pexels-photo-35324745.jpeg"
            alt="Description 1"
            class="object-cover w-full h-48"
          />
        </div>
        <div class="overflow-hidden rounded-lg shadow-lg">
          <img
            src="https://images.pexels.com/photos/30725814/pexels-photo-30725814.png"
            alt="Description 2"
            class="object-cover w-full h-48"
          />
        </div>

        <div class="overflow-hidden rounded-lg shadow-lg">
          <img
            src="https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg"
            alt="Description 3"
            class="object-cover w-full h-48"
          />
        </div>

        <div class="overflow-hidden rounded-lg shadow-lg">
          <img
            src="https://images.pexels.com/photos/35011684/pexels-photo-35011684.jpeg"
            alt="Description 4"
            class="object-cover w-full h-48"
          />
        </div>

        <div class="overflow-hidden rounded-lg shadow-lg">
          <img
            src="https://images.pexels.com/photos/3747135/pexels-photo-3747135.jpeg"
            alt="Description 5"
            class="object-cover w-full h-48"
          />
        </div>

        <div class="overflow-hidden rounded-lg shadow-lg">
          <img
            src="https://images.pexels.com/photos/3554652/pexels-photo-3554652.jpeg"
            alt="Description 6"
            class="object-cover w-full h-48"
          />
        </div>
      </div>
    </div>
  );
}

export default Gallary;
