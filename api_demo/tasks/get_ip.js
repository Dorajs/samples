module.exports = async () => {
  let resp = await $axios.get('https://api.ipify.org?format=json')
  return {
    message: `外网 IP: ${resp.data.ip}`,
    succeed: true
  }
}
