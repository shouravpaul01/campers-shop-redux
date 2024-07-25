import { FaMagnifyingGlass } from "react-icons/fa6";

type TInputSearchProps = {
  className?:string,
  setSearchValue: (prev: string) => void;
};
const InputSearch = ({className, setSearchValue }: TInputSearchProps) => {
  const handleSearch = () => {
    const searchInput = document.getElementById(
      "searchInput"
    ) as HTMLInputElement;
    if (searchInput) {
      setSearchValue(searchInput.value);
    }
  };
  const handleKeyDownSearch = (e: any) => {
    if (e.key === "Enter") {
      setSearchValue(e.target.value);
    }
  };
  return (
    <>
      <label className={`input  rounded-full flex items-center gap-2 ${className}`}>
        <input
          type="text"
          className="grow focus-within:bg-none"
          placeholder="Search"
          id="searchInput"
          onKeyDown={handleKeyDownSearch}
        />
        <FaMagnifyingGlass onClick={() => handleSearch()} />
      </label>
    </>
  );
};

export default InputSearch;
