const SummaryTopAccCard = () => {
  return (
    <div className="summary-top-box">
      <div className="sumary-date-box">
        <div className="summary-txt">Summary</div>
        <div className="date-txt-acc">Aug 1, 2023 - Aug 31, 2023</div>
      </div>

      <div className="orders-box-acc flex">
        <div className="each-box-in-summ">
          <div className="amm-summ-txt">$30.4K</div>
          <div className="ord-title-summ">Revenue</div>
        </div>
        <div className="each-box-in-summ">
          <div className="amm-summ-txt">$3.6K</div>
          <div className="ord-title-summ">Orders</div>
        </div>
        <div className="each-box-in-summ">
          <div className="amm-summ-txt">$423K</div>
          <div className="ord-title-summ">Avg. Order Value</div>
        </div>
        <div className="each-box-in-summ">
          <div className="amm-summ-txt">$13.4K</div>
          <div className="ord-title-summ">Net Profit</div>
        </div>
      </div>
    </div>
  );
};

export default SummaryTopAccCard;
