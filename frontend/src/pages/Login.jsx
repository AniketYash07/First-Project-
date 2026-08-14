


function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
  
      <div className="w-full max-w-xs mx-auto bg-white p-8 rounded-lg shadow-md">
      <form>
        <input 
        className="text-red-500"
        type="text" placeholder="Username" />
        <input className="text-red-500 mt-10"
         type="password" placeholder="Password" />
        <button className="bg-blue-800 text-white hover:bg-blue-600 rounded-md py-2 px-4 w-30 h-10" type="submit">Login</button>
      </form>
       </div>
       <p> aniket prabhakar</p>
    </div>
  );
}

export default Login;