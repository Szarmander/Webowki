/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "@tanstack/react-query";
import { OrdersBody } from "../types/types";

export const getOrders = async () => {
  return fetch("http://localhost:3000/orders").then((response) =>
    response.json()
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const postOrders = async (body: OrdersBody) => {
  return fetch("http://localhost:3000/orders", {
    method: "POST",
    body: JSON.stringify({
      OrderDetailID: Number(body.OrderDetailID),
      Quantity: Number(body.Quantity),
      OrderID: Number(body.OrderID),
      OrderDate: body.OrderDate,
      UserID: Number(body.UserID),
      ProductID: Number(body.ProductID),
    }),
    headers: {
      "Content-type": "application/json",
    },
  }).then((response) => response.json());
};

export const patchOrders = async (body: OrdersBody) => {
  return fetch("http://localhost:3000/orders", {
    method: "PATCH",
    body: JSON.stringify({
      OrderDetailID: Number(body.OrderDetailID),
      Quantity: Number(body.Quantity),
      OrderID: Number(body.OrderID),
      OrderDate: body.OrderDate,
      UserID: Number(body.UserID),
      ProductID: Number(body.ProductID),
    }),
    headers: {
      "Content-type": "application/json",
    },
  }).then((response) => response.json());
};

export const deleteOrders = async (body: OrdersBody) => {
  return fetch("http://localhost:3000/orders", {
    method: "DELETE",
    body: JSON.stringify({
      OrderDetailID: Number(body.OrderDetailID),
      Quantity: Number(body.Quantity),
      OrderID: Number(body.OrderID),
      OrderDate: body.OrderDate,
      UserID: Number(body.UserID),
      ProductID: Number(body.ProductID),
    }),
    headers: {
      "Content-type": "application/json",
    },
  }).then((response) => response.json());
};

export const useOrders = (
  httpMethod: "GET" | "POST" | "PATCH" | "DELETE",
  body?: OrdersBody
) => {
  const queryKey = [`orders_${httpMethod.toLowerCase()}`];
  switch (httpMethod) {
    case "GET":
      return useQuery<OrdersBody[]>({ queryKey, queryFn: getOrders });
      break;
    case "POST":
      if (!body) throw new Error(`Invalid body}`);
      return useQuery<OrdersBody[]>({
        queryKey,
        queryFn: () => postOrders(body),
      });
      break;
    case "PATCH":
      if (!body) throw new Error(`Invalid body}`);
      return useQuery<OrdersBody[]>({
        queryKey,
        queryFn: () => patchOrders(body),
      });
      break;
    case "DELETE":
      if (!body) throw new Error(`Invalid body}`);
      return useQuery<OrdersBody[]>({
        queryKey,
        queryFn: () => deleteOrders(body),
      });
      break;
    default:
      throw new Error(`Invalid HTTP method: ${httpMethod}`);
  }
};
