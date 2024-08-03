import { useEffect } from 'react'

const useTitle = (title?:string) => {
    useEffect(() => {
        document.title = title ?`${title} | Campers Shop`:"Campers Shop";
      }, [title]);
}

export default useTitle
