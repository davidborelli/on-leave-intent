export default class OnLeaveIntent {
  constructor(callback) {
    this.callback = callback

    this.handleMouseOut()
  }

  handleMouseOut() {
    document.addEventListener('mouseout', e => {
      if (e.relatedTarget === null) {
        this.callback()
      }
    })
  }
}
