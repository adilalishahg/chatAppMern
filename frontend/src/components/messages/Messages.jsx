import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkelton from "../skeltons/MessageSkelton";
import { Message } from "./Message";
import useListenMessages from "../../hooks/useListenMessages";

export const Messages = () => {
  const { messages, loading } = useGetMessages();
  const lastMessageRef = useRef();
  useListenMessages();
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);
  return (
    <div className="flex-1 px-4 overflow-auto md:min-w-[450px]">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}
      {loading && [...Array(3)].map((_, idx) => <MessageSkelton key={idx} />)}
      {/* <Message /> */}
      {!loading && messages && messages.length === 0 && (
        <p className="text-center">Send a message to start the conversation</p>
      )}
    </div>
  );
};
