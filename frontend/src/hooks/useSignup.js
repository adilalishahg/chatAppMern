import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const signup = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputErrors({
      fullName,
      username,
      password,
      confirmPassword,
      gender,
    });
    if (!success) return;
    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          username,
          password,
          confirmPassword,
          gender,
        }),
      });
      const data = await res.json();
      if (data.error) {
        toast.error(data.error);
      }

      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { signup, loading };
};
export default useSignup;
function handleInputErrors({
  fullName,
  username,
  password,
  confirmPassword,
  gender,
}) {
  let success = true;
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error("Please fill out all fields.");
    success = false;
  }
  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    success = false;
  }
  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    success = false;
  }
  return success;
}
