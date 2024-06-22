import { useState, useEffect } from "react";
import { toast, Bounce } from "react-toastify";
import geminiCall from "../utils/ApiCall";

function DragAndDrop() {
  const [dragging, setDragging] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file.type !== "text/plain") {
      toast.error("Only .txt file is accepted.", {
        position: "top-right",
        style: {
          backgroundColor: "#ba3333",
          color: "#fff",
          borderRadius: "10px",
          padding: "10px",
        },
      });
      return;
    }
    setUploadedFile(file);
    readFileData(file);
  };

  useEffect(() => {
    const fileInput = document.getElementById("fileInput");
    fileInput.addEventListener("change", (e) => {
      e.preventDefault();
      const file = e.target.files[0];
      if (file.type !== "text/plain") {
        toast.error("Only .txt file is accepted.", {
          position: "top-right",
          style: {
            backgroundColor: "#ba3333",
            color: "#fff",
            borderRadius: "10px",
            padding: "10px",
          },
        });
        return;
      }
      setUploadedFile(file);
      readFileData(file);
    });
  }, []);

  const readFileData = (file) => {
    const reader = new FileReader();
    reader.onload = async () => {
      const fileContent = reader.result;
      const fetchedKeywords = await geminiCall(fileContent);
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
    };
    reader.readAsText(file);
  };

  return (
    <div
      className="w-1/2 h-full border-r-2 flex flex-col gap-5 justify-center"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <span className="text-2xl text-center">Upload File</span>
      {dragging ? (
        <div className="h-2/4 bg-blue-600 border-white border-double border-2 flex items-center justify-center cursor-pointer">
          Drop file here
        </div>
      ) : (
        <div className="h-2/4  bg-blue-600 border-white border-double border-2 flex flex-col items-center justify-center cursor-pointer">
          <span>Drag file here</span>
          <input type="file" id="fileInput" className="w-16 h-10 mt-2" />
          <span className="text-[.7rem]">(Only .txt file accepted)</span>
        </div>
      )}
      {uploadedFile && (
        <p className="text-center">File uploaded: {uploadedFile.name}</p>
      )}
    </div>
  );
}
export default DragAndDrop;
