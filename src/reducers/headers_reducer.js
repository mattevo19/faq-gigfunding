export default function(state, action) {
  switch (action.type) {
    case 'HEADER_SELECTED':
      return state;
    default: {
      return [
        { title: 'about funding', position: 'left', id:1 },
        { title: 'how to use', position: 'middle', id:2 },
        { title: 'safety and security', position: 'right', id:3 },
      ];
    }
  }
}
