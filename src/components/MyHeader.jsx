// import Main from "./Main";
import Nav from "./Nav";
import Side from "./Side";

//import { Link } from "react-router-dom";
export default function MyHeader() {
  return (
    <>
      <div className=" border-b-2 border-black flex items-center justify-between py-4  px-4">
        <div className="flex items-center gap-8  ">
          <h1 className="text-2xl ">AA</h1>
          <Side />
        </div>
        <Nav />
      </div>
    </>
  );
}
