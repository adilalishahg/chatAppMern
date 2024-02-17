import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");

  const { loading, login } = useLogin();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };
  return (
    <div className="flex items-center justify-center mx-auto min-w-96">
      <div className="w-full p-6 bg-gray-400 bg-opacity-0 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login <span className="text-blue-500">ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="p-2 label">
              <span className="text-base label-text ">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full h-10 input input-bordered"
            />
          </div>
          <div>
            <label className="p-2 label">
              <span className="text-base label-text ">Password</span>
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              placeholder="Enter Password"
              className="w-full h-10 input input-bordered"
            />
          </div>
          <Link
            to="/signup"
            className="inline-block mt-2 text-sm hover:underline hover:text-blue-600"
          >
            {"Don't"} have an account?
          </Link>
          <div>
            <button className="mt-2 btn btn-block btn-sm" disabled={loading}>
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
///////////////////*****************Starter Code For The Login Component**************** */
// const Login = () => {
//     return (
//       <div className="flex items-center justify-center mx-auto min-w-96">
//         <div className="w-full p-6 bg-gray-400 bg-opacity-0 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg">
//           <h1 className="text-3xl font-semibold text-center text-gray-300">
//             Login <span className="text-blue-500">ChatApp</span>
//           </h1>
//           <form>
//             <div>
//               <label className="p-2 label">
//                 <span className="text-base label-text ">Username</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter Username"
//                 className="w-full h-10 input input-bordered"
//               />
//             </div>
//             <div>
//               <label className="p-2 label">
//                 <span className="text-base label-text ">Password</span>
//               </label>
//               <input
//                 type="password"
//                 placeholder="Enter Password"
//                 className="w-full h-10 input input-bordered"
//               />
//             </div>
//             <a
//               href="/signup"
//               className="inline-block mt-2 text-sm hover:underline hover:text-blue-600"
//             >
//               {"Don't"} have an account?
//             </a>
//             <div>
//               <button className="mt-2 btn btn-block btn-sm">Login</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   };
