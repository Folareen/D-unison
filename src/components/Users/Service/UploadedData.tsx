import service from "../../../assets/service.png";
import upload from "../../../assets/upload.png";

const UploadedData =()=>{

    return(
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <p style={{color:'#222325', fontSize:'.9rem'}}>Upload gallery</p>

                </div>
                <div className="col-6">
                    <div className="d-flex justify-content-end align-items-center">
                    <img src={upload} className="img-fluid"/>

                    </div>

                </div>

                <div className="col-4 mt-3">
                <img src={service} class="rounded" alt="..." style={{width:'100%'}}/>

                </div>

                <div className="col-4 mt-3">
                <img src={service} class="rounded" alt="..." style={{width:'100%'}}/>

                </div>

                <div className="col-4 mt-3">
                <img src={service} class="rounded" alt="..." style={{width:'100%'}}/>

                </div>

                <div className="col-4 mt-3">
                <img src={service} class="rounded" alt="..." style={{width:'100%'}}/>

                </div>

                <div className="col-4 mt-3">
                <img src={service} class="rounded" alt="..." style={{width:'100%'}}/>

                </div>

                <div className="col-4 mt-3">
                <img src={service} class="rounded" alt="..." style={{width:'100%'}}/>

                </div>

                <div className="col-12 mt-2">
                    <p style={{fontSize:'.7rem', fontWeight:'700'}}>6 images uploaded</p>
                    <button className="btn btn-primary" type="button" style={{width:'100%'}}>SUBMIT</button>

                </div>

               

               

            </div>
        
        </div>
    )

}

export default UploadedData;