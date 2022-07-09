import { render } from '@testing-library/react';

import ComponentLibrary from './--component-library';

describe('ComponentLibrary', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ComponentLibrary />);
    expect(baseElement).toBeTruthy();
  });
});
