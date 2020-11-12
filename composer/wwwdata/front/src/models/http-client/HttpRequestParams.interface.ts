/**
 * @name HttpRequestParamsInterface
 * @description
 * HttpClient requests parameters for get/post/put etc operations
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
export interface HttpRequestParamsInterface {
  url: string;
  requiresToken: boolean;
  payload?: any;
}
