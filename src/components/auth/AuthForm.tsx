// import React from "react";
// import { FormData } from "../../types/auth";
// import InputField from "../ui/InputField";
// import AuthButton from "./AuthButton";

// interface AuthFormProps {
//   isLogin: boolean;
//   formData: FormData;
//   setFormData: (data: FormData) => void;
//   onSubmit: (e: React.FormEvent) => void;
// }

// const AuthForm: React.FC<AuthFormProps> = ({
//   isLogin,
//   formData,
//   setFormData,
//   onSubmit,
// }) => (
//   <form onSubmit={onSubmit} className="space-y-6">
//     {!isLogin && (
//       <InputField
//         label="Username"
//         type="text"
//         placeholder="Enter your username"
//         value={formData.username}
//         onChange={(e) => setFormData({ ...formData, username: e.target.value })}
//       />
//     )}
//     { (
//       <InputField
//         label="Email"
//         type="email"
//         placeholder="Enter your email"
//         value={formData.email}
//         onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//       />
//     )}

//     <InputField
//       label="Password"
//       type="password"
//       placeholder="Enter your password"
//       value={formData.password}
//       onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//     />

//     <AuthButton type="submit" isLogin={isLogin} />
//   </form>
// );

// export default AuthForm;
import React from "react";
import { FormData } from "../../types/auth";
import InputField from "../ui/InputField";
import AuthButton from "./AuthButton";

interface AuthFormProps {
  isLogin: boolean;
  formData: FormData;
  setFormData: (data: FormData) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({
  isLogin,
  formData,
  setFormData,
  onSubmit,
}) => (
  <form
    onSubmit={onSubmit}
    className="space-y-6 bg-gradient-to-b from-green-950 to-stone-900 p-6 rounded-lg shadow-lg"
  >
    {!isLogin && (
      <InputField
        label="Username"
        type="text"
        placeholder="Enter your username"
        value={formData.username}
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        className="bg-green-100 text-green-900 placeholder-green-700 border-green-500 focus:ring-emerald-400"
      />
    )}

    <InputField
      label="Email"
      type="email"
      placeholder="Enter your email"
      value={formData.email}
      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      className="bg-green-100 text-green-900 placeholder-green-700 border-green-500 focus:ring-emerald-400"
    />

    <InputField
      label="Password"
      type="password"
      placeholder="Enter your password"
      value={formData.password}
      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      className="bg-green-100 text-green-900 placeholder-green-700 border-green-500 focus:ring-emerald-400"
    />

    <AuthButton type="submit" isLogin={isLogin} />
  </form>
);

export default AuthForm;
