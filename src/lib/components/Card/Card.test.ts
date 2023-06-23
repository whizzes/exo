import { cleanup, fireEvent, render } from '@testing-library/svelte';
import { afterEach, describe, expect, test, vi } from 'vitest';

import Card from './Card.svelte';
import { CardDepth } from '$lib/index.ts';

afterEach(() => {
  cleanup();
});

describe('Card', () => {
  test('render without throwing', () => {
    const { getByTestId } = render(Card, {
      props: {},
    });
    const cardEl = getByTestId('card');

    expect(cardEl).toBeTruthy();
  });

  test('renders with small depth', () => {
    const { getByTestId } = render(Card, {
      props: {
        depth: CardDepth.DropSmall,
      },
    });
    const cardEl = getByTestId('card');
    const classes = cardEl.getAttribute('class');

    expect(classes).toContain('depth-drop_small');
  });

  test('renders with regular', () => {
    const { getByTestId } = render(Card, {
      props: {
        depth: CardDepth.DropRegular,
      },
    });
    const cardEl = getByTestId('card');
    const classes = cardEl.getAttribute('class');

    expect(classes).toContain('depth-drop_regular');
  });

  test('renders with large', () => {
    const { getByTestId } = render(Card, {
      props: {
        depth: CardDepth.DropLarge,
      },
    });
    const cardEl = getByTestId('card');
    const classes = cardEl.getAttribute('class');

    expect(classes).toContain('depth-drop_large');
  });

  test('renders with regular depth by default', () => {
    const { getByTestId } = render(Card, {
      props: {},
    });
    const cardEl = getByTestId('card');
    const classes = cardEl.getAttribute('class');

    expect(classes).toContain('depth-drop_regular');
  });
});
