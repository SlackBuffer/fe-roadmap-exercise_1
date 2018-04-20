/*
* 'lodash' should be listed in the project's dependencies.
* Run 'npm i -S lodash' to add it  import/no-extraneous-dependencies
*/

/* import _ from 'lodash'; */
import './style.scss';

/* const componentN = () => {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  return element;
}; */

const para = document.querySelector('p');
para.textContent = 'Hello world!';

setTimeout(() => {
  para.classList.add('disappear');
}, 10000);

/* document.body.appendChild(componentN());
 */
