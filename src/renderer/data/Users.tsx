import useSWR from 'swr';

const fetcher = (url: RequestInfo) => fetch(url).then((res) => res.json());

export default function getUsers() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, mutate, error } = useSWR(
    `${process.env.beginAnewCore}/api/v1/users`,
    fetcher
  );

  const loading = !data && !error;
  const noData = !data;

  return { loading, noData, countries: data, mutate };
}
