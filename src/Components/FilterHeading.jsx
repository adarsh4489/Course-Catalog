import "./FilterHeading.css";

function FilterHeading(props) {
  let filterData=props.filterData;
  let category=props.category;
  let setCategory=props.setCategory;

function filterHandler(title)
  {
    setCategory(title);
  }
  
  return (
    <div className="filter-section">
      {
        filterData.map((data)=>{
          return( 
            <button key={data.id} onClick={()=>filterHandler(data.title)} className="btn" style={{ border: category===data.title ? ("2px solid white") :"none" }}>
              {data.title}
            </button>
          )
          
        })
      }
    </div>
  );
}
export default FilterHeading;
