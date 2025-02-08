import React, { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Snackbar, Alert } from "@mui/material";

// Reducer for handling form state
const formReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value };
    case "SET_ERRORS":
      return { ...state, errors: action.errors };
    default:
      return state;
  }
};

const initialFormState = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  linkedin: "",
  resume: null,
  errors: {},
};

export default function ApplyJob() {
  const [formState, dispatch] = useReducer(formReducer, initialFormState);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    const { first_name, last_name, email, phone, linkedin, resume } = formState;

    if (!first_name.trim()) newErrors.first_name = "First name is required";
    if (!last_name.trim()) newErrors.last_name = "Last name is required";
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }
    if (!phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }
    if (!linkedin.trim()) {
      newErrors.linkedin = "LinkedIn URL is required";
    } else if (!/^https?:\/\/(www\.)?linkedin\.com\/in\/.+/.test(linkedin)) {
      newErrors.linkedin = "LinkedIn URL is invalid";
    }
    if (!resume) newErrors.resume = "Resume is required";

    dispatch({ type: "SET_ERRORS", errors: newErrors });
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formState);
      navigate("/Prep", { state: { skills: ["React", "JavaScript", "HTML", "CSS"] } });
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    dispatch({ type: "UPDATE_FIELD", field: name, value: files ? files[0] : value });
    if (name === "resume" && files && files[0]) setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => setOpenSnackbar(false);

  return (
    <div className="min-h-screen md:flex">
      <JobDetails />
      <ApplicationForm
        formState={formState}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        errors={formState.errors}
      />
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Resume Added Successfully
        </Alert>
      </Snackbar>
    </div>
  );
}

const JobDetails = () => (
  <div className="flex-1 bg-white">
    <div className="md:h-screen md:overflow-y-auto md:no-scrollbar">
      <div className="container mx-auto my-10 px-6">
        <header>
          <img
            src="https://micro1-portal-data.s3.amazonaws.com/gptvetting/1691154224533-f9970e03-363c-4b87-8a09-14557483eec1-logoblack.png"
            className="max-h-[50px] max-w-[170px] object-contain sm:max-w-[100px] sm:max-h-[30px]"
            alt="Company Logo"
          />
        </header>
        <section className="mt-6">
          <h2 className="text-[32px] font-semibold sm:text-[28px]">Frontend Developer - (111)</h2>
          <RequiredSkills />
          <JobDescription />
        </section>
      </div>
    </div>
  </div>
);

const RequiredSkills = () => (
  <div className="mt-6">
    <div className="w-full bg-white rounded-xl border border-gray-300 p-5 shadow-sm">
      <h1 className="text-lg font-semibold">Required Skills</h1>
      <div className="flex gap-2 flex-wrap mt-3">
        {["React", "JavaScript", "HTML", "CSS"].map((skill) => (
          <div key={skill} className="text-sm py-2 px-4 rounded-full bg-gray-200 text-gray-800">
            {skill}
          </div>
        ))}
      </div>
    </div>
  </div>
);

const JobDescription = () => (
  <div className="w-full bg-white rounded-xl border border-gray-300 p-5 mt-6 shadow-sm">
    <h1 className="text-lg font-semibold">Job Description</h1>
    <div className="mt-3">
      <p><strong>Job Title:</strong> Frontend Developer - (111)</p>
      <p><strong>Job Type:</strong> Full-Time</p>
      <p><strong>Location:</strong> Remote</p>
      <h2 className="mt-4 font-semibold">About Us:</h2>
      <p>At micro1, we connect skilled remote professionals with top-tier companies. Our mission is to provide a stable, competitive income along with career growth opportunities.</p>
      <h2 className="mt-4 font-semibold">Key Responsibilities:</h2>
      <ul className="list-disc pl-5">
        <li>Develop user-friendly web applications with React.</li>
        <li>Optimize applications for speed and scalability.</li>
        <li>Collaborate with designers and backend developers.</li>
        <li>Write clean and maintainable code.</li>
      </ul>
    </div>
  </div>
);

const ApplicationForm = ({ formState, handleChange, handleSubmit, errors }) => (
  <div className="bg-violet-50">
    <div className="h-full max-w-full flex items-center justify-center px-4 py-10 w-[550px] row-span-20">
      <div className="w-full max-w-[500px] px-6 sm:px-4">
        <h1 className="font-semibold text-2xl">Apply Now</h1>
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "First name", name: "first_name", placeholder: "Enter your first name" },
              { label: "Last name", name: "last_name", placeholder: "Enter your last name" },
            ].map(({ label, name, placeholder }) => (
              <div key={name}>
                <label className="block text-lg font-medium">{label}</label>
                <input
                  type="text"
                  name={name}
                  value={formState[name]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className="border border-gray-300 rounded-lg w-full px-4 h-12 focus:ring-primary-600 focus:border-primary-600"
                  aria-label={label}
                />
                {errors[name] && <p className="text-red-500 text-sm mt-1">{errors[name]}</p>}
              </div>
            ))}
          </div>
          <FormField label="Email" name="email" type="email" placeholder="Enter your email address" formState={formState} handleChange={handleChange} errors={errors} />
          <FormField label="Phone" name="phone" type="tel" placeholder="Enter your phone number" formState={formState} handleChange={handleChange} errors={errors} />
          <FormField label="LinkedIn Profile URL" name="linkedin" type="url" placeholder="Enter your LinkedIn URL" formState={formState} handleChange={handleChange} errors={errors} />
          <ResumeUpload formState={formState} handleChange={handleChange} errors={errors} />
          <button type="submit" className="w-full py-3 text-white bg-violet-400 rounded-lg hover:bg-primary-700 active:scale-95 transition-all">
            Apply
          </button>
          <p className="text-xs text-gray-600 text-center mt-4">By applying, you'll be added to our talent pool for future opportunities.</p>
          <p className="text-sm text-gray-600 text-center">
            Have any questions? See <a href="https://www.micro1.ai/apply#faq" className="text-primary-600" target="_blank" rel="noopener noreferrer">FAQs</a>
          </p>
        </form>
      </div>
    </div>
  </div>
);

const FormField = ({ label, name, type, placeholder, formState, handleChange, errors }) => (
  <div>
    <label className="block text-lg font-medium">{label}</label>
    <input
      type={type}
      name={name}
      value={formState[name]}
      onChange={handleChange}
      placeholder={placeholder}
      className="border border-gray-300 rounded-lg w-full px-4 h-12 focus:ring-primary-600 focus:border-primary-600"
      aria-label={label}
    />
    {errors[name] && <p className="text-red-500 text-sm mt-1">{errors[name]}</p>}
  </div>
);

const ResumeUpload = ({ formState, handleChange, errors }) => (
  <div>
    <label className="block text-lg font-medium">Upload Your Resume</label>
    <label className="flex items-center justify-center w-full h-32 border border-dashed border-gray-400 rounded-lg cursor-pointer hover:border-primary-600">
      <input type="file" name="resume" accept=".pdf" onChange={handleChange} className="hidden" />
      <div className="text-center">
        {formState.resume ? (
          <p className="text-sm mt-2 text-gray-700">{formState.resume.name}</p>
        ) : (
          <>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
              <path d="M12 3v12m0 0l-3-3m3 3l3-3M4 15v4a2 2 0 002 2h12a2 2 0 002-2v-4" stroke="#3444DA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="text-sm mt-2">Click to upload or drag & drop (.pdf)</p>
          </>
        )}
      </div>
    </label>
    {errors.resume && <p className="text-red-500 text-sm mt-1">{errors.resume}</p>}
  </div>
);