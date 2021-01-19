import faqState from '../data/faqs'

export default function(state = faqState, action) {
  switch (action.type) {
    case 'TOGGLE_FAQ':
      // update faq state without mutating original state
      const headerContainingFaq = {...state.find(header => header.faqs.some(faq => faq.question === action.payload.question))}
      const otherHeaders = state.filter(header => header.title !== headerContainingFaq.title)
      const updatedFaqsList = headerContainingFaq.faqs.map(faq => {
        if (faq.question === action.payload.question) {
          return { ...faq, open: !faq.open}
        } else {
          return faq
        }
      })
      headerContainingFaq.faqs = updatedFaqsList
      return [
        ...otherHeaders,
        headerContainingFaq
      ];
    default:
      return state;
  }
}