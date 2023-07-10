import { cleanup, fireEvent, render, screen } from '@testing-library/svelte';
import { afterEach, describe, expect, test, vi } from 'vitest';

import Switch from './Switch.svelte';

afterEach(() => {
  cleanup();
});

describe('Switch', () => {
  test('the switch is rendered', () => {
    const { getByTestId } = render(Switch, {
      props: {
        name: 'test',
      },
    });

    const switchEl = getByTestId('switch-test');

    expect(switchEl).toBeTruthy();
  });

  test('when disabled function is not executed', () => {
    const { getByTestId, component } = render(Switch, {
      props: {
        name: 'test',
        disabled: true,
      },
    });

    const mock = vi.fn();
    const switchEl = getByTestId('switch-test');

    component.$on('click', mock);
    fireEvent.click(switchEl);

    expect(mock).not.toHaveBeenCalled();
  });
});
