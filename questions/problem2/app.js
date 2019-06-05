let rootdiv = document.getElementById('root');
let elem = React.createElement(
  'div',
  {},
  React.createElement('img', {
    src:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png',
    height: '150px',
  }),
  React.createElement('img', {
    src:
      'https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png',
    height: '150px',
  }),
  React.createElement(
    'ul',
    {},
    React.createElement('li', {}, 'First list item'),
    React.createElement('li', {}, 'Second list item')
  )
);
ReactDOM.render(elem, rootdiv);
