export interface AdressesBody {
  AddressID: number;
  UserID: number;
  Street: string;
  City: string;
  ZipCode: string;
}

export interface OrderDetailsBody {
  OrderDetailID?: number;
  Quantity: number;
  OrderID: number;
  OrderDate: Date;
  UserID: number;
  ProductID: number;
}

export interface OrdersBody {
  OrderID: number;
  UserID?: number;
  OrderDate?: Date;
  OrderDetailID?: number | undefined;
  ProductID?: number | null | undefined;
  Quantity?: number | null | undefined;
}

export interface ProductsBody {
  ProductID: number;
  ProductName: string;
  Price: number;
}

export interface UsersBody {
  UserID: number;
  AddressID?: number;
  Street?: string | undefined;
  City?: string | undefined;
  ZipCode?: string | null;
  UserName: string;
  Email: string;
  PhoneNumber?: string;
}
