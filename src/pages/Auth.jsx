import React, { useState } from 'react';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showSignupPassword, setShowSignupPassword] = useState(false);

  const toggleForms = () => {
    setIsLogin(!isLogin);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login submitted');
  };

  const handleSignup = (e) => {
    e.preventDefault();
    console.log('Signup submitted');
  };

  const handleGoogleAuth = () => {
    console.log('Google authentication');
  };

  const handleFacebookAuth = () => {
    console.log('Facebook authentication');
  };

  return (
    <div className="min-h-screen bg-cyan-400 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl h-[700px] bg-white rounded-2xl shadow-2xl flex overflow-hidden">
        
        {/* Left Panel */}
        <div className="hidden md:flex w-1/2 h-full bg-cover bg-center p-12 flex-col justify-between" 
             style={{ backgroundImage: "url('https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop')" }}>
          <div></div>
          <div>
            <h2 className="text-white text-5xl font-bold leading-tight">Looking for a Room?</h2>
            <p className="text-white text-4xl font-light mt-2">We are here to help</p>
          </div>
          <div></div>
        </div>

        {/* Right Panel */}
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center p-8 sm:p-12">
          
          {/* Login Form */}
          {isLogin ? (
            <div>
              <div className="text-right text-gray-500 mb-8">English &gt;</div>
              <h2 className="text-4xl font-bold text-blue-600 mb-8 text-center">Login</h2>
              
              <form onSubmit={handleLogin} className="space-y-6">
                <input 
                  type="text" 
                  placeholder="Username" 
                  className="w-full px-4 py-3 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                />
                <div className="relative">
                  <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="Password" 
                    className="w-full px-4 py-3 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400 cursor-pointer"
                  >
                    <i className={`fa-regular ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`}></i>
                  </button>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg"
                >
                  Login
                </button>
              </form>

              <p className="text-center text-gray-600 mt-6">
                You do not have an account? 
                <button 
                  onClick={toggleForms}
                  className="font-bold text-blue-600 hover:underline ml-1"
                >
                  Sign up
                </button>
              </p>
              
              <div className="flex items-center my-6">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-4 text-gray-400">-OR-</span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleGoogleAuth}
                  className="flex-1 flex items-center justify-center gap-2 py-3 border rounded-lg hover:bg-gray-50"
                >
                  <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
                  Sign up with Google
                </button>
                <button 
                  onClick={handleFacebookAuth}
                  className="flex-1 flex items-center justify-center gap-2 py-3 border rounded-lg hover:bg-gray-50"
                >
                  <i className="fab fa-facebook-f text-blue-700 text-xl"></i>
                  Sign up with Facebook
                </button>
              </div>
            </div>
          ) : (
            /* Signup Form */
            <div>
              <div className="text-right text-gray-500 mb-8">English &gt;</div>
              <h2 className="text-4xl font-bold text-blue-600 mb-8 text-center">Create Account</h2>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <button 
                  onClick={handleGoogleAuth}
                  className="flex-1 flex items-center justify-center gap-2 py-3 border rounded-lg hover:bg-gray-50"
                >
                  <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
                  Sign up with Google
                </button>
                <button 
                  onClick={handleFacebookAuth}
                  className="flex-1 flex items-center justify-center gap-2 py-3 border rounded-lg hover:bg-gray-50"
                >
                  <i className="fab fa-facebook-f text-blue-700 text-xl"></i>
                  Sign up with Facebook
                </button>
              </div>

              <div className="flex items-center mb-6">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-4 text-gray-400">-OR-</span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>

              <form onSubmit={handleSignup} className="space-y-6">
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className="w-full px-4 py-3 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full px-4 py-3 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                />
                <div className="relative">
                  <input 
                    type={showSignupPassword ? "text" : "password"} 
                    placeholder="Password" 
                    className="w-full px-4 py-3 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowSignupPassword(!showSignupPassword)}
                    className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400 cursor-pointer"
                  >
                    <i className={`fa-regular ${showSignupPassword ? 'fa-eye' : 'fa-eye-slash'}`}></i>
                  </button>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg"
                >
                  Create Account
                </button>
              </form>
              
              <p className="text-center text-gray-600 mt-6">
                Already have an account? 
                <button 
                  onClick={toggleForms}
                  className="font-bold text-blue-600 hover:underline ml-1"
                >
                  Login
                </button>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
