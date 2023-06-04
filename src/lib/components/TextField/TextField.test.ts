import { cleanup, render, screen } from '@testing-library/svelte';
import { afterEach, describe, expect, test } from 'vitest';

import TextField from './TextField.svelte';

afterEach(() => {
  cleanup();
});

describe('TextField', () => {
  test('renders in document', () => {
    render(TextField, {
      props: {
        name: 'first_name',
        value: 'Jonny',
      },
    });

    const textField = screen.getByTestId('text_field-first_name');

    expect(textField).toBeTruthy();
  });

  test('provides name and value', () => {
    render(TextField, {
      props: {
        name: 'surname',
        value: 'Depp',
      },
    });

    const textField = screen.getByTestId('text_field-surname');

    expect.assertions(2);
    expect(textField.getAttribute('name')).toStrictEqual('surname');
    expect((textField as HTMLInputElement).value).toStrictEqual('Depp');
  });
});
