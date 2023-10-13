import { BiSolidError } from "react-icons/bi";

const Error = () => {
  return (
    <div>
      <h1 className="text-6xl font-bold mb-2">Error</h1>
      <div className="flex items-center gap-2 text-xl ">
        <BiSolidError color="#CD5C5C" size={50} />
        <p className="text-2xl">Something went wrong!</p>
      </div>
    </div>
  );
};

export default Error;
