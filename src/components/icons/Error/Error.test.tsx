import * as enzyme from 'enzyme';
import * as React from 'react';

import Error from './Error';

describe('<Error />', () => {
  it('renders', () => {
    const component = enzyme.shallow(<Error />);
    expect(component.debug()).toMatchSnapshot();
  });
});
