import { queryOptions } from "@tanstack/react-query";

export const ratingOptions = queryOptions({
  queryKey: ["rating"],
  queryFn: async () => {
    const response = await fetch(
      "https://mocki.io/v1/eea7361a-5f10-43cf-82bd-dac3492d470a"
    );

    return response.json();
  },
});
