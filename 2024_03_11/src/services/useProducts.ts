/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "@tanstack/react-query";
import { ProductsBody } from "../types/types";

export const getProducts = async () => {
  return fetch("http://localhost:3000/products").then((response) =>
    response.json()
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const postProducts = async (body: ProductsBody) => {
  return fetch("http://localhost:3000/products", {
    method: "POST",
    body: JSON.stringify({
      ProductID: Number(body.ProductID),
      ProductName: body.ProductName,
      Price: Number(body.Price),
    }),
    headers: {
      "Content-type": "application/json",
    },
  }).then((response) => response.json());
};

export const patchProducts = async (body: ProductsBody) => {
  return fetch("http://localhost:3000/products", {
    method: "PATCH",
    body: JSON.stringify({
      ProductID: Number(body.ProductID),
      ProductName: body.ProductName,
      Price: Number(body.Price),
    }),
    headers: {
      "Content-type": "application/json",
    },
  }).then((response) => response.json());
};

export const deleteProducts = async (body: ProductsBody) => {
  return fetch("http://localhost:3000/products", {
    method: "DELETE",
    body: JSON.stringify({
      ProductID: Number(body.ProductID),
      ProductName: body.ProductName,
      Price: Number(body.Price),
    }),
    headers: {
      "Content-type": "application/json",
    },
  }).then((response) => response.json());
};

export const useProducts = (
  httpMethod: "GET" | "POST" | "PATCH" | "DELETE",
  body?: ProductsBody
) => {
  const queryKey = [`products_${httpMethod.toLowerCase()}`];
  switch (httpMethod) {
    case "GET":
      return useQuery<ProductsBody[]>({ queryKey, queryFn: getProducts });
      break;
    case "POST":
      if (!body) throw new Error(`Invalid body}`);
      return useQuery<ProductsBody[]>({
        queryKey,
        queryFn: () => postProducts(body),
      });
      break;
    case "PATCH":
      if (!body) throw new Error(`Invalid body}`);
      return useQuery<ProductsBody[]>({
        queryKey,
        queryFn: () => patchProducts(body),
      });
      break;
    case "DELETE":
      if (!body) throw new Error(`Invalid body}`);
      return useQuery<ProductsBody[]>({
        queryKey,
        queryFn: () => deleteProducts(body),
      });
      break;
    default:
      throw new Error(`Invalid HTTP method: ${httpMethod}`);
  }
};
