import Slider from "rc-slider"
import { useGetAllActiveCategoriesQuery } from "../../redux/features/category/categoryApi";
import { TCategory } from "../../types/category.type";


const ProductShopSideBar = ({rangeValue,setRangeValue,setCategoryValue}:{rangeValue:number[],setRangeValue:(value:any)=>void,setCategoryValue:(value:any)=>void}) => {
    const { data: categories } = useGetAllActiveCategoriesQuery(undefined);
  return (
    <>
      <div className="bg-slate-100 rounded-md ">
            <p className="font-semibold text-lg p-3 border-b">Price Range</p>
            <div className="p-5">
              <Slider
                range
                railStyle={{ backgroundColor: "white", height: 10 }}
                trackStyle={{ backgroundColor: "blue", height: 10 }}
                value={rangeValue}
                onChange={(value) => setRangeValue(value)}
                handleStyle={{
                  borderColor: "blue",
                  height: 20,
                  width: 20,
                  backgroundColor: "white",
                  cursor: "default",
                }}
              />
              <div className="flex justify-between pt-6">
                <input
                  type="text"
                  readOnly
                  className="input input-bordered input-sm w-16"
                  value={rangeValue[0]}
                />
                <input
                  type="text"
                  readOnly
                  className="input input-bordered input-sm w-16"
                  value={rangeValue[1]}
                />
              </div>
            </div>
          </div>
          <div className="bg-slate-100 rounded-md ">
            <p className="font-semibold text-lg p-3 border-b">Category</p>
            <div className="p-5">
              {categories?.data.map((category: TCategory, index: number) => (
                <label
                  key={index}
                  className="cursor-pointer flex items-center gap-3"
                >
                  <input
                    type="checkbox"
                    value={category._id}
                    onChange={(e) => setCategoryValue(e.target.value)}
                    className="checkbox checkbox-success"
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
