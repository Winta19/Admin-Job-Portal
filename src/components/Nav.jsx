import NavNotice from "./NavNotice";
import NavMessage from "./NavMessage";

export default function Nav() {
  return (
    //<Nav className="">
    //<ul className="flex align-items-center">
    <div className="flex items-center gap-6">
      <NavNotice />
      <NavMessage />
    </div>
  );
}
