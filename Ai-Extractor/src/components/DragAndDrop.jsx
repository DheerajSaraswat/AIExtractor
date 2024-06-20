import { useState } from "react";
import openAICall from "../utils/ApiCall";

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
    setUploadedFile(file);
    readFileData(file);
  };

  document.addEventListener("DOMContentLoaded", () => {
    const fileInput = document.getElementById("fileInput");

    fileInput.addEventListener("change", (e) => {
      e.preventDefault();
      const file = e.target.files[0];
      setUploadedFile(file);
      readFileData(file);
    });
  });

  const readFileData = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      const fileContent = reader.result;
      console.log(fileContent);
      // openAICall(fileData)
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
        <div className="w-48 h-2/4 ml-40 bg-blue-600 border-white border-double border-2 flex items-center justify-center cursor-pointer">
          Drop file here
        </div>
      ) : (
        <div className="w-48 h-2/4 ml-40 bg-blue-600 border-white border-double border-2 flex flex-col items-center justify-center cursor-pointer">
          <span>Drag file here</span>
          <input type="file" id="fileInput" className="w-16 h-10 mt-2" />
        </div>
      )}
      {uploadedFile && <p>File uploaded: {uploadedFile.name}</p>}
    </div>
  );
}
export default DragAndDrop;