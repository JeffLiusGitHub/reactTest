import { render, screen } from '../../test-utils'
// import { render, screen } from '@testing-library/react'
import { MuiMode } from './MuiMode'
// import { AppProviders } from '../../providers/AppProviders'
describe('Mui', () => {
  test('renders text correctly', () => {
    render(
      <MuiMode />
      //  {
      //   wrapper: AppProviders,
      // }
    )
    const headingElement = screen.getByRole('heading')

    expect(headingElement).toHaveTextContent('dark mode')
  })
})

// describe('MuiMode', () => {
//   test('renders text correctly', () => {
//     render(<MuiMode />)
//     const headingElement = screen.getByRole('heading')
//     expect(headingElement).toHaveTextContent('dark mode')
//   })

//   test('renders text in white color for dark mode', () => {
//     render(<MuiMode />)
//     const headingElement = screen.getByRole('heading')
//     expect(headingElement).toHaveStyle({ color: "'rgb(255, 255, 255)'" })
//   })
// })
