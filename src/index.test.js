import OnLeaveIntent from './index'

describe('OnLeaveIntent', () => {
  let callback
  let onLeaveIntent

  const delay = 1000
  jest.useFakeTimers()

  beforeEach(() => {
    callback = jest.fn()
    onLeaveIntent = new OnLeaveIntent(callback, delay)
  })

  it('should run the callback function if user goes out of the screen', () => {
    // Advance 1s
    jest.advanceTimersByTime(delay)
    // simulate the user leaving the page
    document.dispatchEvent(new MouseEvent('mouseout', { relatedTarget: null }))
    expect(callback).toHaveBeenCalled()
  })

  it('should not run the callback function if user stills on the screen', () => {
    jest.advanceTimersByTime(delay)
    document.dispatchEvent(
      new MouseEvent('mouseout', { relatedTarget: new EventTarget() })
    )
    expect(callback).not.toHaveBeenCalled()
  })

  it('should not run the callback function before the delay', () => {
    // Advance only .5s
    jest.advanceTimersByTime(delay / 2)
    // simulate the user leaving the page
    document.dispatchEvent(new MouseEvent('mouseout', { relatedTarget: null }))
    expect(callback).not.toHaveBeenCalled()
  })

  it('should run the callback function only once', () => {
    // Advance 1s
    jest.advanceTimersByTime(delay)
    // simulate the user leaving the page
    document.dispatchEvent(new MouseEvent('mouseout', { relatedTarget: null }))
    document.dispatchEvent(new MouseEvent('mouseout', { relatedTarget: null }))
    document.dispatchEvent(new MouseEvent('mouseout', { relatedTarget: null }))
    expect(callback).toHaveBeenCalledTimes(1)
  })
})
