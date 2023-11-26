export type RqErrorResponse = {
  status: number
  message: string
  type: string
  attributes?: { [key: string]: string }
}

export interface RqError extends Error {
  response?: RqErrorResponse
}

export type RqResponse<T> = {
  error?: RqErrorResponse
  data?: T
}

export type RqOptions<T> = {
  data?: T
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
  path: string
  headers?: HeadersInit
  next?: NextFetchRequestConfig
  baseUrl?: string
}

export const getResponseError = (
  error: unknown,
): RqErrorResponse | undefined => {
  if (typeof error === 'object' && error !== null && 'response' in error) {
    return error.response as RqErrorResponse
  }
}

export const rq = async <TResponse, TVariables = void>(
  opts: RqOptions<TVariables>,
): Promise<RqResponse<TResponse>> => {
  const { data, baseUrl, method = 'GET', path, headers, next } = opts

  try {
    // @TODO Check for trailing slashes
    const res = await fetch(`${baseUrl}${path}`, {
      method,
      ...(data ? { body: JSON.stringify(data) } : undefined),
      headers: {
        ...headers,
        ...(data ? { 'Content-Type': 'application/json' } : undefined),
      },
      cache: 'no-store',
    })

    if (res.ok) {
      return { data: res.status !== 204 ? await res.json() : undefined }
    } else {
      return { error: await res.json() }
    }
  } catch (e) {
    throw new Error('Network Error')
  }
}
