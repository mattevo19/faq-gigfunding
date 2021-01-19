// get all headers sorted by id
export const getAllHeaders = store => {
  return store.faqs.sort((a, b) => a.id - b.id ).map(header => header.title)
}


// get all faqs for selected headers
export const getVisibleFaqs = store => {
  return store.selectedHeaders.map(header => {
    return store.faqs.find(section => section.title === header).faqs
  }).flat()
}
