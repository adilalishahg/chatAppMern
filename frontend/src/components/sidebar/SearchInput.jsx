import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";
const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      toast.error("Please enter at least 3 characters");
    }
    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("No such user found");
    }
  };
  return (
    <form className="flex items-center gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        className="rounded-full input input-bordered"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="text-white btn btn-circle bg-sky-500">
        <IoSearchSharp />
      </button>
    </form>
  );
};
//***********Starter Code *///////////////////
// const SearchInput = () => {
//   return (
//     <form className="flex items-center gap-2">
//       <input
//         type="text"
//         placeholder="Search..."
//         className="rounded-full input input-bordered"
//       />
//       <button type="submit" className="text-white btn btn-circle bg-sky-500">
//         <IoSearchSharp />
//       </button>
//     </form>
//   );
// };

export default SearchInput;
