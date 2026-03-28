import type { IProduct } from './types'

export interface IAppProps {
  products: IProduct[];
}

export interface IProductsPageProps {
  products: IProduct[];
}

export interface IProductsContainerProps {
  products: IProduct[];
}

export interface IProductsListProps {
  products: IProduct[];
}

export interface IProtectedRouteProps {
  children: React.ReactNode
};