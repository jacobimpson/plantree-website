// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({
  actions,
}) => {
  const {
    createRedirect
  } = actions
  createRedirect({
    fromPath: `/`,
    isPermanent: false,
    redirectInBrowser: true,
    toPath: `/privacy-policy`,
  })
}