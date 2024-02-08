import service_img from "../../../assets/service-img.png";
const ServiceTab =() =>{
    return(
        <>
        <div className="col-12 col-lg-4 d-flex justify-content-center mt-3">
           <div className="card border-0 service-tab " style={{borderRadius:'1.5rem', width:'100%'}}>
            <h5 style={{color:'white', fontWeight:'600'}}>Need Something Done ASAP ? !</h5>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <p className="mt-8 " style={{marginTop:'5rem'}}>
                        <button type="button" className="btn btn-light hire-btn d-flex justify-content-center" style={{fontSize:'.5rem', color:'#0085FF'}}><span className="serv-txt">Hire a Service Provider</span></button>

                        </p>

                    </div>

                    <div className="col-sm-12 col-md-6  ">
                    <img src={service_img} style={{width:'120px'}} className="service-img d-none d-lg-block"/>

                    </div>

                </div>

            </div>
            </div>
        </div>
        </>
    )
}

export default ServiceTab