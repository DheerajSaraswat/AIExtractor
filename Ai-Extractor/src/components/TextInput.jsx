import { useState } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoogleGenerativeAI } from "@google/generative-ai";
import geminiCall from "../utils/ApiCall";


function TextInput() {
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("");

  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
  
  const submitText = async () => {
    if (text.trim() == "") {
      toast.error("Text field is Empty. Please enter some text in the field.", {
        position: "top-right",
        style: {
          backgroundColor: "#ba3333",
          color: "#fff",
          borderRadius: "10px",
          padding: "10px",
        },
      });
    } else {
      setLoading(true);
      setIsOpen(true);
      const fetchedKeywords = await geminiCall(text)
      toast.success(`${fetchedKeywords}`, {
        position: "top-center",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <div className="w-1/2 h-full flex flex-col justify-center px-16">
      <textarea
        className="bg-blue-900 w-96 h-64 resize-none outline-none p-2 text-sm border rounded-md"
        onChange={(e) => setText(e.target.value)}
      >
        {" "}
      </textarea>
      <button
        className="py-1 px-8 border-white bg-blue-600 rounded-md mt-2 active:scale-95 duration-100"
        onClick={submitText}
      >
        Submit
      </button>
      <ToastContainer />
    </div>
  );
}
export default TextInput;
