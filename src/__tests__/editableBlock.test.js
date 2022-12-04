import { render } from '@testing-library/react';
import EditablePage from '../components/editablePage';
import getCaretCoordinates from '../components/getCoordinates';

test('renders the EditableBlock component snapshot', () => {
  const { asFragment } = render(
      <EditablePage />
  );
  expect(asFragment()).toMatchSnapshot();
});

test('renders the EditableBlock component snapshot', () => {
  const { asFragment } = render(
      <getCaretCoordinates />
  );
  expect(asFragment()).toMatchSnapshot();
});

