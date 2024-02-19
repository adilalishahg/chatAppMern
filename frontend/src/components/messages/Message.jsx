import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../urils/extractTime";
import useConversation from "../../zustand/useConversation";
export const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectConversation } = useConversation();
  const fromMe = message.sender === authUser._id;
  const formattedTime = extractTime(message.createdAt);
  const chatClass = fromMe ? "chat-end" : "chat-start";
  const bubbleColor = fromMe ? "bg-blue-500" : "";
  const profilePic = fromMe
    ? authUser.profilePic
    : selectConversation?.profilePic;
  console.log(message.sender + "===" + authUser._id);
  return (
    <div className={`chat ${chatClass}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src={profilePic} />
        </div>
      </div>

      <div className={`chat-bubble text-white  ${bubbleColor}`}>
        {message.message}
      </div>
      <div className="items-center text-xs opacity-50 chat-footer">
        {formattedTime}
      </div>
    </div>
  );
};
