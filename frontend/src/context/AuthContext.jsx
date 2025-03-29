// import { createContext, useState, useEffect } from "react";
// import axios from "axios";

// const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);

//     // Login Function
//     const login = async (email, password) => {
//         const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/login`, { email, password });
//         localStorage.setItem("token", res.data.token);
//         setUser(res.data.user);
//     };

//     // Logout Function
//     const logout = () => {
//         localStorage.removeItem("token");
//         setUser(null);
//     };

//     // Check if user is already logged in
//     useEffect(() => {
//         const token = localStorage.getItem("token");
//         if (token) {
//             axios.get(`${import.meta.env.VITE_API_URL}/api/auth/user`, {
//                 headers: { Authorization: `Bearer ${token}` },
//             })
//                 .then(res => setUser(res.data))
//                 .catch(() => logout());
//         }
//     }, []);

//     return (
//         <AuthContext.Provider value={{ user, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export { AuthContext, AuthProvider };


import { createContext, useState } from "react";

export const AuthContext = createContext();  // ✅ Create the context

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
