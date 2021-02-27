module.exports = async () => {
  let resp = await $axios.get('https://api.ipify.org?format=json')
  $ui.alert(`Got IP: ${resp.data.ip}`)
}
