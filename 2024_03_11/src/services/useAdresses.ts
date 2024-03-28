/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "@tanstack/react-query";
import { AdressesBody } from "../types/types";

export const getAdresses = async () => {
  return fetch("http://localhost:3000/addresses").then((response) =>
    response.json()
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const postAdresses = async (body: AdressesBody) => {
  return fetch("http://localhost:3000/addresses", {
    method: "POST",
    body: JSON.stringify({
      AddressID: Number(body.AddressID),
      UserID: Number(body.UserID),
      Street: body.Street,
      City: body.City,
      ZipCode: body.ZipCode,
    }),
    headers: {
      "Content-type": "application/json",
    },
  }).then((response) => response.json());
};

export const patchAdresses = async (body: AdressesBody) => {
  return fetch("http://localhost:3000/addresses", {
    method: "PATCH",
    body: JSON.stringify({
      AddressID: Number(body.AddressID),
      UserID: Number(body.UserID),
      Street: body.Street,
      City: body.City,
      ZipCode: body.ZipCode,
    }),
    headers: {
      "Content-type": "application/json",
    },
  }).then((response) => response.json());
};

export const deleteAdresses = async (body: AdressesBody) => {
  return fetch("http://localhost:3000/addresses", {
    method: "DELETE",
    body: JSON.stringify({
      AddressID: Number(body.AddressID),
      UserID: Number(body.UserID),
      Street: body.Street,
      City: body.City,
      ZipCode: body.ZipCode,
    }),
    headers: {
      "Content-type": "application/json",
    },
  }).then((response) => response.json());
};

export const useAdresses = (
  httpMethod: "GET" | "POST" | "PATCH" | "DELETE",
  body?: AdressesBody
) => {
  const queryKey = [`adresses_${httpMethod.toLowerCase()}`];
  switch (httpMethod) {
    case "GET":
      return useQuery<AdressesBody[]>({ queryKey, queryFn: getAdresses });
      break;
    case "POST":
      if (!body) throw new Error(`Invalid body}`);
      return useQuery<AdressesBody[]>({
        queryKey,
        queryFn: () => postAdresses(body),
      });
      break;
    case "PATCH":
      if (!body) throw new Error(`Invalid body}`);
      return useQuery<AdressesBody[]>({
        queryKey,
        queryFn: () => patchAdresses(body),
      });
      break;
    case "DELETE":
      if (!body) throw new Error(`Invalid body}`);
      return useQuery<AdressesBody[]>({
        queryKey,
        queryFn: () => deleteAdresses(body),
      });
      break;
    default:
      throw new Error(`Invalid HTTP method: ${httpMethod}`);
  }
};
