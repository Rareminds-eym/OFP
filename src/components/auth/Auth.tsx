// import React, { useState } from "react";
// import { useAuth } from "../../context/AuthContext";
// import { FormData } from "../../types/auth";
// import CircuitLines from "../ui/animations/CircuitLines";
// import AuthForm from "./AuthForm";
// import AuthHeader from "./AuthHeader";
// import AuthToggle from "./AuthToggle";

// const Auth: React.FC = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [formData, setFormData] = useState<FormData>({
//     username: "",
//     email: "",
//     password: "",
//   });
//   const { login } = useAuth();
//   const { signup } = useAuth();

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     isLogin
//       ? login(
//           formData.email,
//           formData.password
//         )
//       : signup(formData.email, formData.password, formData.username);
//   };

//   return (
//     <div
//       className="flex-1 bg-gradient-to-b from-green-950 to-stone-900
//       flex items-center justify-center p-4 relative overflow-hidden"
//     >
//       <CircuitLines />
//       <div
//         className="bg-white/10 rounded-lg shadow-2xl p-8 
//         w-full max-w-md relative z-10"
//       >
//         <AuthHeader isLogin={isLogin} />
//         <AuthForm
//           isLogin={isLogin}
//           formData={formData}
//           setFormData={setFormData}
//           onSubmit={handleSubmit}
//         />
//         <div className="mt-6 text-center">
//           <AuthToggle isLogin={isLogin} onToggle={() => setIsLogin(!isLogin)} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Auth;
import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { FormData } from "../../types/auth";
import CircuitLines from "../ui/animations/CircuitLines";
import AuthForm from "./AuthForm";
import AuthHeader from "./AuthHeader";
import AuthToggle from "./AuthToggle";

const Auth: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    password: "",
  });
  const { login } = useAuth();
  const { signup } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    isLogin
      ? login(
          formData.email,
          formData.password
        )
      : signup(formData.email, formData.password, formData.username);
  };

  return (
    <div
      className="flex-1 bg-gradient-to-b from-green-950 to-stone-900
      flex items-center justify-center p-4 relative overflow-hidden"
    >
      <CircuitLines />
      <div
        className="bg-amber-100/10 rounded-lg shadow-xl p-8 
        w-full max-w-md relative z-10 border border-green-800/30"
      >
        <AuthHeader isLogin={isLogin} />
        <AuthForm
          isLogin={isLogin}
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleSubmit}
        />
        <div className="mt-6 text-center">
          <AuthToggle isLogin={isLogin} onToggle={() => setIsLogin(!isLogin)} />
        </div>
      </div>
    </div>
  );
};

export default Auth;
