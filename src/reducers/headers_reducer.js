// get list of headers from faqData

import faqs from '../data/faqs'

const allHeaders = faqs.map(header => header.title)

export default function(state = allHeaders, action) {
  switch (action.type) {
    case 'HEADER_SELECTED':
      return [action.payload]
    default: {
      return state
    }
  }
}
