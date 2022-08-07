import cv, {Rect} from "opencv-ts";
import cartoon from "../assets/images/cartoon.png";

import { Err, MovieDetailsType } from "./types";

export class FetchFacad{
    private static fetchFacad:FetchFacad|null;

    public static getFetchFacad(){
        if(this.fetchFacad == null){
            this.fetchFacad = new FetchFacad();
        }

        return this.fetchFacad;
    }

    async getData<ReturnType>(url:string):Promise<ReturnType|Err>{
        try{
            const response = await fetch(url, {
              // headers
            });
            const result = await response.json();
            return result as ReturnType;
        }catch(err){
            return {
                message: err
            } as Err;
        }
    }

    async postData<DataType, ReturnType>(url:string, data:DataType):Promise<ReturnType|Err>{
        try{
            const response = await fetch(url,{
                method:"POST",
                body:JSON.stringify(data)
            });
            const result = await response.json();
            return result as ReturnType;
        }catch(err){
            return {
                message: err
            } as Err;
        }
    }
}

export async function getData<GetReturnType>(url:string):Promise<GetReturnType|Err>{
    try{
        const response = await fetch(url);
        const result = await response.json();
        return result as GetReturnType;
    }catch(err){
        return {
            message: err
        } as Err;
    }
}

export async function postData<DataType, ReturnType>(url:string, data:DataType):Promise<ReturnType|Err>{
    try{
        const response = await fetch(url,{
            method:"POST",
            body:JSON.stringify(data)
        });
        const result = await response.json();
        return result as ReturnType;
    }catch(err){
        return {
            message: err
        } as Err;
    }
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