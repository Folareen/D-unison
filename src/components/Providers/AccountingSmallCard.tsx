const AccountingSmallCard = ({ item }) => {
  return (
    <div className="small-acc-card-box">
      <div className="top-acc-small flex">
        <img src={item.imgUrl} alt="" />
        <div className="small-tit-acc">{item.name}</div>
      </div>
      <div className={`total-acc-per ${item.col}`}>{item.tot}</div>
    </div>
  );
};

export default AccountingSmallCard;
