module.exports = {
  type: 'list',
  fetch({ args, page }) {
    return [
      {
        title: `keyword: ${args.keyword}`
      }
    ]
  }
}
