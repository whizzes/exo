import { cleanup, fireEvent, render } from '@testing-library/svelte';
import { afterEach, describe, expect, test, vi } from 'vitest';

import Button from './Button.svelte';

afterEach(() => {
  cleanup();
});

describe('Button', () => {
  test('the button is rendered', () => {
    const { getByTestId } = render(Button, {
      props: {
        name: 'foo',
      },
    });
    const buttonEl = getByTestId('button-foo');

    expect(buttonEl).toBeTruthy();
  });

  test('the button is of type `button` by default', () => {
    const { getByTestId } = render(Button, {
      props: {
        name: 'foo',
      },
    });
    const buttonEl = getByTestId('button-foo');

    expect(buttonEl.getAttribute('type')).toStrictEqual('button');
  });

  test('the button is of type `submit` if required', () => {
    const { getByTestId } = render(Button, {
      props: {
        name: 'baz',
        type: 'submit',
      },
    });
    const buttonEl = getByTestId('button-baz');

    expect(buttonEl.getAttribute('type')).toStrictEqual('submit');
  });

  test('handle click event', () => {
    const BUTTON_LABEL = 'Join Us!';
    const { getByTestId, component } = render(Button, {
      props: { name: 'foo', label: BUTTON_LABEL },
    });

    const mock = vi.fn();
    const buttonEl = getByTestId('button-foo');
    const buttonLabelEl = getByTestId('button-foo-label');

    component.$on('click', mock);
    fireEvent.click(buttonEl);

    expect.assertions(2);
    expect(mock).toHaveBeenCalled();
    expect(buttonLabelEl.innerHTML).toStrictEqual(BUTTON_LABEL);
  });

  test('when disabled function is not executed', () => {
    const { getByTestId, component } = render(Button, {
      props: { name: 'foo', label: 'Im Blocked!', disabled: true },
    });

    const mock = vi.fn();
    const buttonEl = getByTestId('button-foo');

    component.$on('click', mock);
    fireEvent.click(buttonEl);

    expect(mock).not.toHaveBeenCalled();
  });
});
