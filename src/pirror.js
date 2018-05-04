export const createRequest = (request) => {
  return JSON.stringify(request)
}

export const handleRequest = (request, data) => {
  const parsed = JSON.parse(request)
  Object.assign(data, JSON.parse(request))
}

export const Pirror = () => {
  return {
    peers: [],
    broadcast: () => {},
    data: {},
    handleRequest: function (request) {
      handleRequest(request, this.data)
    },
    createRequest,
  }
}
