const SmallExpCard = ({ imgUrl, txt, amt }) => {
  return (
    <div className="small-card-exp-box flex">
      <div className="image-exp-holder">
        <img src={imgUrl} alt="" />
      </div>
      <div className="tot-exep-cont">
        <div className="tot-tst-amt">{txt}</div>
        <div className="amput-txt">{amt}</div>
      </div>
    </div>
  );
};

export default SmallExpCard;
