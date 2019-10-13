module.exports = {
  fetch({ args }) {
    return args.jobs.map(job => {
      return {
        id: job.id,
        title: job.title,
        summary: job.company,
        route: $route.url(job.url)
      }
    })
  }
}