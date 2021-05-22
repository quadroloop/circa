import Sidebar from "./Sidebar";
import { guid } from "./Utils";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-github";

const Editor = (props: any) => {
  function updateValue(newValue) {
    console.log("change", newValue);
  }

  const ContentFormat = {
    title: "folio",
    date_created: Date.now(),
    date_updated: Date.now(),
    posts: [
      {
        id: guid(),
        title: "Onos",
        description1:
          "2020 - Present | An Open-source project which aims to use satellite imagery and machine learing to automatically predict a potential atmospheric disturbance.",
        collection_1: [
          {
            type: "image",
            title: "sx1",
            src:
              "https://camo.githubusercontent.com/5d8beb1718ee417a35e461907e04753cf594330ad64f708a96b69183f8421cad/68747470733a2f2f692e6962622e636f2f354d47785077462f53637265656e2d53686f742d323032302d31312d31332d61742d362d30302d33332d414d2e706e67",
          },
          {
            type: "image",
            title: "sx2",
            src:
              "https://scontent.fcrk1-3.fna.fbcdn.net/v/t1.15752-9/124241142_999480410455546_89740305294781535_n.png?_nc_cat=101&ccb=1-3&_nc_sid=ae9488&_nc_ohc=BfC5sij_j7AAX_cuWin&_nc_oc=AQnIH0Mo4_OE43WjBLHLoXhxKrx25jUMwsRGLIIXqJS7S8YZ6CbMnZirFj8YdqwJI6k&tn=Uiwx8bNhN6dAZbjZ&_nc_ht=scontent.fcrk1-3.fna&oh=8ff0069e4f9070e3f59bdd8726e477d3&oe=60C87230",
          },
          {
            type: "image",
            title: "sx3",
            src:
              "https://camo.githubusercontent.com/5d8beb1718ee417a35e461907e04753cf594330ad64f708a96b69183f8421cad/68747470733a2f2f692e6962622e636f2f354d47785077462f53637265656e2d53686f742d323032302d31312d31332d61742d362d30302d33332d414d2e706e67",
          },
        ],
        description2:
          "The project was built using NextJS for the Frontend and the Backend API of the Web Application. And Python3 is used for Downloading Satellite Images, Generating content for the training dataset and Training the Machine Learning Model.",
        awards: [
          "+ 2nd Place Karagathon 2020 | Nationwide Hackathon | Philippines",
          "+ YSEALI Marine Accelerator Program 2021 Selected Project (Philippines)",
        ],
        links: [
          {
            name: "Website",
            link: "https://google.com",
          },
          {
            name: "Case Study",
            link: "https://google.com",
          },
          {
            name: "Source Code",
            link: "https://google.com",
          },
        ],
      },
    ],
  };

  return (
    <>
      <Sidebar acitiveLink={"editor"} />
      <div className="content-page">
        <AceEditor
          mode="json"
          theme="textmate"
          onChange={updateValue}
          name="circa-editor"
          editorProps={{ $blockScrolling: true }}
          style={{ height: "100vh", width: "50vw" }}
        />

        {/* <div className="editor-segment">
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
        </div> */}
      </div>
    </>
  );
};

export default Editor;
