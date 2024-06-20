import DragAndDrop from "./DragAndDrop";
import TextInput from "./TextInput";

function Extractor() {
  return (
    <div className="w-3/4 h-1/2 bg-blue-800 border-dashed flex border-4 py-4">
      <DragAndDrop />
      <TextInput />
    </div>
  );
}
export default Extractor