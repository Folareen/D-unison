import Layout from "../../components/Layout";
import "../../assets/css/addservice.css";
import { GiSelfLove } from "react-icons/gi";
import { RiErrorWarningFill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import { GrCloudUpload } from "react-icons/gr";
import SelectModal from "../../components/SelectModal";
import { useState } from "react";
const category = ["legal", "illegal"];
const subcategory = ["Writings", "illegal"];
const type = ["fixed", "Writings", "illegal"];
const AddService = () => {
  const [selectedCategory, setSelectedCategory] = useState(category[0]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedSubCategory, setSelectedSubCategory] = useState(category[0]);
  const [isModalSubVisible, setIsModalSubVisible] = useState(false);
  const [selectedTypeCategory, setSelectedTypeCategory] = useState(category[0]);
  const [isModalTypeVisible, setIsModalTypeVisible] = useState(false);

  const handleTypeCategoryChange = (selectedTypeCategory) => {
    setSelectedTypeCategory(selectedTypeCategory);
    toggleModalTypeVisibility();
  };
  const toggleModalTypeVisibility = () => {
    setIsModalTypeVisible(!isModalTypeVisible);
  };

  const handleSubCategoryChange = (selectedSubCategory) => {
    setSelectedSubCategory(selectedSubCategory);
    toggleModalSubVisibility();
  };
  const toggleModalSubVisibility = () => {
    setIsModalSubVisible(!isModalSubVisible);
  };

  const handleCategoryChange = (selectedCategory) => {
    setSelectedCategory(selectedCategory);
    toggleModalVisibility();
  };
  const toggleModalVisibility = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <div className="customer-container">
      <Layout>
        <div className="customer-main-box no-pad-r">
          <div className="invoice-container flex justify-between add-service-cont">
            <div className="last-side-container chan-brd  bg-white add-ser-first">
              <div className="input-details-box">
                <div className="service-label-bdy">
                  <div className="ser-lab">Service Title </div>
                  <div className="ser-bdy">
                    As your Service storefront, your
                    <b> title is the most important place</b> to include
                    keywords that buyers would likely use to search for a
                    service like yours.
                  </div>
                </div>
                <div className="input-titl">
                  <GiSelfLove />
                  <input type="text" className="add-ser-inp" />
                </div>
              </div>
              <div className="input-details-box">
                <div className="service-label-bdy">
                  <div className="ser-lab">Category</div>
                  <div className="ser-bdy">
                    Choose a category most suitable for your Service.
                  </div>
                </div>
                <div
                  className="input-titl flex justify-between item-center"
                  onClick={toggleModalVisibility}
                >
                  <div className="leg-txt-down">
                    <div className="label-txts">Select a Category</div>
                    <div className="txt-led mt-1">{selectedCategory}</div>
                  </div>
                  <div className="down-icn">
                    <FaAngleDown />
                  </div>
                  {isModalVisible && (
                    <SelectModal
                      category={category}
                      selectedCategory={selectedCategory}
                      onCategoryChange={handleCategoryChange}
                    />
                  )}
                </div>
              </div>
              <div className="input-details-box">
                <div className="service-label-bdy">
                  <div className="ser-lab">Sub-Category</div>
                  <div className="ser-bdy">
                    Choose a sub-category most suitable for your Service.
                  </div>
                </div>
                <div
                  className="input-titl flex justify-between item-center"
                  onClick={toggleModalSubVisibility}
                >
                  <div className="leg-txt-down">
                    <div className="label-txts">Select a Sub - Category</div>
                    <div className="txt-led mt-1">{selectedSubCategory}</div>
                  </div>
                  <div className="down-icn">
                    <FaAngleDown />
                  </div>
                  {isModalSubVisible && (
                    <SelectModal
                      category={subcategory}
                      selectedSubCategory={selectedCategory}
                      onCategoryChange={handleSubCategoryChange}
                    />
                  )}
                </div>
              </div>
              <div className="input-details-box">
                <div className="service-label-bdy">
                  <div className="ser-lab">Description </div>
                </div>
                <div className="wrn-bx">
                  <div className="text-area-box">
                    <textarea
                      name=""
                      id=""
                      placeholder="Explain in details what your service is about"
                    ></textarea>
                    <GiSelfLove />
                  </div>
                  <div className="warn-tst">
                    500 Words maximum. Use letters and numbers only.
                  </div>
                </div>
              </div>
              <div className="input-details-box">
                <div className="service-label-bdy">
                  <div className="ser-lab">Requirements</div>
                  <div className="ser-bdy">
                    Explain to your Clients what they need for your service
                  </div>
                </div>
                <div className="input-titl">
                  <input
                    type="text"
                    className="add-ser-inp"
                    placeholder="You must be able to explain in details what you need "
                  />
                </div>
              </div>
              <div className="input-details-box">
                <div className="service-label-bdy">
                  <div className="ser-lab">Price</div>
                  <div className="ser-bdy">
                    How Much do you charge for this Service
                  </div>
                </div>
                <div className="price-inputs-box flex">
                  {/* <div className="contry"></div> */}
                  <div className="amount-pr-ser">
                    <div className="leg-txt-down">
                      <div className="label-txts">Amount</div>
                      <input
                        type="text"
                        className="ammt-inpy"
                        placeholder="2,00|0.00"
                      />
                    </div>
                  </div>
                  <div
                    className="amount-pr-ser"
                    onClick={toggleModalTypeVisibility}
                  >
                    <div className="disflex">
                      <div className="leg-txt-down">
                        <div className="label-txts">Price Type</div>
                        <div className="txt-led mt-1">
                          {selectedTypeCategory}
                        </div>
                      </div>
                      <div className="down-icn">
                        <FaAngleDown />
                      </div>
                      {isModalTypeVisible && (
                        <SelectModal
                          category={type}
                          selectedSubCategory={selectedTypeCategory}
                          onCategoryChange={handleTypeCategoryChange}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="input-details-box">
                <div className="service-label-bdy">
                  <div className="ser-lab">Delivery</div>
                  <div className="ser-bdy">
                    How Long would it take you to have this Service Delivered ?
                  </div>
                </div>
                <div className="price-inputs-box flex">
                  <div className="amount-pr-ser flex justify-between">
                    <div className="leg-txt-down">
                      <div className="dat-txts ">Days</div>
                    </div>
                    <div className="down-icn">
                      <FaAngleDown />
                    </div>
                  </div>
                  <div className="amount-pr-ser">
                    <div className="leg-txt-down">
                      <div className="label-txts">Number</div>
                      <input
                        type="text"
                        className="ammt-inpy"
                        placeholder="5"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="note-bx-bx flex gap-2">
                <div className="note-pls flex gap-1">
                  <RiErrorWarningFill />
                  <div className="note-tsxt">Please note:</div>
                </div>
                <div className="note-bdy">
                  Some categories require that service providers verify their
                  Account.
                </div>
              </div>
            </div>
            <div className="side-first-container bg-white brd-cn add-ser-first">
              <div className="upload-bxs flex justify-between item-center">
                <div className="upld-txt">Upload Gallery</div>
                <div className="upld-icon flex ">
                  <GrCloudUpload />
                </div>
              </div>
              <div className="image-row-contain flex">
                <img
                  src="https://cdn.pixabay.com/photo/2016/11/02/10/04/chicago-1791002_640.jpg"
                  alt=""
                />
                <img
                  src="https://cdn.pixabay.com/photo/2016/11/02/10/04/chicago-1791002_640.jpg"
                  alt=""
                />
                <img
                  src="https://cdn.pixabay.com/photo/2016/11/02/10/04/chicago-1791002_640.jpg"
                  alt=""
                />
                <img
                  src="https://cdn.pixabay.com/photo/2016/11/02/10/04/chicago-1791002_640.jpg"
                  alt=""
                />
                <img
                  src="https://cdn.pixabay.com/photo/2016/11/02/10/04/chicago-1791002_640.jpg"
                  alt=""
                />
                <img
                  src="https://cdn.pixabay.com/photo/2016/11/02/10/04/chicago-1791002_640.jpg"
                  alt=""
                />
              </div>
              <div className="tot-upld-txt ">6 Images Uploaded </div>

              <div className="input-titl flex justify-between item-center ful-wid ">
                <div className="leg-txt-down">
                  <div className="label-txts">Status</div>
                  <div className="txt-led mt-1">Publish </div>
                </div>
                <div className="down-icn">
                  <FaAngleDown />
                </div>
              </div>

              <div className="subm-btn-ser">
                <button className="subm-btn-m">SUBMIT</button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default AddService;
