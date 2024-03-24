import React from "react";
function Profile() {
  return (
    <div>
      <div className="w-[200px] h-[200px] ">
        <img
          src="/men.jpg"
          alt="profile-image"
          className="  flex justify-center w-full h-full rounded-full"
        />
      </div>
      <div>
        <p>Name</p>
        <p>email</p>
        <p>contact</p>
        <p>Address</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dicta
          quisquam deleniti, nisi, aliquam unde corrupti et, fuga magnam
          incidunt magni accusamus illum sint. Officiis dolorem minima vitae
          tempore blanditiis?
        </p>
        <button>edit info</button>
        <button>Logout</button>
      </div>
    </div>
  );
}

export default Profile;
