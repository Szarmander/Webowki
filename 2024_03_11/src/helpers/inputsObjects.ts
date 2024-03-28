export const AdressesInputs = [
  {
    title: "AddressID",
    type: "number",
    isRequired: true,
  },
  {
    title: "UserID",
    type: "number",
    isRequired: false,
  },
  {
    title: "Street",
    type: "text",
    isRequired: true,
  },
  {
    title: "City",
    type: "text",
    isRequired: true,
  },
  {
    title: "ZipCode",
    type: "text",
    isRequired: false,
  },
];

export const OrderDetailsInput = [
  {
    title: "OrderDetailID",
    type: "number",
    isRequired: false,
  },
  {
    title: "Quantity",
    type: "number",
    isRequired: true,
  },
  {
    title: "OrderID",
    type: "number",
    isRequired: true,
  },
  {
    title: "OrderDate",
    type: "date",
    isRequired: true,
  },
  {
    title: "UserID",
    type: "number",
    isRequired: true,
  },
  {
    title: "ProductID",
    type: "number",
    isRequired: true,
  },
];

export const OrdersInput = [
  {
    title: "OrderID",
    type: "number",
    isRequired: true,
  },
  {
    title: "UserID",
    type: "number",
    isRequired: false,
  },
  {
    title: "OrderDate",
    type: "date",
    isRequired: false,
  },
  {
    title: "OrderDetailID",
    type: "number",
    isRequired: false,
  },
  {
    title: "ProductID",
    type: "number",
    isRequired: false,
  },
  {
    title: "Quantity",
    type: "number",
    isRequired: false,
  },
];

export const ProductsInput = [
  {
    title: "ProductID",
    type: "number",
    isRequired: true,
  },
  {
    title: "ProductsName",
    type: "string",
    isRequired: true,
  },
  {
    title: "Price",
    type: "number",
    isRequired: true,
  },
];

export const UsersInput = [
  {
    title: "UserId",
    type: "number",
    isRequired: true,
  },
  {
    title: "AddressID",
    type: "number",
    isRequired: false,
  },
  {
    title: "Street",
    type: "text",
    isRequired: false,
  },
  {
    title: "City",
    type: "text",
    isRequired: false,
  },
  {
    title: "ZiCode",
    type: "text",
    isRequired: false,
  },
  {
    title: "UserName",
    type: "text",
    isRequired: true,
  },
  {
    title: "Email",
    type: "text",
    isRequired: true,
  },
  {
    title: "PhoneNumber",
    type: "text",
    isRequired: false,
  },
];
