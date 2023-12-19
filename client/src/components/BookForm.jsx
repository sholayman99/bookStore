import {useEffect, useState} from 'react';
import {Card, Input, Textarea, Button, Typography} from "@material-tailwind/react";
import toast, { Toaster } from 'react-hot-toast';
import {CreateBook, ReadSingleBook, UpdateBook} from "../apiRequest/apiRequest.js";
import {useNavigate, useParams} from "react-router-dom";
const BookForm = () => {
    const [loading , setLoading] = useState(false);
    const navigate = useNavigate()
    const [updatedId , setUpdatedId] = useState(null)

    const [formData, setFormData] = useState({title: "",image: "",shortDes: "",details: "",
        price: null, stock: null,category: "",edition: "",author: "",remark: "",rating: ""});


    useEffect(()=>{
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        setUpdatedId(id);

        (async()=>{
            if(id !== null){
                await fillForm(id);
            }
        })()

    },[])

    const fillForm = async(id) =>{
        setLoading(true)
        let res = await ReadSingleBook(id)
        setLoading(false)
        if(res){
            setFormData({title: res.title , image: res.image, shortDes: res.shortDes,details: res.details
            ,price: res.price, stock: res.stock ,category: res.category,edition: res.edition,
             author: res.author,remark: res.remark,rating: res.rating})
        }
    }


    //save form data and send it to backend
    const saveData = async() =>{
       if(updatedId == null){
           let res = await CreateBook(formData)
           if(res['message']=== "success"){
               toast.success("Added Successfully")
               // setFormData({title: "" , image: "", shortDes: "",details: "", price: "", stock: "" ,
               //     category: "",edition: "",author: "",remark: "",rating: ""})
           }else{
               toast.error("Unable To Create")
           }
       }else{
           let res = await UpdateBook(updatedId,formData);
           if(res['message'] === "success"){
               toast.success("Updated Successfully")

           }else{
               toast.error("Unsuccessful attempt")
           }
       }
    }

   // input value onchange
    const inputOnChange = (key,value) =>{
        setFormData((formData) => ({
            ...formData,
            [key] : value
        }))
    }


    return (
     <section className={" flex justify-center items-center  min-h-screen"}>

       <Card color="transparent" className={"w-[80%]"} shadow={false}>
          <Typography variant="h4" color="blue-gray">
             ADD NEW BOOK
          </Typography>

          <form className="mt-8 mb-2  ">
            <div className="mb-1 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
               <Input value={formData.title} onChange={(e) => inputOnChange("title" , e.target.value)} label="Title" />
               <Input value={formData.image} onChange={(e) => inputOnChange("image" , e.target.value)} label="Image Url" />
               <Input value={formData.shortDes} onChange={(e) => inputOnChange("shortDes" , e.target.value)} label="Short Des" />
               <Input value={formData.price} onChange={(e) => inputOnChange("price" , e.target.value)} label="Price" />
               <Input value={formData.stock} onChange={(e) => inputOnChange("stock" , e.target.value)} label="Stock" />
               <Input value={formData.category} onChange={(e) => inputOnChange("category" , e.target.value)} label="Category" />
               <Input value={formData.edition} onChange={(e) => inputOnChange("edition" , e.target.value)} label="Edition" />
               <Input value={formData.author} onChange={(e) => inputOnChange("author" , e.target.value)} label="Author" />
               <Input value={formData.remark} onChange={(e) => inputOnChange("remark" , e.target.value)} label="Remark" />
               <Input value={formData.rating} onChange={(e) => inputOnChange("rating" , e.target.value)} label="Rating" />
               <Textarea value={formData.details} onChange={(e) => inputOnChange("details" , e.target.value)} label="Full Deatils" />
            </div>

          <Button onClick={saveData} className="mt-6 lg:w-[30%] md:w-[50%] w-full" >Save</Button>

          </form>
       </Card>
         <Toaster position="bottom-center" reverseOrder={false} gutter={8} />
     </section>
    );
};

export default BookForm;