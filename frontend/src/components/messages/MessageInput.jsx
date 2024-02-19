import { useState } from "react";
import { BiSolidSend } from "react-icons/bi";
import useSendMessage from "../../hooks/useSendMessage";

export const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { sendMessage, loading } = useSendMessage();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };
  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="relative w-full">
        <input
          type="text"
          placeholder="send a message"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="absolute inset-y-0 flex items-center end-0 pe-3"
        >
          {loading ? (
            <div className="loading loading-spinner"></div>
          ) : (
            <BiSolidSend />
          )}
        </button>
      </div>
    </form>
  );
};
