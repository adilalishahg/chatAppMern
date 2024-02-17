import { IoSearchSharp } from "react-icons/io5";
const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search..."
        className="rounded-full input input-bordered"
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
