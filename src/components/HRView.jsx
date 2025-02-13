import ListOfApplicants from "./ListOfApplicants";

export default function HRView() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome, HR!</h1>
      <ListOfApplicants />
    </div>
  );
}
