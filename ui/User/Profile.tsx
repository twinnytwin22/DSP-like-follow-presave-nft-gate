import React from "react";
import avatar from "../../public/avatar.jpg";

function Profile() {
  return (
    <div className="">
      <div className="relative block h-[300px] bg-black">
        <div
          className="absolute top-0 w-full h-full bg-center bg-blue-900 opacity-50 bg-cover bg-fixed"
          style={{
            backgroundImage: `url(/coverBanner.png)`,
            backgroundPosition: "center",
          }}
        ></div>
      </div>
      <div className="relative py-16 container mx-auto px-4 ">
        <div className="relative flex flex-col min-w-0 break-words bg-black border border-zinc-800 w-full mb-6 shadow-xl rounded-lg -mt-36 pb-8">
          <div className="grid grid-cols-12 px-6">
            <div className="flex w-full col-span-9 md:col-span-2 justify-start order-1">
              <div className="relative">
                <img
                  alt="avatar"
                  src="/avatar.jpg"
                  className="shadow-xl rounded-full h-auto align-middle border-none absolute -mt-20 max-w-[150px]"
                />
              </div>
              <div className="block">
                <h3 className="relative text-xl md:text-2xl font-bold leading-normal text-center text-zinc-200 pt-24">
                  Twinny Twin
                </h3>
                <h4 className="relative text-lg md:text-xl leading-normal text-center text-zinc-500">
                  @djtwinnytwin
                </h4>
              </div>
            </div>
            <div className="flex flex-col md:flex-row  w-full col-span-12 md:col-span-8 items-center order-3 md:order-2 mx-auto">
                <UserStats/>
              
                   
                <UserBio/></div>
            <div className="flex justify-center items-center col-span-3 md:col-span-2 order-2 md:order-3">
            <FollowUser/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const UserStats = () => {
  return (
    <div className="flex justify-center py-4 ">
      <div className="mr-4 p-3 text-center">
        <span className="text-xl font-bold block uppercase tracking-wide text-zinc-400">
          22
        </span>
        <span className="text-sm text-zinc-300">Followers</span>
      </div>
      <div className="mr-4 p-3 text-center">
        <span className="text-xl font-bold block uppercase tracking-wide text-zinc-400">
          10
        </span>
        <span className="text-sm text-zinc-300">Releases</span>
      </div>
      <div className="lg:mr-4 p-3 text-center">
        <span className="text-xl font-bold block uppercase tracking-wide text-zinc-400">
          89
        </span>
        <span className="text-sm text-zinc-300">Comments</span>
      </div>
    </div>
  );
};

const FollowUser = () => {
  return (
    <div className="py-6 px-3 sm:mt-0">
      <button
        className="bg-blue-600 active:bg-blue-700 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
        type="button"
      >
        Follow
      </button>
    </div>
  );
};


const FollowingUser = () => {
    return (
      <div className="py-6 px-3 sm:mt-0">
        <button
          className="bg-blue-600 active:bg-blue-700 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          Following
        </button>
      </div>
    );
  };

const UserBio = () => {
  return (
    <div className="flex w-full md:block xl:px-24 relative mt-0 md:mt-6">
         <UserLocation/>
      <p className="flex mb-4 max-w-full text-xs md:text-sm text-zinc-200 break-words relative">
        An artist of considerable range, Jenna the name taken by
        Melbourne-raised, Brooklyn-based Nick Murphy.
      </p>
    </div>
  );
};
const UserLocation = () => {
  return (
    <div className="flex w-full text-xs md:text-sm leading-normal mt-0 mb-2 text-zinc-400 font-bold uppercase">
      <svg className="h-5 pr-2 " fill="none" stroke="white" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
</svg>
      Phoenix, Arizona
    </div>
  );
};
export default Profile;
