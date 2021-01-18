export default function(state = null, action) {
  switch (action.type) {
    case 'TOGGLE_FAQ':
      action.payload.open = !action.payload.open;
      return action.payload;
    default:
      return state;
  }
}

// export function toggleFAQ(index) {
//   faq.map((faq, i) => {
//     if (i === index) {
//       faq.open = !faq.open
//     } else {
//       faq.open = false;
//     }
//     return faq;
//   })
// }