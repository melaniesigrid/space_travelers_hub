import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import NavBar from '../components/NavBar';

it('Header Component Renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Router>
          <NavBar />
        </Router>
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
