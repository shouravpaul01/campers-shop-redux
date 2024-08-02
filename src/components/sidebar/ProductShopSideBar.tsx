import Slider from "rc-slider"
import { useGetAllActiveCategoriesQuery } from "../../redux/features/category/categoryApi";
import { TCategory } from "../../types/category.type";


const ProductShopSideBar = ({rangeValue,setRangeValue,setCategoryValue}:{rangeValue:number[],setRangeValue:(value:any)=>void,setCategoryValue:(value:any)=>void}) => {
    const { data: categories } = useGetAllActiveCategoriesQuery(undefined);
    const handleCategoryValue = (category: string) => {
      setCategoryValue((prev:string[]) => {
        if (prev.includes(category)) {
          return prev.filter((cat:string) => cat !== category);
        } else {
          return [...prev, category];
        }
      });
    };
  return (
    <>
      <div className="bg-white rounded-[4px] ">
            <p className="font-semibold text-lg p-3 border-b">Price Range</p>
            <div className="p-5">
              <Slider
                range
                min={100}
                max={10000}
                railStyle={{ backgroundColor: "whitesmoke", height: 10 }}
                trackStyle={{ backgroundColor: "#92C6C5", height: 10 }}
                value={rangeValue}
                onChange={(value) => setRangeValue(value)}
                handleStyle={{
                  borderColor: "#2D6F6D",
                  height: 20,
                  width: 20,
                  backgroundColor: "#2D6F6D",
                  cursor: "default",
                }}
              />
              <div className="flex justify-between pt-6">
                <input
                  type="text"
                  readOnly
                  className="input input-sm input-bordered rounded-[4px] focus-within:outline-none  w-16"
                  value={rangeValue[0]}
                />
                <input
                  type="text"
                  readOnly
                  className="input input-sm input-bordered rounded-[4px] focus-within:outline-none  w-16"
                  value={rangeValue[1]}
                />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-[4px] ">
            <p className="font-semibold text-lg p-3 border-b">Category</p>
            <div className="p-5 space-y-1">
              {categories?.data.map((category: TCategory, index: number) => (
                <label
                  key={index}
                  className="cursor-pointer flex items-center gap-3"
                >
                  <input
                    type="checkbox"
                    value={category._id}
                    onChange={(e) => handleCategoryValue(e.target.value)}
                    className="checkbox checkbox-sm rounded-[4px] checkbox-success" 
                  />
                  <span className="label-text">{category.name}</span>
                </label>
              ))}
            </div>
          </div>
    </>
  )
}

export default ProductShopSideBar
