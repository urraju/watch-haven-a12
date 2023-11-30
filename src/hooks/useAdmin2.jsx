import { useEffect, useState } from "react";
import useAuth from "../AuthContext/useAuth/useAuth";


const useAdmin2 = () => {
    const {user} = useAuth()
  const [isAdmin, setIsAdmin] = useState(false);
  console.log(isAdmin);
  console.log(localStorage.getItem("access-token"));
  useEffect(() => {
    if (user?.email) {
      fetch(`https://assignmant-12-server.vercel.app/users/admin/${user?.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setIsAdmin(data.admin));
    }
  }, [user?.email]);
  return [isAdmin]
};
export default useAdmin2;
