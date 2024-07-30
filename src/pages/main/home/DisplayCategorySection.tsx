import Heading from "../../../components/ui/Heading";
import { useGetAllActiveCategoriesQuery } from "../../../redux/features/category/categoryApi";
import { TCategory } from "../../../types/category.type";
const DisplayCategorySection = () => {
  const { data: categories } = useGetAllActiveCategoriesQuery(undefined);
  return (
    <div className="py-9">
      <Heading headingTitle="My Market Category" />
      <div className="flex flex-wrap gap-5 py-6">
        {categories?.data?.map((category: TCategory, index: number) => (
          <div key={index} className="text-center">
            <img
              src={category?.icon}
              alt=""
              className="w-24 h-24 p-5 bg-gradient-to-t from-white to-slate-200 rounded-full shadow-sm shadow-[#2D6F6D]"
            />
            <p className="font-semibold py-3">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayCategorySection;
