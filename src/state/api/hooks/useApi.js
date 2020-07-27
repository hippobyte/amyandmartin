import axios from 'axios'

const useApi = () => {
  const apiClient = axios.create()

  const fetchData = async (url, options={}) => {
    const response = await apiClient({
      method: "get",
      url: url,
      ...options
    }).catch(error => {
      return handleErrors(url, error, options)
    })

    return (response && response.data)
  }

  const postData = async (url, data, options={}) => {
    const response = await apiClient({
      method: "post",
      url: url,
      data: data,
      ...options
    }).catch(error => {
      return handleErrors(url, error, options)
    })

    return (response && response.data)
  }

  const handleErrors = (error, options={}) => {
    const status = error.response ? error.response.status : error.response

    // all 400 status except 401
    if (status >= 402 && status < 500) {
      return false
    }

    // 400 Bad Request
    if (status === 400) {
      return false
    }

    // 401 Unauthorized
    if (status === 401) {
      return false
    }

    if (status === undefined) {
      return false
    }
  }

  return { fetchData, postData }
}

export default useApi