

declare type SuccessResponse<T>={

}&T

declare type ErrorResponse={
   error: {
    code: number,
    message: string
  }
}

type APIResponse<T>=SuccessResponse<T> | ErrorResponse