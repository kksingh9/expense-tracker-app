import { ClipLoader } from "react-spinners";

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "gray",
  };
const Loader = () => {
  return (
    <ClipLoader
      color={"#111"}
      loading={true}
      cssOverride={override}
      size={15}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};
export default Loader;
