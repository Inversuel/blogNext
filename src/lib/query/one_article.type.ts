import { StructuredTextGraphQlResponse } from "react-datocms"

export interface OneArticle {
  data: Data
}

export interface Data {
  article: Article
}

export interface Article {
  _publishedAt: string
  title: string
  smallDescription: string
  posted: string
  imageMain: ImageMain
  id: string
  featureArticle: boolean
  description: StructuredTextGraphQlResponse
  category: Category
  author: Author
}

interface ImageMain {
  id: string
  url: string
  title: any
  alt: string
}

interface Value {
  schema: string
  document: string
}

interface Category {
  title: string
  id: string
}

interface Author {
  name: string
  id: string
  photo: Photo
}

interface Photo {
  alt: string
  url: string
}
