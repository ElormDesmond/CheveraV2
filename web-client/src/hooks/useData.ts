import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { vaultApi, portfolioApi, inquiryApi } from '../api';

export const useVault = () => {
  return useQuery({
    queryKey: ['vault'],
    queryFn: vaultApi.getAll,
  });
};

export const usePortfolio = () => {
  return useQuery({
    queryKey: ['portfolio'],
    queryFn: portfolioApi.getAll,
  });
};

export const useSubmitInquiry = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: inquiryApi.create,
    onSuccess: () => {
       queryClient.invalidateQueries({ queryKey: ['inquiries'] });
    }
  });
};
