export default class Image {

  constructor(data) {
    this.copyright = data.copyright
    this.id = data.id || data._id
    this.large_url = data.large_url
    this.site = data.site
    this.source_id = data.source_id || ""
    this.url = data.url
  }
}

