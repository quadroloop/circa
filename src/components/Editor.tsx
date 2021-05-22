import Sidebar from "./Sidebar";
// import AceEditor from "react-ace";
// import "ace-builds/src-noconflict/mode-json";
// import "ace-builds/src-noconflict/theme-monokai";

const Editor = (props: any) => {
  // function updateValue(newValue) {
  //   console.log("change", newValue);
  // }

  return (
    <>
      <Sidebar acitiveLink={"editor"} />
      <div className="content-page">
        {/* <AceEditor
          mode="json"
          theme="monokai"
          onChange={updateValue}
          name="circa-editor"
          editorProps={{ $blockScrolling: true }}
          style={{ height: "100vh", width: "50vw" }}
        /> */}
        <div className="editor-segment">
          <input className="title-input" placeholder="Post title" />
          <div className="editor-input shadow">
            <input
              className="form-control text-dark mb-3"
              placeholder="Custom Field Name"
            />
            <textarea
              className="form-control text-dark content-data"
              placeholder="Content Data"
            />
            <div className="input-types">
              <button className="btn btn-sm btn-default">
                <i className="la la-font" /> Text
              </button>
              <button className="btn btn-sm btn-default">
                <i className="la la-image" /> Image
              </button>

              <button className="btn btn-sm btn-default">
                <i className="la la-video" /> Video
              </button>

              <button className="btn btn-sm btn-default">
                <i className="lab la-jira" /> Collection
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Editor;
