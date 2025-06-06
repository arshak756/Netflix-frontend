import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) return setError("All fields are required.");

    try {
      const res = await fetch("https://netflix-backend-production-1281.up.railway.app/api/login", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email, password }),
});


      const data = await res.json();
      if (res.ok) {
        navigate("/dashboard");
      } else {
        setError(data.message);
      }
    } catch {
      setError("Server error. Try again later.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">

      <section className="relative h-screen">

        <img
          src="https://wallpapers.com/images/hd/netflix-background-gs7hjuwvv2g0e9fj.jpg"
          alt="Netflix background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black bg-opacity-60" />


        <div className="relative z-10 flex justify-center items-center h-full">
          <form onSubmit={handleSubmit} className="bg-black bg-opacity-75 p-8 rounded-md w-full max-w-md shadow-md">
            <h2 className="text-white text-3xl font-bold mb-6">Sign In</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <input
              type="email"
              placeholder="Email or mobile number"
              className="w-full p-3 mb-4 bg-[#333] text-white rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 mb-6 bg-[#333] text-white rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded font-semibold">
              Sign In
            </button>
            <div className="flex justify-between items-center text-sm text-gray-300 mt-2">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="accent-red-600" />
                <span>Remember me</span>
              </label>
              <a href="#" className="hover:underline">
                Need help?
              </a>
              
            </div>
          </form>
           
        </div>
      </section>


      <footer className="bg-black text-gray-400 text-sm">
        <div className="max-w-5xl mx-auto px-6 py-10">
          <p className="mb-6">
            Questions? Call <a href="#" className="hover:underline">000-800-919-1694</a>
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            <a href="#" className="hover:underline">FAQ</a>
            <a href="#" className="hover:underline">Help Centre</a>
            <a href="#" className="hover:underline">Terms of Use</a>
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Cookie Preferences</a>
            <a href="#" className="hover:underline">Corporate Information</a>
          </div>
          <div>
            <select className="bg-transparent border border-gray-600 text-gray-400 px-2 py-1 rounded">
              <option>English</option>
              <option>हिन्दी</option>
            </select>
          </div>
        </div>
      </footer>
    </div>
  );
}

