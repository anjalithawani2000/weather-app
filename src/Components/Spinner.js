import { SPINNER_URL } from "../utils/constants";

const Spinner = () => {
  return (
    <center>
      <img
        src={SPINNER_URL}
        width="80%"
        style={{ marginLeft: "10%" }}
      />
    </center>
  )
}

export default Spinner;