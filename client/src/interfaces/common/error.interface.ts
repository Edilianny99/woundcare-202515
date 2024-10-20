export interface Error {
  response: {
    statusCode: number;
    message: string;
    error: string;
  };
  status: number;
  message: string;
}
