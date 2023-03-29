import cv, { Rect } from "opencv-ts";
import cartoon from "../assets/images/cartoon.png";
import { ResponseStatus, responseStatusMap, StatusKey } from "./config";

import { ApiMessage } from "./types";

enum MessageType {
  ERROR = "Error",
  INFO = "Info",
  SUCCESS = "Success",
  WARNING = "Warning",
}

export const SOMETHING_WENT_WRONG = {
  type: MessageType.ERROR,
  message: "Something went wrong",
};

export class FetchFacad {
  private static fetchFacad: FetchFacad | null;

  public static getFetchFacad() {
    if (this.fetchFacad == null) {
      this.fetchFacad = new FetchFacad();
    }

    return this.fetchFacad;
  }

  async getData<R>(url: string): Promise<R | ApiMessage> {
    const response = await fetch(url, {});
    const result = await response.json();
    return result as R;
  }

  async postData<T, R>(url: string, data: T): Promise<R | ApiMessage> {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
    });
    const result = await response.json();
    return result as R;
  }
}

export async function getData<R>(url: string): Promise<R | ApiMessage> {
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (isErrorStatus(getResponseStatus(response.status))) {
      throw data;
    }

    return data;
  } catch (e) {
    if ((e as ApiMessage).status) {
      throw e;
    } else {
      throw SOMETHING_WENT_WRONG;
    }
  }
}

export async function postData<T, R>(url: string, data: T): Promise<R | ApiMessage> {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
  });
  const result = await response.json();
  return result as R;
}

function isErrorStatus(status: ResponseStatus) {
  return (
    status === ResponseStatus.ClientError ||
    status === ResponseStatus.ServerError
  );
}

function getResponseStatus(statusCode: number): ResponseStatus {
  const discriminator = (statusCode / 100).toFixed(0);
  return responseStatusMap[discriminator as StatusKey];
}

// class RequestFacad<DataType, GetReturnType, PostReturnType>{
// }

// function pixilize(id:string){
//     cv.onRuntimeInitialized = ()=>{
//         const imgg = cv.imread(id);
//         const dst = new cv.Mat(imgg.rows, imgg.cols, cv.CV_8UC4);
//         cv.resize(imgg, dst, new cv.Size(500, 500), 0, 0, cv.INTER_AREA);

//         const roiRect: Rect = new cv.Rect(0, 0, 200, 200);

//         const roi = dst.roi(roiRect);
//         setTimeout(()=>{
//             console.log(cv.imshow("carton", roi));
//         }, 2000)
//     }
// }

// export default pixilize;
