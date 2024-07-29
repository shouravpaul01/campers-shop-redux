
const Loading = ({className}:{className?:string}) => {
  return (
    <div className={`flex justify-center ${className}`}>
      <span className="loading loading-ring text-[#2D6F6D]  loading-lg"></span>
      <span className="loading loading-ring loading-lg text-[#2D6F6D] "></span>
      <span className="loading loading-ring loading-lg text-[#2D6F6D] "></span>
    </div>
  )
}

export default Loading
