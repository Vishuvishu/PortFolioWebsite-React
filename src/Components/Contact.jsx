import React from "react";
import "../Components/Global.css";
import { useState } from "react";


const handlecolorName = () => {
  let naam = document.getElementById("name");
  let borderColorName = document.getElementById("borderColorName");
  console.log(naam);
  naam.style.color = "#9D8640";
  borderColorName.style.borderBottom = "1px solid #9D8640";
  borderColorName.style.height = "1.5rem";
};

const handlecolorEmail = () => {
  let email = document.getElementById("email");
  let borderColorEmail = document.getElementById("borderColorEmail");
  email.style.color = "#9D8640";
  borderColorEmail.style.borderBottom = "1px solid #9D8640";
  borderColorEmail.style.height = "1.5rem";
};

const handlecolorMessage = () => {
  let message = document.getElementById("message");
  let borderColorMessage = document.getElementById("borderColorMessage");
  message.style.color = "#9D8640";
  borderColorMessage.style.borderBottom = "1px solid #9D8640";
  borderColorMessage.style.height = "1.5rem";
};

const Contact = ({ bgcolor, darkmode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    // Construct the mailto link
    // const mailtoLink = `mailto:vishunkkb.dev@gmail.com?subject=Message from ${name} (${email})&body=${encodeURIComponent(message)}`;
    const mailtoLink = `mailto:youremail@example.com?subject=${encodeURIComponent(
      "Subject"
    )}&body=${encodeURIComponent("Your message body")}`;

    // Open Gmail with the mailto link
    window.location.href = mailtoLink;

  };

  return (
    <>
      {/* <div className="about p-3 relative aboutus"> */}
      <div

        className={` border-solid border-[3px] ${darkmode === "dark" ? "bg-black border-[#4B3D10]" : "bg-white  border-[#B7A261]"
          } ml-10 mr-10 mb-10 p-10 rounded-lg flex flex-col gap-10`}
      >
        <h1
          className="text-2xl font-bold"
          style={{ color: `${bgcolor === "white" ? "#000000" : "white"}` }}
        >
          Contact
        </h1>

        <div
          className="flex flex-col lg:w-11/12 sm:w-full gap-2 p-5 rounded-lg"
          style={{
            background: `${bgcolor === "white" ? "#f3f6f6" : "#1D1D1D"}`,
          }}
        >
          <div className="my-3">
            <h1
              className="text-1xl "
              style={{
                color: `${bgcolor === "white" ? "#000000" : "#A6A6A6"}`,
              }}
            >
              I'm Always Open To Discuss Projects
            </h1>{" "}
            <h1
              className="text-1xl  font-bold"
              style={{
                color: `${bgcolor === "white" ? "#000000" : "white"}`,
              }}
            >
              I Provide Service for Designing and Development for websites and app.
            </h1>
          </div>

          <form onSubmit={handleSubmit} method="POST">
            <div className="flex flex-col">
              <label
                id="name"
                style={{
                  color: `${bgcolor === "white" ? "#000000" : "#A6A6A6"}`,
                }}
              >
                Name*
              </label>

              <input
                type="text"
                className="w-10/12 h-2 border-b border-black outline-none"
                style={{
                  background: `${bgcolor === "white" ? "#f3f6f6" : "#1D1D1D"
                    }`,
                  color: `${bgcolor === "white" ? "#000000" : "white"}`,
                }}
                onClick={handlecolorName}
                value={formData.name}
                onChange={handleChange}
                required
                name="name"
                id="borderColorName"
              />
            </div>

            <div className="my-10 flex flex-col">
              <label
                id="email"
                style={{
                  color: `${bgcolor === "white" ? "#000000" : "#A6A6A6"}`,
                }}
              >
                {" "}
                Email*
              </label>

              <input
                type="email"
                className="w-10/12 h-2 border-b border-black outline-none"
                style={{
                  background: `${bgcolor === "white" ? "#f3f6f6" : "#1D1D1D"
                    }`,
                  color: `${bgcolor === "white" ? "#000000" : "white"}`,
                }}
                onClick={handlecolorEmail}
                value={formData.email}
                onChange={handleChange}
                required
                name="email"
                id="borderColorEmail"
              />
            </div>
            <div className="flex flex-col">
              <label
                id="message"
                style={{
                  color: `${bgcolor === "white" ? "#000000" : "#A6A6A6"}`,
                }}
              >
                {" "}
                Message*
              </label>
              <input
                type="text"
                className="w-10/12 h-2 border-b border-black outline-none"
                style={{
                  background: `${bgcolor === "white" ? "#f3f6f6" : "#1D1D1D"
                    }`,
                  color: `${bgcolor === "white" ? "#000000" : "white"}`,
                }}
                value={formData.message}
                onChange={handleChange}
                required
                onClick={handlecolorMessage}
                name="message"
                id="borderColorMessage"
              />
            </div>

            <button
              className=" my-2 w-32 h-11 mt-4 font-bold rounded-lg btn-sumit"
              style={{
                background: `${bgcolor === "white" ? "#B7A261" : "#4B3D10"}`,
                color: `${bgcolor === "white" ? "#ffffff" : "CCC0C0"}`,
              }}
              type="submit"

            >
              Submit
            </button>
          </form>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Contact;
