import React from 'react'
import { render, screen } from '@testing-library/react'
import { Link } from './src'

describe('Link', () => {
  describe('when using taget="_blank"', () => {
    it('should have rel="noopener noreferrer"', () => {
      render(
        <Link href="#" target="_blank">
          foo
        </Link>,
      )

      const link = screen.getByText('foo') as HTMLAnchorElement

      screen.debug()

      expect(link.rel).toEqual('noopener noreferrer ')
    })
  })

  // TODO: Skip it until Linaria work properly in the tests
  // describe.skip('when disabled', () => {
  //   it('should not have pointer-events', async () => {
  //     const fn = jest.fn()

  //     render(
  //       <Link href="#" disabled onClick={fn}>
  //         foo
  //       </Link>,
  //     )

  //     const link = screen.getByText('foo') as HTMLAnchorElement
  //     userEvent.click(link)
  //     expect(fn).not.toHaveBeenCalled()
  //   })
  // })
})
