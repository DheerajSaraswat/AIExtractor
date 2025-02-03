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
    <div className="w-full h-full min-h-[250px] flex flex-col items-center justify-center px-4 py-4 md:py-0">
      <textarea
        className="w-full max-w-md h-48 md:h-64 resize-none outline-none p-2 text-sm border rounded-md bg-blue-900"
        onChange={(e) => setText(e.target.value)}
      >
        {" "}
      </textarea>
      <button
        className="w-full max-w-md py-1 border-white bg-blue-600 rounded-md mt-2 active:scale-95 duration-100"
        onClick={submitText}
      >
        Submit
      </button>
      <ToastContainer />
    </div>
  );
}
export default TextInput;
