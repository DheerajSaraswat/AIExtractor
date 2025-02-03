import DragAndDrop from "./DragAndDrop";
import TextInput from "./TextInput";

function Extractor() {
  return (
    <div className="w-full md:w-3/4 md:h-3/4 bg-blue-800 border-dashed flex flex-col md:flex-row border-4 py-4 my-8">
      <DragAndDrop />
      <TextInput />
    </div>
  );
}
export default Extractor