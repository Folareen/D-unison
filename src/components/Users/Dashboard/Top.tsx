import { SiSimpleanalytics } from "react-icons/si";
import { TbMoneybag } from "react-icons/tb";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { MdShowChart } from "react-icons/md";
import "./DashStyle.css"
import DasCrd from "./DashCard";


const Top =() =>{
    const data = [
        { img: <SiSimpleanalytics className="tsb" size={45} />, count: 75, for: "Total orders" },
        { img: <TbMoneybag className="" size={50}/>, count: 357, for: "Total Spent" },
        { img: <LiaFileInvoiceSolid className="" size={50}/>, count: 650, for: "Total Invoices" },
        { img: <MdShowChart className="" size={45}/>, count: "$128000", for: "Paid invoices" },
      ];

    return(
        
                    <div className="row-crd flex justify-between">
            {data.map((item, index) => (
              <DasCrd
                key={index}
                img={item.img}
                count={item.count}
                forText={item.for}
              />
            ))}
          </div>

                   
    )

}

export default Top;