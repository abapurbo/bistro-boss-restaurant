import { useQuery } from "@tanstack/react-query";
import AuthUse from "../ShardHook/AuthUse";
import AxiosSecuire from "./AxiosSecuire";

const useAdmin = () => {
    const { user } = AuthUse()
    const axiosSecure = AxiosSecuire();
    const { data: isAdmin,isPending:isLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user.email}`)
            return res.data?.admin;
        }
    })
    return [isAdmin,isLoading];
};

export default useAdmin;