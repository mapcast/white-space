type HSTableHeader = {
  id?: string|number,
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

type Clickable = {
  display: string | JSX.Element,
  onClick: () => void
}

type HSKeyValue = {
  key: string,
  value: string,
  keyDisplay?: string,
  valueDisplay?: string
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

type HSSort = {
  target: string,
  direction: boolean
}

type WrapperProp = {
  children: JSX.Element
}

type WrapperWithTitle = {
  title: string,
  children: JSX.Element
}

type HSSubShelfItem = {
  text: string,
  onClick: () => void
}
type HSShelfItem = {
  icon?: string,
  text: string,
  sub: HSSubShelfItem[]
}

type HSFooterCategory = {
  title: string,
  items: HSFooterItem[]
}
type HSFooterItem = {
  text: string,
  link: string
}