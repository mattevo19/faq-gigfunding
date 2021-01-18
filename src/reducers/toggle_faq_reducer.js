export default function(state = null, action) {
  switch (action.type) {
    case 'TOGGLE_FAQ':
      // return state.map((faq, i) => {
      //   if (i === action.index) {
      //     faq.open = !faq.open
      //   }
      //   return faq;
      // })
    default:
      return state;
  };
};


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