import  { useState } from 'react'
import Modal from '../../../components/ui/Modal'
import { FaPlus } from 'react-icons/fa6'
import CreateUpdateCategoryForm from '../../../components/form/CreateUpdateCategoryForm';
import CategoryTable from '../../../components/table/CategoryTable';
import { useGetAllCategoriesQuery } from '../../../redux/features/category/categoryApi';
import Pagination from '../../../components/ui/Pagination';
import InputSearch from '../../../components/ui/InputSearch';
import Loading from '../../../components/ui/Loading';

const Category = () => {
    const [modalId, setModalId] = useState<string>("");
  const [searchInputValue, setSearchInputVlaue] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const {data:categories,isLoading}=useGetAllCategoriesQuery({searchTerm:searchInputValue,page:currentPage})
  const hanleCloseModal = () => {
    setModalId("");
  };
 
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
    <div className="bg-gray-100 mt-4">
      <div className="flex items-center bg-[#90e0b3] gap-2 py-2 px-4">
        <p className="font-bold text-white flex-1">All Category</p>
        <button
          onClick={() => setModalId("openModal")}
          className={`btn btn-sm btn-circle  btn-info`}
        >
          <FaPlus />
        </button>
      </div>
      <div className="px-4 py-5">
        <div className="flex flex-col md:flex-row gap-3 md:gap-0 justify-between">
          <div className="w-full md:w-80 mb-3">
            <InputSearch setSearchValue={setSearchInputVlaue} />
          </div>
        </div>

        <CategoryTable categories={categories?.data?.data}/>

        <div className="px-2 py-3">
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={categories?.data?.totalPages}
          />
        </div>
      </div>
    </div>
    <Modal
      modalId={modalId}
      modalTitle="Add Category"
      hanleCloseModal={hanleCloseModal}
    >
     <CreateUpdateCategoryForm  />
    </Modal>
  </>
  )
}

export default Category
