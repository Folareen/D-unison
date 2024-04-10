import React, { useState } from "react";
import "./CardStyle.css"
import { IoSettingsSharp } from "react-icons/io5";
import { BsFillChatRightDotsFill } from "react-icons/bs";
import { MdPayment } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import PaginationBox from "../../Providers/SmallComponent/Pagination";
const InvoiceCard = () => {
    const numberOfTimes = 4;
    const [isDraft, setIsDraft] = useState(false);
    const [isAll, setIsAll] = useState(false);

    const handleIsPublished = () => {
        setIsDraft(false);
        setIsAll(false);
    };

    const handleIsDraft = () => {
        setIsDraft(true);
        setIsAll(false);
    };

    const handleIsAll = () => {
        setIsDraft(false);
        setIsAll(true);
    };

    return (
        <>
            <div className="container py-3 ">
                <div className="row">





                    {Array.from({ length: numberOfTimes }, (_, index) => (
                        <div className="col-12 col-md-4 col-lg-4  py-2">
                            <div className="card border-0 shadow px-2" style={{ borderRadius: '1.5rem', padding: '.4em', width: '100%', backgroundColor: '#FFF' }}>

                                <div className="container card-text py-1">
                                    <div className="row">
                                        <div className="col-6">
                                            <p className="">Invoice Id</p>

                                        </div>
                                        <div className="col-6">
                                            <p className="text-center">#12995</p>

                                        </div>
                                        <div className="col-6">
                                            <p className="">Date</p>

                                        </div>
                                        <div className="col-6">
                                            <p className="text-center">14/09/2021</p>

                                        </div>

                                        <div className="col-6">
                                            <p className="">Amount</p>

                                        </div>
                                        <div className="col-6">
                                            <p className="text-center">N 50,000 : 00</p>

                                        </div>

                                        <div className="col-6">
                                            <p className="">Status</p>

                                        </div>
                                        <div className="col-6 text-center">
                                            <button type="button" className="btn btn-warning btn-sm serv-btn" style={{ width: '100%', backgroundColor: '#FFE6EF', color: '#972B4F', fontSize: '.5rem', fontWeight: '600' }}>UNPAID</button>


                                        </div>
                                        <div className="col-6 d-flex justify-content-center align-items-center">
                                            <button type="button" className="btn btn-light d-flex align-items-center " style={{ fontSize: '.5rem', width: '100%', color: '#005ADE', fontWeight: '700' }}>
                                                <BsFillChatRightDotsFill style={{ marginRight: '5px' }} className="" size={15} /> <span className="invoice-text">Chat provider</span>
                                            </button>
                                        </div>

                                        <div className="col-6 text-center ">
                                            <button type="button" className="btn btn-lightr serv-btn" style={{ fontSize: '.5rem', width: '100%', backgroundColor: '#005ADE', color: 'white' }}>
                                                <div className="text-center">
                                                    <MdPayment style={{ marginRight: '' }} size={17} /> <span>Pay</span>

                                                </div>
                                            </button>
                                        </div>



                                    </div>

                                </div>
                            </div>


                        </div>
                    ))}


                    {Array.from({ length: numberOfTimes }, (_, index) => (
                        <div className="col-12 col-md-4 col-lg-4 py-2">
                            <div className="card border-0 px-2" style={{ borderRadius: '1.5rem', padding: '.5em', width: '100%', backgroundColor: '#FFF' }}>

                                <div className="container card-text  py-1">
                                    <div className="row">
                                        <div className="col-6">
                                            <p>Invoice Id</p>

                                        </div>
                                        <div className="col-6">
                                            <p className="text-center">#12995</p>

                                        </div>
                                        <div className="col-6">
                                            <p>Date</p>

                                        </div>
                                        <div className="col-6 text-center">
                                            <p>14/09/2021</p>

                                        </div>

                                        <div className="col-6">
                                            <p>Amount</p>

                                        </div>
                                        <div className="col-6 text-center">
                                            <p>N 50,000 : 00</p>

                                        </div>

                                        <div className="col-6">
                                            <p>Status</p>

                                        </div>
                                        <div className="col-6 text-center">
                                            <button type="button" className="btn btn-warning btn-sm serv-btn" style={{ width: '100%', backgroundColor: '#EBF8F1', color: '#449271', fontSize: '.5rem', fontWeight: '600' }}>PAID</button>


                                        </div>
                                        <div className="col-6 d-flex justify-content-center align-items-center">
                                            <button type="button" className="btn btn-light d-flex align-items-center" style={{ fontSize: '.5rem', width: '100%', color: '#005ADE', fontWeight: '700' }}>
                                                <BsFillChatRightDotsFill style={{ marginRight: '5px' }} size={18} /> <span className="invoice-text">Chat provider</span>
                                            </button>
                                        </div>

                                        <div className="col-6 text-center">
                                            <button type="button" className="btn btn-light serv-btn " style={{ fontSize: '.5rem', width: '100%', backgroundColor: '#005ADE', color: 'white' }}>

                                                <MdPayment style={{ marginRight: '' }} size={17} /> <span>Pay</span>

                                            </button>
                                        </div>



                                    </div>

                                </div>
                            </div>


                        </div>
                    ))}









                </div>

            </div>





            {/* pagination */}

            <div className="total-page-box">
                <div className="show-txt mx-4">
                    Showing <b>1-10</b> from <b>46</b> data
                </div>
                <div className="pagination-container mx-4">
                    {<PaginationBox />}
                </div>
            </div>


        </>
    )
}
export default InvoiceCard;