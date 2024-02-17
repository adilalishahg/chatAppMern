import { BiSolidSend } from "react-icons/bi";

export const MessageInput = () => {
  return (
    <form className="px-4 my-3">
      <div className="relative w-full">
        <input
          type="text"
          placeholder="send a message"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
        />
        <button
          type="submit"
          className="absolute inset-y-0 flex items-center end-0 pe-3"
        >
          <BiSolidSend />
        </button>
      </div>
    </form>
  );
};
