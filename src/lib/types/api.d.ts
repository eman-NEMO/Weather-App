declare type weather={
location: {
    name: string ,
    region: string,
    country:string,
    lat: number,
    lon: number,
    tz_id: string,
    localtime_epoch: number,
    localtime: string
  },
}

declare type SuccessResponse<T>={

}&T

declare type ErrorResponse={
   error: {
    code: number,
    message: string
  }
}

type APIResponse<T>=SuccessResponse<T> | ErrorResponse