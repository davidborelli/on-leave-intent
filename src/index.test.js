import OnLeaveIntent from './index'

describe('OnLeaveIntent', () => {
  it('should run the callback function if user goes out of the screen', () => {
    const callback = jest.fn()
    const onLeaveIntent = new OnLeaveIntent(callback)

    // simulate the user leaving the page
    document.dispatchEvent(new MouseEvent('mouseout', { relatedTarget: null }))
    expect(callback).toHaveBeenCalled()
  })

  it('should not run the callback function if user stills on the screen', () => {
    const callback = jest.fn()
    const onLeaveIntent = new OnLeaveIntent(callback)

    // simulate the user leaving the page
    document.dispatchEvent(
      new MouseEvent('mouseout', { relatedTarget: new EventTarget() })
    )
    expect(callback).not.toHaveBeenCalled()
  })
})
