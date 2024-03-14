import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { UserInfo } from "../types/Userinfo";
import apiClient from "../apiClient";
import { ApiError } from '../types/ApiError';

type MutationData = {
    email: string;
    password: string;
    captcha?: string; //
};

export const useSigninMutation = (): UseMutationResult<UserInfo, Error, MutationData, unknown> => {
  return useMutation({
    mutationFn: async ({ email, password, captcha }: MutationData) => {
      const response = await apiClient.post<UserInfo>(`api/users/signin`, {
        email,
        password,
        captcha, // Si captcha est fourni, incluez-le dans la requête
      });
      return response.data;
    },
  });
};

export const useSignupMutation = (): UseMutationResult<UserInfo, ApiError, { name: string, email: string, password: string, captcha: string }, unknown> => {
    return useMutation({
        mutationFn: async ({ name, email, password, captcha }) => {
            const response = await apiClient.post<UserInfo>('api/users/signup', {
                name,
                email,
                password,
                captcha,
            });
            return response.data;
        },
    });
};