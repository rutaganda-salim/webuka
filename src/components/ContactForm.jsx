import React, { useState } from "react";

const countries = [
  "Canada",
  "United States",
  "United Kingdom",
  "Australia",
  "Ireland",
  "New Zealand",
  "Germany",
  "France",
  "Other"
];

const formFields = [
  { name: "firstName", label: "Contact First Name", type: "text", required: true },
  { name: "lastName", label: "Contact Last Name", type: "text", required: true },
  { name: "email", label: "Contact Email", type: "email", required: true },
  { name: "phone", label: "Phone Number", type: "tel", required: true },
  { name: "title", label: "Contact Title", type: "text", required: true }
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    country: "",
    schoolName: "",
    isReferred: false,
    comments: "",
    receiveUpdates: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-16 px-6 bg-white flex justify-center items-center min-h-screen">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1f3254]">
            A Platform That Supports You End-to-End
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div className="flex justify-center">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="form-group">
                <label htmlFor="country" className="block mb-2 text-sm font-medium">
                  Destination Country<span className="text-red-500">*</span>
                </label>
                <select
                  id="country"
                  name="country"
                  className="w-[40rem] p-2.5 border border-gray-300 rounded-md"
                  required
                  value={formData.country}
                  onChange={handleChange}
                >
                  <option value="">--select an item--</option>
                  {countries.map((country) => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
              </div>

              {formFields.map((field) => (
                <div className="form-group" key={field.name}>
                  <label htmlFor={field.name} className="block mb-2 text-sm font-medium">
                    {field.label}{field.required && <span className="text-red-500">*</span>}
                  </label>
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    className="w-[40rem] p-2.5 border border-gray-300 rounded-md"
                    required={field.required}
                    value={formData[field.name] || ""}
                    onChange={handleChange}
                  />
                </div>
              ))}

              <div className="form-group">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="isReferred"
                    name="isReferred"
                    checked={formData.isReferred}
                    onChange={handleChange}
                  />
                  <label htmlFor="isReferred">Referred by someone in Weduka Apply Ltd</label>
                </div>
              </div>

              {formData.isReferred && (
                <>
                  <div className="form-group">
                    <label htmlFor="referredName" className="block mb-2 text-sm font-medium">
                      Referred by Full Name
                    </label>
                    <input
                      type="text"
                      id="referredName"
                      name="referredName"
                      className="w-[40rem] p-2.5 border border-gray-300 rounded-md"
                      value={formData.referredName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="referredEmail" className="block mb-2 text-sm font-medium">
                      Referred by Email
                    </label>
                    <input
                      type="email"
                      id="referredEmail"
                      name="referredEmail"
                      className="w-[40rem] p-2.5 border border-gray-300 rounded-md"
                      value={formData.referredEmail}
                      onChange={handleChange}
                    />
                  </div>
                </>
              )}

              <div className="form-group">
                <label htmlFor="comments" className="block mb-2 text-sm font-medium">
                  Any additional comments:
                </label>
                <textarea
                  id="comments"
                  name="comments"
                  rows={3}
                  className="w-[40rem] p-2.5 border border-gray-300 rounded-md"
                  value={formData.comments}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700">
                Submit
              </button>
            </form>
          </div>
          <div className="hidden lg:block ">
            <img
              src="https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741323439/School-Footer_Illustration_ldbjwo.webp"
              alt="School recruitment illustration"
              className="w-[24rem] h-auto top-0"
            />
          </div>
        </div>
      </div>
    </section>);
    };

export default ContactForm;
