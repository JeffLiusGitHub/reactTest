import { renderHook, act, render } from '@testing-library/react';
import { useCounter } from './useCounter';

describe('useCounter', () => {
  test('should render initial count', () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });
  test('should accept and render the same initial count', () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialCount: 10,
      },
    });
    expect(result.current.count).toBe(10);
  });
  test('should increment count', () => {
    const { result } = renderHook(useCounter);
    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
    act(() => {
      result.current.decrement();
    });
    expect(result.current.count).toBe(0);
  });
  test('should decrement count', () => {
    const { result } = renderHook(useCounter);

    act(() => {
      result.current.decrement();
    });
    expect(result.current.count).toBe(-1);
  });
});

// describe('useCounter', () => {
//   test('should render the initial count', () => {
//     const { result } = renderHook(useCounter)
//     expect(result.current.count).toBe(0)
//   })

//   test('should accept and render the same initial count', () => {
//     const { result } = renderHook(useCounter, {
//       initialProps: { initialCount: 10 },
//     })
//     expect(result.current.count).toBe(10)
//   })

//   test('should increment the count', () => {
//     const { result } = renderHook(useCounter)
//     act(() => result.current.increment())
//     expect(result.current.count).toBe(1)
//   })

//   test('should decrement the count', () => {
//     const { result } = renderHook(useCounter)
//     act(() => result.current.decrement())
//     expect(result.current.count).toBe(-1)
//   })
// })
