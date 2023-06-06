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

  test('provides id', () => {
    render(TextField, {
      props: {
        name: 'first_name',
        value: 'Harry',
        id: 'first_name',
      },
    });

    const textField = screen.getByTestId('text_field-first_name');

    expect(textField.getAttribute('id')).toStrictEqual('first_name');
  });

  test('uses the provided placeholder', () => {
    render(TextField, {
      props: {
        name: 'first_name',
        value: 'David',
        placeholder: 'Enter your first name',
      },
    });

    const textField = screen.getByTestId('text_field-first_name');

    expect(textField.getAttribute('placeholder')).toStrictEqual(
      'Enter your first name',
    );
  });

  test('uses autoComplete', () => {
    render(TextField, {
      props: {
        name: 'first_name',
        value: 'Kai',
        autoComplete: 'given-name',
      },
    });

    const textField = screen.getByTestId('text_field-first_name');

    expect(textField.getAttribute('autocomplete')).toStrictEqual('given-name');
  });

  test('uses the provided tabindex', () => {
    render(TextField, {
      props: {
        name: 'first_name',
        value: 'Giles',
        tabIndex: 2,
      },
    });

    const textField = screen.getByTestId('text_field-first_name');

    expect(textField.getAttribute('tabindex')).toStrictEqual('2');
  });

  test('uses the provided type', () => {
    render(TextField, {
      props: {
        name: 'first_name',
        value: 'Falana',
        type: 'email',
      },
    });

    const textField = screen.getByTestId('text_field-first_name');

    expect(textField.getAttribute('type')).toStrictEqual('email');
  });

  test('use disabled', () => {
    render(TextField, {
      props: {
        name: 'first_name',
        value: 'Falana',
        disabled: true,
      },
    });

    const textField = screen.getByTestId('text_field-first_name');

    expect(textField.getAttribute('disabled')).toStrictEqual('');
  });
});
