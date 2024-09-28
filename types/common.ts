type HSTableHeader = {
  id: string|number,
  raw: string,
  search?: boolean,
  display?: string,
  bool?: HSBool,
  join?: string,
  type?: string,
}

type HSTableValues = {
  id: string|number,
  values: HSItem[]
}

type HSItem = {
  id?: string|number,
  category?: string,
  display?: string,
  raw: string,
  value?: string|number,
  selectItems?: HSItem[]
}

type HSKeyValue = {
  key: string,
  value: string,
  display: boolean
}

type HSTableSort = {
  target: HSTableColumn|null,
  direction: boolean
}

type HSTableColumn = {
  join: string,
  raw: string,
}

type HSBool = {
  true: string,
  false: string
}