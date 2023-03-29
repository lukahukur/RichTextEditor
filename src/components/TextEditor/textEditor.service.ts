export default class TextStyleManager {
  bold() {
    document.execCommand('bold')
  }
  italic() {
    document.execCommand('italic')
  }
  underline() {
    document.execCommand('underline')
  }

  alignLeft() {
    document.execCommand('JustifyLeft', false, '')
  }

  alignRight() {
    document.execCommand('JustifyRight', false, '')
  }

  alignCenter() {
    document.execCommand('JustifyCenter', false, '')
  }

  orderedList() {
    document.execCommand('insertOrderedList')
  }
  unorderedList() {
    document.execCommand('insertUnorderedList')
  }

  createLink(url: string) {
    document.execCommand('CreateLink', false, url)
  }
  createLink_blank(url: string) {
    let sText = String(document.getSelection())
    document.execCommand(
      'insertHTML',
      false,
      '<a href="' + url + '" target="_blank">' + sText + '</a>',
    )
  }

  color(c: string) {
    document.execCommand('foreColor', false, c)
  }

  bgColor(c: string) {
    document.execCommand('backColor', false, c)
  }

  fontSize(n: number) {
    document.execCommand('fontSize', false, String(n))
  }
}
