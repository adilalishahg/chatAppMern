import useGetConversations from "../../hooks/useGetConversations";
import Conversation from "./Convesation";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  // console.log(conversations);
  return (
    <div className="flex flex-col py-2 overflow-auto">
      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          lastIdx={idx === conversations.length - 1}
        />
      ))}
      {loading ? <span className="loading loading-spinner"></span> : null}
    </div>
  );
};

export default Conversations;
