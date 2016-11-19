require('babel-polyfill');
require('isomorphic-fetch');


document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Component />, document.getElementById('app'));
});