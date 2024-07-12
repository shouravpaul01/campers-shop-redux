import  { useState } from 'react'
import Modal from '../../../components/ui/Modal';
import { FaPlus } from 'react-icons/fa6';
import CreateUpdateProductForm from '../../../components/form/CreateUpdateProductForm';
import { useGetAllProductsQuery } from '../../../redux/features/product/productApi';
import Loading from '../../../components/ui/Loading';
import ProductTable from '../../../components/table/ProductTable';
import Pagination from '../../../components/ui/Pagination';
import InputSearch from '../../../components/ui/InputSearch';

const Product = () => {
    const [modalId, setModalId] = useState<string>("");
    const [searchInputValue, setSearchInputVlaue] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const {data:products,isLoading}=useGetAllProductsQuery({searchTerm:searchInputValue,page:currentPage})

    const hanleCloseModal = () => {
      setModalId("");
    };
   
    if (isLoading) {
      return <Loading />;
    }
    return (
      <>
      <div className="bg-gray-100 mt-4">
        <div className="flex items-center bg-violet-700 gap-2 py-2 px-4">
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
  
          <ProductTable products={products?.data?.data} />
  
          <div className="px-2 py-3">
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={products?.data?.totalPages}
            />
          </div>
        </div>
      </div>
      <Modal
      width='w-full max-w-4xl'
        modalId={modalId}
        modalTitle="Add Product"
        hanleCloseModal={hanleCloseModal}
      >
       <CreateUpdateProductForm />
      </Modal>
    </>
    )
}

export default Product
