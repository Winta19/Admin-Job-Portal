import ListOfApplicants from "../components/ListOfApplicants";

const Main = () => {
  return (
    <main
      className="flex-1 bg-gray-100 p-4"
      style={{
        marginTop: "64px", // Matches top-16
        marginLeft: "250px", // Matches w-60
      }}
    >
      <ListOfApplicants />
    </main>
  );
};

export default Main;
