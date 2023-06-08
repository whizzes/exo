import { cleanup, render, screen } from '@testing-library/svelte';
import { afterEach, describe, expect, test } from 'vitest';

import Button from './Button.svelte';

afterEach(() => {
  cleanup();
});

describe('Button', () => {
  test('use the provided type', () => {
    render(Button, {
      props: {
        type: 'submit',
      },
    });
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });
});
