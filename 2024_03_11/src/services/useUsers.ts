/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "@tanstack/react-query";
import { UsersBody } from "../types/types";

export const getUsers = async () => {
  return fetch("http://localhost:3000/users").then((response) =>
    response.json()
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const postUsers = async (body: UsersBody) => {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    body: JSON.stringify({
      UserID: Number(body.UserID),
      AddressID: Number(body.AddressID),
      Street: body.Street,
      City: body.City,
      ZipCode: body.ZipCode,
      UserName: body.UserName,
      Email: body.Email,
      PhoneNumber: body.PhoneNumber,
    }),
    headers: {
      "Content-type": "application/json",
    },
  }).then((response) => response.json());
};

export const patchUsers = async (body: UsersBody) => {
  return fetch("http://localhost:3000/users", {
    method: "PATCH",
    body: JSON.stringify({
      UserID: Number(body.UserID),
      AddressID: Number(body.AddressID),
      Street: body.Street,
      City: body.City,
      ZipCode: body.ZipCode,
      UserName: body.UserName,
      Email: body.Email,
      PhoneNumber: body.PhoneNumber,
    }),
    headers: {
      "Content-type": "application/json",
    },
  }).then((response) => response.json());
};

export const deleteUsers = async (body: UsersBody) => {
  return fetch("http://localhost:3000/users", {
    method: "DELETE",
    body: JSON.stringify({
      UserID: Number(body.UserID),
      AddressID: Number(body.AddressID),
      Street: body.Street,
      City: body.City,
      ZipCode: body.ZipCode,
      UserName: body.UserName,
      Email: body.Email,
      PhoneNumber: body.PhoneNumber,
    }),
    headers: {
      "Content-type": "application/json",
    },
  }).then((response) => response.json());
};

export const useUsers = (
  httpMethod: "GET" | "POST" | "PATCH" | "DELETE",
  body?: UsersBody
) => {
  const queryKey = [`users_${httpMethod.toLowerCase()}`];
  switch (httpMethod) {
    case "GET":
      return useQuery<UsersBody[]>({ queryKey, queryFn: getUsers });
      break;
    case "POST":
      if (!body) throw new Error(`Invalid body}`);
      return useQuery<UsersBody[]>({
        queryKey,
        queryFn: () => postUsers(body),
      });
      break;
    case "PATCH":
      if (!body) throw new Error(`Invalid body}`);
      return useQuery<UsersBody[]>({
        queryKey,
        queryFn: () => patchUsers(body),
      });
      break;
    case "DELETE":
      if (!body) throw new Error(`Invalid body}`);
      return useQuery<UsersBody[]>({
        queryKey,
        queryFn: () => deleteUsers(body),
      });
      break;
    default:
      throw new Error(`Invalid HTTP method: ${httpMethod}`);
  }
};
