import { Response } from "express";
//success status
interface ApiResponse {
  status: string;
  code: number;
  data?: any; // Change as per your data structure
  message?: string; // Change as per your error message structure
}

// Success status
export const responseSuccess = (
  res: Response,
  statusCode: number = 200,
  statusMessage: string = "Success",
  data: any = {}
) => {
  const responseBody: ApiResponse = {
    status: statusMessage,
    code: statusCode,
    data: data,
  };
  return res.status(statusCode).json(responseBody);
};

// Error status
export const responseError = (
  res: Response,
  statusCode: number = 400,
  statusMessage: string = "Failed",
  message: string = "An error occurred"
) => {
  const responseBody: ApiResponse = {
    status: statusMessage,
    code: statusCode,
    message: message,
  };
  return res.status(statusCode).json(responseBody);
};
