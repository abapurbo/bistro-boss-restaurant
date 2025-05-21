import { FaUtensils } from 'react-icons/fa';
import SectionTitle from '../../Commponents/SectionTitle';
import { useForm } from "react-hook-form"
import useAxiosPublic from './../../hook/useAxiosPublic';
import AxiosSecuire from './../../hook/AxiosSecuire';
import Swal from 'sweetalert2';
const AddItems = () => {
    const image_hosting_api = import.meta.env.VITE_HOSTING_API_KEY;
    const image_hosting_key = `https://api.imgbb.com/1/upload?key=${image_hosting_api}`
    const axiosPublic = useAxiosPublic()
    const axiosSecure = AxiosSecuire()
    const { reset, register, handleSubmit } = useForm()
    const onSubmit = async (data) => {
        const imageFile = { image: data.image[0] };
        const res = await axiosPublic.post(image_hosting_key, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        if (res.data.success) {
            const menuItem = {
                name: data.name,
                recipe: data.recipe,
                image: res.data.data.display_url,
                price: parseFloat(data.price),
                category: data.category
            };
            const menu = await axiosSecure.post('/menus', menuItem)

            if (menu.data.insertedId) {
                reset();
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Your item add successfully",
                    showConfirmButton: false,
                    timer: 1500
                });

            }
        }

    }
    return (
        <div className='w-[900px] m-4'>
            <SectionTitle heading='add items' subHeading="What's a now"></SectionTitle>
            <div className='mt-10'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='my-3'>
                        <legend className="fieldset-legend w-full ">Recipe Name*</legend>
                        <input {...register('name', { required: true })} type="text" className="input w-full" placeholder="Recipe Name" />
                    </div>
                    <div className='flex gap-9'>
                        <div className='flex-1'>
                            <label className="fieldset-legend">Category*</label>
                            <select {...register("category", { required: true })} defaultValue="Pick a browser" className="select w-full">
                                <option >Selected a category</option>
                                <option value='salad'>Salad</option>
                                <option value='desert'>Desert</option>
                                <option value='soup'>Soup</option>
                                <option value='pizza'>Pizza</option>
                                <option value='drink'>Drink</option>
                            </select>`
                        </div>
                        <div className='flex-1'>
                            <legend className="fieldset-legend ">Price*</legend>
                            <input {...register('price', { required: true })} type="text" className="input w-full" placeholder="Recipe Name" />`
                        </div>
                    </div>
                    <div className='w-full'>
                        <legend className="fieldset-legend">Recipe Details</legend>
                        <textarea {...register('recipe', { required: true })} className="textarea w-full h-24" placeholder="Recipe Details"></textarea>

                    </div>
                    <div className='my-2 flex flex-col flex-start items-start gap-5'>
                        <input {...register('image', { required: true })} type="file" className="file-input" />
                        <button className='btn text-[18px]'>
                            Add Item <FaUtensils></FaUtensils>
                        </button>
                    </div>

                </form>
            </div>
        </div >
    );
};

export default AddItems;