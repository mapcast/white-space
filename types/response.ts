type PageResult<T> = {
  code: number,
  message: string,
  totalPages: number,
  totalElements: number,
  contents: T[]
}

type PageableResult<T> = {
  success: boolean,
  code: number,
  message: string,
  [key: string]: any,
  page: {
    number: number,
    size: number,
    first: boolean,
    last: boolean,
    totalPages: number,
    totalElements: number,
    numberOfElements: number,
    empty: boolean,
    content: T[],
    pageable: {
      offset: number,
      pageSize: number,
      pageNumber: number
    }
  }
}

type ListResult<T> = {
  success: boolean,
  code: number,
  message: string,
  [key: string]: string | boolean | number | T[],
  list: T[]
}

type SingleResult<T> = {
  success: boolean,
  code: number,
  message: string,
  [key: string]: string | boolean | number | T | null,
  data: T | null
}

type CommonResult = {
  success: boolean,
  code: number,
  message: string,
  [key: string]: string | boolean | number
}