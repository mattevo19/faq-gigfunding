export default function toggleFaq(faq) {
  return {
    type: 'TOGGLE_FAQ',
    payload: faq
  };
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