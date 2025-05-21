import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const UseMenu = () => {
  const publicAxios=useAxiosPublic()
  const { data:menu=[],refetch, isPending: loading } = useQuery({
    queryKey: ['menus'],
    queryFn: async () => {
      const res = await publicAxios.get('/menus')      
      return res.data

      }
  })
  return {menu,refetch,loading}
}
export default UseMenu;