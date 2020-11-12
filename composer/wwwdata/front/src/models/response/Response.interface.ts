/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ResponseInterface<T = any> {
  data: T;
  meta: {
    [key: string]: any;
  };
  paging: {
    number: number;
    size: number;
    total: number;
    from: number;
    to: number;

    links: {
      first_page: string;
      prev_page: string;
      next_page: string;
      last_page: string;
    };
  };
}
