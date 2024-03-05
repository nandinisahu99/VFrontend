import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';

function Register() {


  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    fullname: '',
    email: '',
    phonenumber: '',
    collegename: '',
    rollnumber: '',
    password: '',
    confirmpassword: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(credentials);
    const response = await fetch('http://localhost:3001/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    });

    const json = await response.json();
    console.log(json);
    if (!json.success) {
      console.log("error")
      alert(json.error);
      //save the auth toke to local storage and redirect
      //   localStorage.setItem('token', json.authToken)
      //   navigate("/login")
    } else {
      alert('User created successfully');
      navigate( '../login');

    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <section className='register'>
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24 login1">
          <div className="">
            <div className="login1">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl loginh">
                Register
              </h2>
              <p className="mt-2 text-sm text-gray-600 login2">
                Already have an account?{" "}
                <Link
                  to="/login"
                  title=""
                  className="font-semibold text-black transition-all duration-200 hover:underline login3"
                >
                  Login
                </Link>
              </p>
              <form onSubmit={handleSubmit} className="mt-8 ">
                <div className="space-y-5 login4">

                  <div>
                    <label htmlFor="name" >
                      {" "}
                      Full Name{" "}
                    </label>
                    <div className="mt-2">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-black px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        placeholder="Full Name"
                        id="name"
                        name="fullname"
                        value={credentials.fullname} onChange={onChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" >
                      {" "}
                      Email Id{" "}
                    </label>
                    <div className="mt-2">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-black px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="email"
                        placeholder="email id"
                        id="email"
                        name="email"
                        value={credentials.email} onChange={onChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phonenumber" >
                      {" "}
                      Phone No.{" "}
                    </label>
                    <div className="mt-2">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-black px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        placeholder="Phone no."
                        id="phonenumber"
                        name="phonenumber"
                        value={credentials.phonenumber} onChange={onChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="collegename" >
                      {" "}
                      College Name{" "}
                    </label>
                    <div className="mt-2">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-black px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        placeholder="College"
                        id="collegename"
                        name="collegename"
                        value={credentials.collegename} onChange={onChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="rollnumber" >
                      {" "}
                      Roll No.{" "}
                    </label>
                    <div className="mt-2">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-black px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        placeholder="Roll No."
                        id="rollnumber"
                        name="rollnumber"
                        value={credentials.rollnumber} onChange={onChange}
                      />
                    </div>
                  </div>


                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="password"
                        
                      >
                        {" "}
                        Password{" "}
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-black px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="password"
                        placeholder="Password"
                        id="password"
                        name="password"
                        value={credentials.password} onChange={onChange}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="password"
                        
                      >
                        {" "}
                        Confirm Password{" "}
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-black px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="password"
                        placeholder="Confirm Password"
                        id="confirmpassword"
                        name="confirmpassword"
                        value={credentials.confirmpassword} onChange={onChange}
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                    >
                      Create Account{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="ml-2"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </button>
                  </div>
                </div>
              </form>

            </div>
          </div>

        </div>
      </section>

    </>
  )
}

export default Register