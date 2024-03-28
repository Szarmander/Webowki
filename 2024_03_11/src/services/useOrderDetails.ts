/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "@tanstack/react-query";
import { OrderDetailsBody } from "../types/types";

export const getOrderDetails = async () => {
  return fetch("http://localhost:3000/orderDetails").then((response) =>
    response.json()
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const postOrderDetails = async (body: OrderDetailsBody) => {
  return fetch("http://localhost:3000/orderDetails", {
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

export const patchOrderDetails = async (body: OrderDetailsBody) => {
  return fetch("http://localhost:3000/orderDetails", {
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

export const deleteOrderDetails = async (body: OrderDetailsBody) => {
  return fetch("http://localhost:3000/orderDetails", {
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

export const useOrderDetails = (
  httpMethod: "GET" | "POST" | "PATCH" | "DELETE",
  body?: OrderDetailsBody
) => {
  const queryKey = [`orderDetails_${httpMethod.toLowerCase()}`];
  switch (httpMethod) {
    case "GET":
      return useQuery<OrderDetailsBody[]>({
        queryKey,
        queryFn: getOrderDetails,
      });
      break;
    case "POST":
      if (!body) throw new Error(`Invalid body}`);
      return useQuery<OrderDetailsBody[]>({
        queryKey,
        queryFn: () => postOrderDetails(body),
      });
      break;
    case "PATCH":
      if (!body) throw new Error(`Invalid body}`);
      return useQuery<OrderDetailsBody[]>({
        queryKey,
        queryFn: () => patchOrderDetails(body),
      });
      break;
    case "DELETE":
      if (!body) throw new Error(`Invalid body}`);
      return useQuery<OrderDetailsBody[]>({
        queryKey,
        queryFn: () => deleteOrderDetails(body),
      });
      break;
    default:
      throw new Error(`Invalid HTTP method: ${httpMethod}`);
  }
};
