const Conversation = () => {
  return (
    <>
      <div className="flex items-center gap-2 px-2 py-1 rounded cursor-pointer hover:bg-sky-500 hover:text-white">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex justify-between gap-3">
            <p className="flex flex-col flex-1">John</p>
            <span className="text-xl">a</span>
          </div>
        </div>
      </div>
      <div className="h-1 py-0 my-0 divider"></div>
    </>
  );
};
//***********Starter Code *///////////////////
// const Conversation = () => {
//   return (
//     <>
//       <div className="flex items-center gap-2 px-2 py-1 rounded cursor-pointer hover:bg-sky-500 hover:text-white">
//         <div className="avatar online">
//           <div className="w-12 rounded-full">
//             <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
//           </div>
//         </div>
//         <div className="flex flex-col flex-1">
//           <div className="flex justify-between gap-3">
//             <p className="flex flex-col flex-1">John</p>
//             <span className="text-xl">a</span>
//           </div>
//         </div>
//       </div>
//       <div className="h-1 py-0 my-0 divider"></div>
//     </>
//   );
// };

export default Conversation;
