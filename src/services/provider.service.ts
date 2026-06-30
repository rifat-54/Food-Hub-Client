import { env } from "@/env";

const url = env.API_URL;

export const providerServices = {
  getAllProvider: async function () {
    try {
      const res = await fetch(`${url}/provider`);
      const data = await res.json();

      if (!res.ok) {
        return { data: null, error: { message: "Something wernt wrong" } };
      }
      return { data, error: null };
    } catch (error) {
      return { data: null, error: { message: "Something went wrong", error } };
    }
  },
  getProviderWithMenu: async function (id: string) {
    try {
      const res = await fetch(`${url}/provider/${id}`);

      const data = await res.json();

      if (!res.ok) {
        return { data: null, error: { message: "Something wernt wrong" } };
      }
      return { data, error: null };
    } catch (error) {
      return { data: null, error: { message: "Something went wrong", error } };
    }
  },
};
