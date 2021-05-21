import Sidebar from "./Sidebar";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-monokai";

const Editor = (props: any) => {
  function updateValue(newValue) {
    console.log("change", newValue);
  }

  return (
    <>
      <Sidebar />
      <div className="content-page">
        <AceEditor
          mode="json"
          theme="monokai"
          onChange={updateValue}
          name="circa-editor"
          editorProps={{ $blockScrolling: true }}
          style={{ height: "100vh", width: "50vw" }}
        />
      </div>
    </>
  );
};

export default Editor;
