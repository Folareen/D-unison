const data = [
  { img: `/images/l3.png`, count: 75, for: "Total Customers" },
  { img: `/images/l2.png`, count: 357, for: "Total Service Delivered" },
  { img: `/images/l1.png`, count: 650, for: "Total Orders" },
  { img: `/images/l4.png`, count: "$1280", for: "Total Revenue" },
];
const DasCrd = ({ img, count, forText }) => {
  return (
    <div className="each-card-box flex">
      <img src={img} alt="" />
      <div className="count-txt">
        <h5 className="">
          <b className="">{count}</b>
        </h5>
        <div className="b-tst">{forText}</div>
      </div>
    </div>
  );
};

export default DasCrd;
