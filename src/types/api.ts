export type ICategory = string

export interface IJoke {
  id: string
  categories: ICategory[]
  created_at: string
  icon_url: string
  updated_at: string
  url: string
  value: string
}
