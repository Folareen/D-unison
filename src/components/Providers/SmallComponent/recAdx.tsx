import { IoIosMegaphone } from "react-icons/io";
const RecAdx = () => {
  return (
    <div className="recieve-ads-box flex justify-between">
      <div className="leftrec-ads flex">
        <IoIosMegaphone className="mepn" />
        <div className="sdt-tst">
          To Start receiving Payments locally and internationally seamlessly
          directly into your bank{" "}
        </div>
      </div>
      <button className="set-btn">Set Up</button>
    </div>
  );
};

export default RecAdx;
