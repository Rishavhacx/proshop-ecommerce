import { apiSlice } from './apiSlice';
import { ORDERS_URL } from '../constants';

export const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (orderData) => ({
        url: ORDERS_URL,
        method: 'POST',
        body: {...orderData},
      }),
    }),
    getOrder: builder.query({
      query: (id) => `${ORDERS_URL}/${id}`,
    }),
    getMyOrders: builder.query({
      query: () => `${ORDERS_URL}/mine`,
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetOrderQuery,
  useGetMyOrdersQuery,
} = orderApiSlice;
