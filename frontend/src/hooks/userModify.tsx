import { useQuery } from "@tanstack/react-query";
import apiClient from "../apiClient";
import { UserInfo } from "../types/Userinfo";

export const useGetUsersQuery = () =>
  useQuery({
    queryKey: ['users'],
    queryFn: async () => (await apiClient.get<UserInfo[]>(`api/users`)).data,
  })
