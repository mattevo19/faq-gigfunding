export default function(state, action) {
  switch (action.type) {
    case 'HEADER_SELECTED':
      return state;
    default: {
      return [
        { title: 'about funding', id:1 ,address: '16 Villa Gaudelet, 75011 Paris', slug: 'paris' },
        { title: 'how to use', id:2, address: '14-22 Elder St, London E1 6BT', slug: 'london' },
        { title: 'safety and security', id:3, address: 'Rudi-Dutschke-Straße 26, 10969 Berlin', slug: 'berlin' },
      ];
    }
  }
}
