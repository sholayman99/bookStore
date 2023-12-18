import axios from "axios";
let baseUrl = "http://localhost:5050/api/v1"






//find all book

export async function ReadAllBook(){
    try {
        let data = await axios.get(`${baseUrl}/ReadAllBook`);
        let result = await data['data']
        if(result['message'] === "success"){

            return result['data'];
        }else{
            return false ;
        }
    }catch (e) {
        return false ;
    }
}

//find single book

export async function ReadSingleBook(id){

    try {
        let data = await axios.get(`${baseUrl}/ReadSingleBook/${id}`);
        let result = await data['data']

        if(result['message'] === "success"){
            return result['data'];
        }else{
            return false ;
        }
    }catch (e) {
        return false ;
    }
}

//list by keyword
export async function ListDataByKeyWord(keyWord){
    try {
        let data = await axios.get(`${baseUrl}/ReadAllBook/${keyWord}`);
        let result = await data['data']
        if(result['message'] === "success"){
            return result['data'];
        }else{
            return false ;
        }
    }catch (e) {
         return false ;
    }
}