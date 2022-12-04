import React from "react";
import Layout from "../components/Layout/Layout";
import Sidebar from "../components/Layout/Sidebar";
import Link from "next/link";
import { useState } from "react";
const CreateSpace = () => {
  const [connectWallet, setConnectWallet] = useState();

  const toggleConnectWalletModal = (e) => {
    e.preventDefault();
    setConnectWallet(!connectWallet);
  };

  const [makePublic, setMakePublic] = useState();

  const toggleMakePublic = (e) => {
    e.preventDefault();
    setMakePublic(!makePublic);
  };
  const [congrats, setCongrats] = useState();

  const toggleCongrats = (e) => {
    e.preventDefault();
    setMakePublic(false);
    setCongrats(!congrats);
  };
  return (
    <div>
      {/* first page connect wallet */}
      <Layout connectWallet={toggleConnectWalletModal}>
        <div className="w-4/6 pl-10">
          <h2 className="text-2xl font-bold my-4">Create a Space</h2>
          <p className="text-sm font-thin text-gray-300 mb-4 ">
            WavesDaos is bringing off-chain voting to the Waves DAO ecosystem by
            building with the design patterns used by popular DAO systems.{" "}
            <br />
            Create your own space right away and begin making choices!
          </p>
          <div className="m-auto  text-center">
            <img src="/no-money-in-wallet.svg" className="m-auto" />
            <p className="text-center m-4 text-gray-300 text-sm">
              Connect wallet to begin making decisions
            </p>
            <button
              className="button1 h-12 w-4/5 m-auto rounded-3xl"
              onClick={toggleConnectWalletModal}
            >
              Connect Wallet
            </button>
          </div>
        </div>

        {/* 1 0f 3 Create a space */}

        <div className="w-4/6 pl-10 my-20">
          <h2 className="text-2xl font-bold my-4">Create a Space</h2>
          <form>
            <label className="text-sm text-gray-300">Name of Space</label>
            <br />
            <input
              type="text"
              placeholder="Lets go on"
              className="bg-transparent border w-4/5 h-12 border-[#545252]  rounded-3xl p-3 mb-10"
            />
            <br />
            <label className="text-sm text-gray-300">
              Description of Space
            </label>
            <br />
            <input
              type="text"
              placeholder="Tell us about your space. What is it about?"
              className="bg-transparent border w-4/5 h-12 border-[#545252]  rounded-3xl p-3 mb-10"
            />
            <br />
            <label className="text-sm text-gray-300">Select category</label>
            <br />
            <input
              type="text"
              placeholder="You can type in what category is your space?"
              className="bg-transparent border w-4/5 h-12 border-[#545252]  rounded-3xl p-3 mb-1"
            />
            <div className="flex mb-5">
              <button className="bg-lyt  h-8 w-24 rounded-3xl mx-1">Art</button>
              <button className="bg-lyt  h-8 w-24 rounded-3xl mx-1">
                Protocol
              </button>
              <button className="bg-lyt  h-8 w-24 rounded-3xl mx-1">
                Social
              </button>
              <button className="bg-lyt  h-8 w-24 rounded-3xl mx-1">
                Investment
              </button>
              <button className="bg-lyt  h-8 w-24 rounded-3xl mx-1">
                Sevices
              </button>
            </div>
            <p className="text-sm ">Your Logo</p>
            <p className="text-sm text-gray-300">
              This will be displayed on your profile.
            </p>
            <div className="flex mb-6">
              <div className="rounded-3xl mr-6 bg-lyt w-12 h-12 pt-4">
                <img className="border rounded-md m-auto" src="/gallery.svg" />
              </div>
              <p className=" text-sm text-gray-300 mr-2 pt-3">Delete</p>
              <p className="text-purple-700 text-sm pt-3">Update</p>
            </div>

            <label className="text-sm text-gray-300">Websites</label>
            <br />
            <input
              type="text"
              placeholder="Paste URL of your website if any"
              className="bg-transparent border w-4/5 h-12 border-[#545252]  rounded-3xl p-3 mb-10"
            />
            <br />
            <label className="text-sm text-gray-300">Terms of service</label>
            <br />
            <input
              type="text"
              placeholder="Paste URL of your terms of service if any"
              className="bg-transparent border w-4/5 h-12 border-[#545252]  rounded-3xl p-3 mb-1"
            />
            <div className="border my-7 pl-7 border-gray-500 rounded-md">
              <p className="mb-5">Add Socials</p>
              <label className="text-sm text-gray-300">Github</label>
              <br />
              <div className="mt-1 relative rounded-full flex-1 bg-transparent items-center grow flex h-14 w-4/5  ">
                <div className="absolute inset-y-0 left-0 px-3 flex items-center pointer-events-none h-full">
                  <span className="text-gray-500 px-3 w-22 h-22">
                    <img src="/github.svg" className="w-full h-full" />
                  </span>
                </div>
                <input
                  placeholder="Paste URL"
                  type="text"
                  name="github_address"
                  id="github_address"
                  className="  py-2 block w-full pl-16 pr-7  sm:text-sm rounded-full h-full focus:outline-none bg-transparent border border-[#545252] transition ease-in duration-200"
                />
              </div>

              <br />
              <label className="text-sm text-gray-300">Twitter</label>
              <br />
              <div className="mt-1 relative rounded-full flex-1 bg-transparent items-center grow flex h-14 w-4/5  ">
                <div className="absolute inset-y-0 left-0 px-3 flex items-center pointer-events-none h-full">
                  <span className="text-gray-500 px-3 w-22 h-22">
                    <img src="/twitter.svg" className="w-full h-full" />
                  </span>
                </div>
                <input
                  placeholder="Paste URL"
                  type="text"
                  name="twitter_address"
                  id="twitter_address"
                  className="  py-2 block w-full pl-16 pr-7  sm:text-sm rounded-full h-full focus:outline-none bg-transparent border border-[#545252] transition ease-in duration-200"
                />
              </div>
              <br />
              <label className="text-sm text-gray-300">Discord</label>
              <br />
              <div className="mt-1 mb-5 relative rounded-full flex-1 bg-transparent items-center grow flex h-14 w-4/5  ">
                <div className="absolute inset-y-0 left-0 px-3 flex items-center pointer-events-none h-full">
                  <span className="text-gray-500 px-3 w-22 h-22">
                    <img src="/discord.svg" className="w-full h-full" />
                  </span>
                </div>
                <input
                  placeholder="Paste URL"
                  type="text"
                  name="discord_address"
                  id="discord_address"
                  className="  py-2 block w-full pl-16 pr-7  sm:text-sm rounded-full h-full focus:outline-none bg-transparent border border-[#545252] transition ease-in duration-200"
                />
              </div>
            </div>
            <button className="button1 button1 h-12 w-full m-auto rounded-3xl">
              Next
            </button>
          </form>
        </div>

        {/* 2 of 3 Create a space */}

        <div className="w-4/6 pl-10 my-20">
          <h2 className="text-2xl font-bold my-4">Create a Space</h2>
          <form>
            <label className="">Set up Controller address</label>{" "}
            <input type="checkbox" className="ml-40 text-sm text-gray-300" />
            <label>Use address in this account</label>
            <p className="text-sm text-gray-300">
              The user account with control over the space&apos;s settings is
              the space controller.{" "}
            </p>
            <input
              type="text"
              placeholder="0x6tRtdgji7644780bxsdgi098rewwdgi09986hgdwq4t7v223"
              className="bg-transparent border w-4/5 h-12 border-[#545252]  rounded-3xl p-3 mb-10"
            />
            <div className="border my-7 pl-7 border-gray-500 rounded-md">
              <p className="mt-5 text-lg">Add Partners</p>
              <p className="text-sm text-gray-300 mb-6">
                They would be able to manage this space and create proposals
              </p>

              <label className="text-sm text-gray-300">Address</label>
              <br />
              <div className="flex">
                <input
                  type="text"
                  placeholder=" 0x6tRtdgji7644780bxsdgi098rewwdgi09986hgdwq4t7v223"
                  className="bg-transparent border w-3/4 h-12 border-[#545252]  rounded-3xl p-3 mb-10"
                />
                <button className="rounded-3xl text-pin border border-pin h-12 p-2  mx-4">
                  Add Partner
                </button>
              </div>
              <br />
            </div>
            <div className="border my-7 pl-7 border-gray-500 rounded-md">
              <p className="mt-5 text-lg">Add Creators</p>
              <p className="text-sm text-gray-300 mb-6">
                They would always be able to create proposals
              </p>

              <label className="text-sm text-gray-300">Address</label>
              <br />
              <div className="flex">
                <input
                  type="text"
                  placeholder=" 0x6tRtdgji7644780bxsdgi098rewwdgi09986hgdwq4t7v223"
                  className="bg-transparent border w-3/4 h-12 border-[#545252]  rounded-3xl p-3 mb-10"
                />
                <button className="rounded-3xl text-pin border border-pin h-12 p-2  mx-4">
                  Add Partner
                </button>
              </div>
              <br />
            </div>
          </form>
          <button className="button1 button1 h-12 w-full m-auto rounded-3xl">
            Next
          </button>
        </div>

        {/* 3 0f 3 create a space */}

        <div className="w-4/6 pl-10 my-20">
          <h2 className="text-2xl font-bold my-4">Create a Space</h2>
          <form>
            <p className="mb-2">Proposal Settings</p>
            <p className="text-sm text-gray-300 mb-6">
              This directs voters on how to vote. You can always change it
              later.
            </p>
            <label>Threshold</label>
            <p className="text-sm text-gray-300">
              Minimum Voting Power required to create a proposal
            </p>
            <input
              type="text"
              placeholder=""
              className="bg-transparent border w-full h-12 border-[#545252]  rounded-3xl p-3 mb-10"
            />
            <br />
            <label>Quorum</label>
            <p className="text-sm text-gray-300">
              Minimum number of votes necessary for a proposal to pass
            </p>
            <input
              type="text"
              placeholder=""
              className="bg-transparent border w-full h-12 border-[#545252]  rounded-3xl p-3 mb-10"
            />
            <div className="flex">
              <div>
                <label>Voting Delay</label>
                <p className="text-sm pr-6 text-gray-300">
                  This states how long voting can be delayed for
                </p>
                <input
                  type="text"
                  placeholder=""
                  className="bg-transparent border w-4/5 h-12 border-[#545252]  rounded-3xl p-3 mb-10"
                />
              </div>
              <div>
                <label>Voting Period</label>
                <p className="text-sm pr-6 text-gray-300">
                  This states how long voting can be held for{" "}
                </p>
                <input
                  type="text"
                  placeholder=""
                  className="bg-transparent border w-4/5 h-12 border-[#545252]  rounded-3xl p-3 mb-10"
                />
              </div>
            </div>
            <p className="mb-2">Add Treasury</p>
            <p className="text-sm text-gray-300 mb-6">
              This directs voters on how to vote. You can always change it
              later..
            </p>
            <label>Network</label>
            <br />
            <input
              type="text"
              placeholder=""
              className="bg-transparent border w-full h-12 border-[#545252]  rounded-3xl p-3 mb-10"
            />
            <br></br>
            <label>Name</label>
            <br />
            <input
              type="text"
              placeholder=""
              className="bg-transparent border w-full h-12 border-[#545252]  rounded-3xl p-3 mb-10"
            />
            <br />
            <label>Address</label>
            <br />
            <input
              type="text"
              placeholder=""
              className="bg-transparent border w-full h-12 border-[#545252]  rounded-3xl p-3 mb-10"
            />
            <br></br>
            <div className="text-right">
              <button className="rounded-3xl text-pin border border-pin h-12 p-2 mb-12  ">
                Add Another
              </button>
            </div>
            <button
              className="button1 button1 h-12 w-full m-auto rounded-3xl"
              onClick={toggleMakePublic}
            >
              Create Space
            </button>
          </form>
        </div>

        {/* Modal Boxes */}

        <div className={`modal__box ${connectWallet ? "show" : ""}`}>
          <div className="modal__box-wrapper shadow-lg rounded-2xl">
            <div className="flex items-start justify-between mb-6">
              <div className="grow">
                <h1 className="text-2xl font-semibold mb-3">Connect Wallet</h1>
              </div>

              <button
                className=" flex items-center absolute top-3 right-2  "
                onClick={() => setConnectWallet(false)}
              >
                <span className="pointer-events-none flex items-center p-2">
                  <svg
                    className="h-5 w-5 "
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 5L5 15M5 5L15 15"
                      stroke="currentColor"
                      strokeWidth="1.67"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>

            <div className="flex flex-col gap-4 mt-5 w-full">
              <button
                className="px-9 py-3 border border-[#545252] bg-[#3F3F3F] text-white rounded-full flex items-center justify-start gap-5"
                type="button"
              >
                <img src="/Image.svg" /> Metamask
              </button>

              <button
                className="px-9 py-3 border border-[#545252] bg-[#3F3F3F] text-white rounded-full flex items-center justify-start gap-5"
                type="button"
              >
                <img src="/image 1.svg" /> Keeper
              </button>
            </div>
          </div>
        </div>

        {/* Make Public Modal */}
        <div className={`modal__box ${makePublic ? "show" : ""}`}>
          <div className="modal__box-wrapper shadow-lg rounded-2xl">
            <div className="flex items-start justify-between mb-6">
              <div className="grow">
                <h1 className="text-2xl font-semibold mb-3">
                  Do you want to make this space Public
                </h1>
              </div>

              <button
                className=" flex items-center absolute top-3 right-2  "
                onClick={() => setMakePublic(false)}
              >
                <span className="pointer-events-none flex items-center p-2">
                  <svg
                    className="h-5 w-5 "
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 5L5 15M5 5L15 15"
                      stroke="currentColor"
                      strokeWidth="1.67"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>

            <div className="flex flex-col gap-4 mt-5 w-full">
              <button
                className="button1 px-9 py-3 border border-[#545252] bg-[#3F3F3F] text-white rounded-full flex items-center justify-start gap-5"
                onClick={toggleCongrats}
                type="button"
              >
                Yes
              </button>

              <button
                className=" px-9 py-3 border border-[#545252] bg-[#3F3F3F] text-white rounded-full flex items-center justify-start gap-5"
                onClick={toggleCongrats}
                type="button"
              >
                No
              </button>
            </div>
          </div>
        </div>
        {/* congrats modal */}

        <div className={`modal__box ${congrats ? "show" : ""}`}>
          <div className="modal__box-wrapper shadow-lg rounded-2xl text-center">
            <div className="flex items-start justify-between mb-6">
              <div className="grow">
                <h1 className="text-2xl font-semibold mb-3">Congratulations</h1>
                <p>Your space ( Lets go on) is live and public!!</p>
                <p className="text-sm font-thin text-gray-300">
                  You can now start creating proposals and invite others to your
                  space
                </p>
              </div>

              <button
                className=" flex items-center absolute top-3 right-2  "
                onClick={() => setCongrats(false)}
              >
                <span className="pointer-events-none flex items-center p-2">
                  <svg
                    className="h-5 w-5 "
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 5L5 15M5 5L15 15"
                      stroke="currentColor"
                      strokeWidth="1.67"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>

            <div className="flex flex-col gap-4 mt-5 w-full">
              <Link href="/spaces" className="">
                {" "}
                <button
                  className="button1 m-auto px-9 py-3 border border-[#545252] bg-[#3F3F3F] text-white rounded-full flex items-center justify-start gap-5"
                  type="button"
                >
                  Go to Spaces
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default CreateSpace;
