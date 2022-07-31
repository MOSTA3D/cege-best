import cv, {Rect} from "opencv-ts";
import cartoon from "../assets/images/cartoon.png";

import { Err } from "./types";

export const testData = {
"page": 1,
"results": [
  {
    "adult": false,
    "backdrop_path": "/p1F51Lvj3sMopG948F5HsBbl43C.jpg",
    "genre_ids": [
      28,
      12,
      14
    ],
    "id": 616037,
    "original_language": "en",
    "original_title": "Thor: Love and Thunder",
    "overview": "After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now inexplicably wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.",
    "popularity": 17429.123,
    "poster_path": "/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",
    "release_date": "2022-07-06",
    "title": "Thor: Love and Thunder",
    "video": false,
    "vote_average": 6.7,
    "vote_count": 1444
  },
  {
    "adult": false,
    "backdrop_path": "/393mh1AJ0GYWVD7Hsq5KkFaTAoT.jpg",
    "genre_ids": [
      12,
      28,
      878
    ],
    "id": 507086,
    "original_language": "en",
    "original_title": "Jurassic World Dominion",
    "overview": "Four years after Isla Nublar was destroyed, dinosaurs now live—and hunt—alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators on a planet they now share with history’s most fearsome creatures.",
    "popularity": 7144.167,
    "poster_path": "/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg",
    "release_date": "2022-06-01",
    "title": "Jurassic World Dominion",
    "video": false,
    "vote_average": 7.1,
    "vote_count": 2224
  },
  {
    "adult": false,
    "backdrop_path": "/nmGWzTLMXy9x7mKd8NKPLmHtWGa.jpg",
    "genre_ids": [
      10751,
      16,
      12,
      35,
      14
    ],
    "id": 438148,
    "original_language": "en",
    "original_title": "Minions: The Rise of Gru",
    "overview": "A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them, with the backup of his followers, the Minions.",
    "popularity": 7043.56,
    "poster_path": "/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg",
    "release_date": "2022-06-29",
    "title": "Minions: The Rise of Gru",
    "video": false,
    "vote_average": 7.5,
    "vote_count": 531
  },
  {
    "adult": false,
    "backdrop_path": "/odJ4hx6g6vBt4lBWKFD1tI8WS4x.jpg",
    "genre_ids": [
      28,
      18
    ],
    "id": 361743,
    "original_language": "en",
    "original_title": "Top Gun: Maverick",
    "overview": "After more than thirty years of service as one of the Navy’s top aviators, and dodging the advancement in rank that would ground him, Pete “Maverick” Mitchell finds himself training a detachment of TOP GUN graduates for a specialized mission the likes of which no living pilot has ever seen.",
    "popularity": 5657.536,
    "poster_path": "/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
    "release_date": "2022-05-24",
    "title": "Top Gun: Maverick",
    "video": false,
    "vote_average": 8.3,
    "vote_count": 1739
  },
  {
    "adult": false,
    "backdrop_path": "/nW5fUbldp1DYf2uQ3zJTUdachOu.jpg",
    "genre_ids": [
      16,
      878,
      12,
      28,
      10751
    ],
    "id": 718789,
    "original_language": "en",
    "original_title": "Lightyear",
    "overview": "Legendary Space Ranger Buzz Lightyear embarks on an intergalactic adventure alongside a group of ambitious recruits and his robot companion Sox.",
    "popularity": 3778.202,
    "poster_path": "/ox4goZd956BxqJH6iLwhWPL9ct4.jpg",
    "release_date": "2022-06-15",
    "title": "Lightyear",
    "video": false,
    "vote_average": 7.3,
    "vote_count": 1091
  },
  {
    "adult": false,
    "backdrop_path": "/AfvIjhDu9p64jKcmohS4hsPG95Q.jpg",
    "genre_ids": [
      27,
      53
    ],
    "id": 756999,
    "original_language": "en",
    "original_title": "The Black Phone",
    "overview": "Finney Shaw, a shy but clever 13-year-old boy, is abducted by a sadistic killer and trapped in a soundproof basement where screaming is of little use. When a disconnected phone on the wall begins to ring, Finney discovers that he can hear the voices of the killer’s previous victims. And they are dead set on making sure that what happened to them doesn’t happen to Finney.",
    "popularity": 3733.868,
    "poster_path": "/p9ZUzCyy9wRTDuuQexkQ78R2BgF.jpg",
    "release_date": "2022-06-22",
    "title": "The Black Phone",
    "video": false,
    "vote_average": 8,
    "vote_count": 1311
  },
  {
    "adult": false,
    "backdrop_path": "/wcKFYIiVDvRURrzglV9kGu7fpfY.jpg",
    "genre_ids": [
      14,
      28,
      12
    ],
    "id": 453395,
    "original_language": "en",
    "original_title": "Doctor Strange in the Multiverse of Madness",
    "overview": "Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.",
    "popularity": 3477.944,
    "poster_path": "/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
    "release_date": "2022-05-04",
    "title": "Doctor Strange in the Multiverse of Madness",
    "video": false,
    "vote_average": 7.5,
    "vote_count": 4899
  },
  {
    "adult": false,
    "backdrop_path": "/b1L7qevxiVpkVFq4dmdQPGFPWH0.jpg",
    "genre_ids": [
      27
    ],
    "id": 836225,
    "original_language": "en",
    "original_title": "The Exorcism of God",
    "overview": "An American priest working in Mexico is considered a saint by many local parishioners. However, due to a botched exorcism, he carries a secret that’s eating him alive until he gets an opportunity to face his demon one final time.",
    "popularity": 2209.339,
    "poster_path": "/hangTmbxpSV4gpHG7MgSlCWSSFa.jpg",
    "release_date": "2022-03-11",
    "title": "The Exorcism of God",
    "video": false,
    "vote_average": 7.1,
    "vote_count": 414
  },
  {
    "adult": false,
    "backdrop_path": "/lkZjWIuwJQohA1zjIlMaqK2QpWA.jpg",
    "genre_ids": [
      14,
      12,
      28
    ],
    "id": 919355,
    "original_language": "en",
    "original_title": "Dragon Knight",
    "overview": "Many years after the war has been lost, and all the dragons slain, a lone knight travels the lands of Agonos seeking to raise an army against the demon lord Abaddon. When a healer's vision reveals that one dragon still lives, and together with an eager young squire, the knight sets off in search of the fabled creature. As the armies of Abaddon descend on the human kingdoms, the dragon is their last hope of fending off the horde, before it lays waste to the lands of men. But does the creature even exist? And if it does, will it fight for them once more?",
    "popularity": 2052.81,
    "poster_path": "/uSMJbYhaEpQtF9vkMhpgljc0CA4.jpg",
    "release_date": "2022-03-21",
    "title": "Dragon Knight",
    "video": false,
    "vote_average": 6.8,
    "vote_count": 7
  },
  {
    "adult": false,
    "backdrop_path": "/5PnypKiSj2efSPqThNjTXz8jwOg.jpg",
    "genre_ids": [
      14,
      28
    ],
    "id": 759175,
    "original_language": "en",
    "original_title": "The Princess",
    "overview": "A beautiful, strong-willed young royal refuses to wed the cruel sociopath to whom she is betrothed and is kidnapped and locked in a remote tower of her father’s castle. With her scorned, vindictive suitor intent on taking her father’s throne, the princess must protect her family and save the kingdom.",
    "popularity": 1987.819,
    "poster_path": "/9pCoqX24a6rE981fY1O3PmhiwrB.jpg",
    "release_date": "2022-06-16",
    "title": "The Princess",
    "video": false,
    "vote_average": 7.1,
    "vote_count": 311
  },
]
};


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
            const response = await fetch(url);
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