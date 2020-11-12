import { ResponseInterface } from './Response.interface';

/* eslint-disable @typescript-eslint/no-explicit-any */
export class Response<T = any> implements ResponseInterface<T> {
  public data = {} as T;
  public meta = {};

  /* eslint-disable @typescript-eslint/camelcase */
  public paging = {
    number: 1,
    size: 1,
    total: 1,
    from: 1,
    to: 1,
    links: {
      first_page: '',
      prev_page: '',
      next_page: '',
      last_page: '',
    },
  };

  constructor(response: ResponseInterface<T>) {
    Object.assign(this, response);
  }
}
