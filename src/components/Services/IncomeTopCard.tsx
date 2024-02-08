const IncomeTopCard = () => {
  return (
    <div className="summary-top-box">
      <div className="top-cht-tst flex justify-between addbrd">
        <div className="lsef-row-txt">
          <div className="lft-tstx">Income Statement</div>
        </div>
        <div className="rgt-tstx-c">Download PDF</div>
      </div>

      <div className="list-allinocm-box flex justify-between">
        <div className="txt-line-head">Total Income</div>
        <div className="lst-amt-txt">4,719.00</div>
        <div className="lst-amt-txt">100%</div>
      </div>
      <div className="list-allinocm-box flex justify-between">
        <div className="txt-line-head">Cost of Goods Sold</div>
        <div className="lst-amt-txt">(1,663.00)</div>
        <div className="lst-amt-txt">-35%</div>
      </div>
      <div className="list-allinocm-box flex justify-between">
        <div className="txt-line-head tst-incrse">Gross Profit</div>
        <div className="lst-amt-txt">3,056.00</div>
        <div className="lst-amt-txt">66%</div>
      </div>
    </div>
  );
};

export default IncomeTopCard;
