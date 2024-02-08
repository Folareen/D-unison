import Pagination from "react-bootstrap/Pagination";
const PaginationBox = () => {
  return (
    <Pagination >
      
      <Pagination.First  />
      <Pagination.Item className="" >{1}</Pagination.Item>
  

      <Pagination.Item active>{2}</Pagination.Item>

      
      

      <Pagination.Ellipsis />
      <Pagination.Item disabled>{4}</Pagination.Item>
      <Pagination.Last />
    
    </Pagination>
  );
};

export default PaginationBox;
