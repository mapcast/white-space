type TableHeader = {
  id: string|number,
  raw: string,
  search?: boolean,
  display?: string,
}

type TableValues = {
  id: string|number,
  values: HSItem[]
}

type HSItem = {
  id: string|number,
  display?: string,
  raw: string|number
}