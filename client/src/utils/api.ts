import { BASE_URL } from "./variables";

export async function fetchAPI<T>(
  url: string,
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE",
  body?: any
): Promise<T> {
  const auth = localStorage.getItem("persist:auth") || "";
  const parsedAuth = JSON.parse(auth);
  const token = JSON.parse(parsedAuth.token);
  const options: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(`${BASE_URL}${url}`, options);

  if (!response.ok) {
    throw {
      status: response.status,
    };
  }

  if (response.status === 204) {
    return {} as T;
  }

  const data = await response.json();

  return data as T;
}

export async function fetchFilesAPI<T>(
  url: string,
  method: "POST" | "PUT" | "PATCH" | "DELETE",
  formData: FormData
): Promise<T> {
  const auth = localStorage.getItem("persist:auth") || "";
  const parsedAuth = JSON.parse(auth);
  const token = JSON.parse(parsedAuth.token);
  const options: RequestInit = {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  };

  const response = await fetch(`${BASE_URL}${url}`, options);

  if (!response.ok) {
    throw {
      status: response.status,
    };
  }

  if (response.status === 204) {
    return {} as T;
  }

  const data = await response.json();

  return data as T;
}
