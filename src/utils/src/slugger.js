const slugify = require('github-slugger').slug

export const slugger = (options, join="/") => {
  return options.map(option => slugify(option)).join(join)
}