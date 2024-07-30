export type TCategory = {
    _id?: string;
    name: string;
    icon:any,
    description?: string;
    status?:boolean;
  };
  
  export type TCategoryTableProps={
    categories:TCategory[];
  }
  export type TErrorMessage = {
    path:string,
    message:string
  };