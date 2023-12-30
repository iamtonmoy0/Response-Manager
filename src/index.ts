//success status
export const responseSuccess = (
  res: any,
  statusCode: number,
  statusMessage: string,
  data: any
) => {
  return res.status(statusCode).json({
    status: statusMessage || "Success",
    code: statusCode || 200,
    data: data || [],
  });
};
// error status
export const responseError = (
  res: any,
  statusCode: number,
  statusMessage: string,
  message: string
) => {
  return res.status(statusCode).json({
    status: statusMessage || "Failed",
    code: statusCode || 400,
    message: message || [],
  });
};
