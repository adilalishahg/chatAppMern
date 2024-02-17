import Conversations from "./Conversations";
import SearchInput from "./SearchInput";
import LogoutButton from "./LogoutButton";

const Sidebar = () => {
  return (
    <div className="flex flex-col p-4 border-r border-slate-500">
      <SearchInput />
      <div className="px-3 divider"></div>
      <Conversations />
      <LogoutButton />
      {/* <LoginButton /> */}
    </div>
  );
};
//***********Starter Code *///////////////////
// const Sidebar = () => {
//   return (
//     <div>
//       <SearchInput />
//       <div className="px-3 divider"></div>
//       <Conversations />
//       {/* <LoginButton /> */}
//     </div>
//   );
// };

export default Sidebar;
