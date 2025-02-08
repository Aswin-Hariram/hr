import React from 'react';

const NaukriRegistration = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <a href="https://www.naukri.com">
            <img
              src="//static.naukimg.com/s/0/0/i/naukri-identity/naukriLogo.svg"
              alt="Naukri Logo"
              className="h-8"
            />
          </a>
          <span className="text-gray-700">
            Already Registered?{' '}
            <a href="https://www.naukri.com/nlogin/login" className="text-blue-600 hover:underline">
              Login
            </a>{' '}
            here
          </span>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto flex flex-col lg:flex-row gap-8 p-6">
        {/* Left Pane */}
        <div className="lg:w-1/3 bg-white p-6 rounded-lg shadow-md">
          <div className="sticky top-6">
            <img
              src="//static.naukimg.com/s/7/104/assets/images/white-boy.a0d2814a.png"
              alt="Benefits"
              className="w-full mb-6"
            />
            <h2 className="text-xl font-bold mb-4">On registering, you can</h2>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔</span>
                <p className="text-gray-700">Build your profile and let recruiters find you</p>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔</span>
                <p className="text-gray-700">Get job postings delivered right to your email</p>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔</span>
                <p className="text-gray-700">Find a job and grow your career</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Pane */}
        <div className="lg:w-2/3 bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">Create your Naukri profile</h1>
          <p className="text-gray-600 mb-6">
            Search & apply to jobs from India's No.1 Job Site
          </p>

          {/* Registration Form */}
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full name</label>
              <input
                type="text"
                placeholder="What is your name?"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email ID</label>
              <input
                type="email"
                placeholder="Tell us your Email ID"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              <p className="mt-2 text-sm text-gray-500">
                We'll send relevant jobs and updates to this email
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                placeholder="(Minimum 6 characters)"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              <p className="mt-2 text-sm text-gray-500">
                This helps your account stay protected
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Mobile number</label>
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                  +91
                </span>
                <input
                  type="text"
                  placeholder="Enter your mobile number"
                  className="flex-1 block w-full px-3 py-2 border border-gray-300 rounded-r-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Recruiters will contact you on this number
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Work status</label>
              <div className="mt-2 space-y-4">
                <div className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                  <img
                    src="//static.naukimg.com/s/7/104/assets/images/briefcase.bdc5fadf.svg"
                    alt="Experienced"
                    className="w-6 h-6 mr-4"
                  />
                  <div>
                    <h2 className="font-bold">I'm experienced</h2>
                    <p className="text-sm text-gray-500">
                      I have work experience (excluding internships)
                    </p>
                  </div>
                </div>
                <div className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                  <img
                    src="//static.naukimg.com/s/7/104/assets/images/schoolbag.a54cbf7a.svg"
                    alt="Fresher"
                    className="w-6 h-6 mr-4"
                  />
                  <div>
                    <h2 className="font-bold">I'm a fresher</h2>
                    <p className="text-sm text-gray-500">
                      I am a student/ Haven't worked after graduation
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label className="ml-2 text-sm text-gray-700">
                Send me important updates & promotions via SMS, email, and{' '}
                <img
                  src="//static.naukimg.com/s/7/104/assets/images/whatsappicon.81b19a23.svg"
                  alt="WhatsApp"
                  className="inline h-4 w-4"
                />{' '}
                WhatsApp
              </label>
            </div>

            <div>
              <p className="text-sm text-gray-600">
                By clicking Register, you agree to the{' '}
                <a href="https://www.naukri.com/termsconditions" className="text-blue-600 hover:underline">
                  Terms and Conditions
                </a>{' '}
                &{' '}
                <a href="https://www.naukri.com/privacypolicy" className="text-blue-600 hover:underline">
                  Privacy Policy
                </a>{' '}
                of Naukri.com
              </p>
              <button
                type="submit"
                className="w-full mt-4 py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Register now
              </button>
            </div>
          </form>

          {/* Google Sign Up */}
          <div className="mt-8 text-center">
            <span className="text-gray-600">Or</span>
            <div className="mt-4">
              <button className="flex items-center justify-center w-full py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50">
                <img
                  src="//static.naukimg.com/s/7/104/assets/images/google-icon.9273ac87.svg"
                  alt="Google Icon"
                  className="w-5 h-5 mr-2"
                />
                <span className="font-semibold">Continue with Google</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white shadow-md mt-8">
        <div className="container mx-auto py-6 px-6 text-center">
          <ul className="flex flex-wrap justify-center space-x-4 mb-4">
            <li><a href="//www.infoedge.in/" className="text-gray-700 hover:text-blue-600">About Us</a></li>
            <li><a href="https://www.naukri.com/mynaukri/mn_contactus.php" className="text-gray-700 hover:text-blue-600">Contact Us</a></li>
            <li><a href="//my.naukri.com/faq/faq.php" className="text-gray-700 hover:text-blue-600">FAQs</a></li>
            <li><a href="https://www.naukri.com/termsconditions" className="text-gray-700 hover:text-blue-600">Terms and Conditions</a></li>
            <li><a href="//w5.naukri.com/fdbck/main/feedback.php" className="text-gray-700 hover:text-blue-600">Report a Problem</a></li>
            <li><a href="https://www.naukri.com/privacypolicy" className="text-gray-700 hover:text-blue-600">Privacy Policy</a></li>
          </ul>
          <p className="text-gray-600">All rights reserved © 2025 Info Edge India Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

export default NaukriRegistration;