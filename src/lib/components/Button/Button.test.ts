import { cleanup, fireEvent, render } from '@testing-library/svelte';
import { afterEach, describe, expect, test, vi } from 'vitest';

import Button, { SECONDARY_BUTTON_CLASSES } from './Button.svelte';
import { ButtonStyle, ButtonSize, ButtonType } from '$lib/index.ts';

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

  test('applies the secondary variant style', () => {
    const { getByTestId } = render(Button, {
      props: { name: 'foo', label: 'Im Blocked!', style: ButtonStyle.Secondary },
    });

    const buttonEl = getByTestId('button-inner-foo');
    const classes = buttonEl.getAttribute('class');

    expect(classes).toContain(SECONDARY_BUTTON_CLASSES);
  });

  test('applies the large variant size', () => {
    const { getByTestId } = render(Button, {
      props: { name: 'foo', label: 'Im Blocked!', size: ButtonSize.Large },
    });

    const buttonEl = getByTestId('button-inner-foo');
    const classes = buttonEl.getAttribute('class');

    expect(classes).toContain('px-3 py-3 w-full');
  });

  test('applies the small variant size', () => {
    const { getByTestId } = render(Button, {
      props: { name: 'foo', label: 'Im Blocked!', size: ButtonSize.Small },
    });

    const buttonEl = getByTestId('button-inner-foo');
    const classes = buttonEl.getAttribute('class');

    expect(classes).toContain('px-0.5 text-sm py-1');
  });

  test('when loading function is not executed', () => {
    const { getByTestId, component } = render(Button, {
      props: { name: 'foo', label: 'Im Blocked!', isLoading: true },
    });

    const mock = vi.fn();
    const buttonEl = getByTestId('button-foo');

    component.$on('click', mock);
    fireEvent.click(buttonEl);

    expect(mock).not.toHaveBeenCalled();
  });

  test('applies the fixed variant type', () => {
    const { getByTestId } = render(Button, {
      props: { name: 'foo', label: 'Im Blocked!', btnType: ButtonType.Fixed },
    });

    const buttonEl = getByTestId('button-foo');
    const classes = buttonEl.getAttribute('class');

    expect(classes).toContain('w-full');
  });
});
