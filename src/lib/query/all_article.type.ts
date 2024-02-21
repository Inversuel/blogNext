export interface RootQueryAllArticle {
  data: Data
}

export interface Data {
  allArticles: AllArticle[]
}

export interface AllArticle {
  author: Author
  title: string
  smallDescription: string
  posted: string
  imageMain: ImageMain
  id: string
  description: Description
  category: Category
  _publishedAt: string
  featureArticle: boolean
}

export interface Author {
  name: string
  id: string
  photo: Photo
}

export interface Photo {
  alt: string
  url: string
}

export interface ImageMain {
  url: string
  alt: string
  author: any
  id: string
  title: string
}

export interface Description {
  value: Value
  links: any[]
}

export interface Image {
  id: string
  url: string
  alt: any
}

export interface Value {
  schema: string
  document: Document
}

export interface Document {
  type: string
  children: Children[]
}

export interface Children {
  type: string
  level?: number
  children?: Children2[]
  code?: string
  language?: string
  item?: string
}

export interface Children2 {
  type: string
  value: string
}

export interface Category {
  title: string
  position: number
  id: string
}
