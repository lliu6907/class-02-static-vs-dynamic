const h1 = React.createElement('h1', null, 'Page B');
const p = React.createElement('p', null, 'Is this page static, client-side rendered, or server-side rendered? (Replace TODO with your answer.)');
const p_date = React.createElement('p', null, new Date().toString());
const h2 = React.createElement('h2', null, 'Answer: This is client-side rendered because it uses JS and the HTML is not complete since some of the content is dynamically created in the JS');

ReactDOM.render([h1, p, p_date, h2], document.body);
