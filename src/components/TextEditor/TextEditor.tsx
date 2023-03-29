import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useState,
} from 'react'
import { TextEditor as TE } from './types'
import styles from './styles/styles.module.scss'
import {
  FiItalic,
  FiBold,
  FiUnderline,
  FiAlignCenter,
  FiAlignLeft,
  FiAlignRight,
  FiList,
  FiLink2,
} from 'react-icons/fi'
import {
  AiOutlineOrderedList,
  RiMarkPenLine,
  CgColorBucket,
} from 'react-icons/all'
import TextStyleManager from './textEditor.service'
import { ColorPicker, FontDropDown, InputLink } from './components'

const TextEditor: ForwardRefRenderFunction<
  string,
  { properties: TE }
> = ({ properties }, ref) => {
  const { sizes, enableResize = false } = properties

  const [isEditing, editing] = useState(false)
  const [isPaintingBg, paintingBg] = useState(false)
  const [isPaintingText, paintingText] = useState(false)

  let manager = new TextStyleManager()

  return (
    <div
      style={{
        width: sizes.w + 'px',
        height: sizes.h + 49 + 'px',
        resize: enableResize ? 'vertical' : 'block',
        minHeight: '100px',
      }}
      id={styles.TextEditor}
    >
      <div id={styles.Buttons}>
        <div>
          <button
            onClick={() => {
              manager!.bold()
            }}
          >
            <FiBold />
          </button>
          <button
            onClick={() => {
              manager!.italic()
            }}
          >
            <FiItalic />
          </button>
          <button
            onClick={() => {
              manager!.underline()
            }}
          >
            <FiUnderline />
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              manager.alignLeft()
            }}
          >
            <FiAlignLeft />
          </button>
          <button
            onClick={() => {
              manager.alignCenter()
            }}
          >
            <FiAlignCenter />
          </button>
          <button
            onClick={() => {
              manager.alignRight()
            }}
          >
            <FiAlignRight />
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              manager.orderedList()
            }}
          >
            <AiOutlineOrderedList />
          </button>
          <button
            onClick={() => {
              manager.unorderedList()
            }}
          >
            <FiList />
          </button>

          <button
            onClick={() => {
              paintingBg(false)
              paintingText(false)
              editing((s) => !s)
            }}
          >
            <FiLink2 />
          </button>
        </div>

        <div>
          <button>
            <CgColorBucket
              onClick={() => {
                paintingBg((e) => !e)
              }}
              className={'border-b-[3px] h-7 border-b-red-500'}
            />
          </button>
          <button className={'ml-2'}>
            <RiMarkPenLine
              onClick={() => {
                paintingText((e) => !e)
              }}
              className={'border-b-[3px] h-7 border-b-red-500 '}
            />
          </button>
          <button>
            <FontDropDown fn={(n) => manager.fontSize(n)} />
          </button>
        </div>
      </div>
      {isEditing && (
        <InputLink
          fn={manager.createLink_blank}
          text={'Link:'}
          state={editing}
        />
      )}
      {isPaintingBg && (
        <div className={'fixed ml-[210px] mt-[40px]'}>
          <ColorPicker
            state={paintingBg}
            fn={(s: string) => manager.bgColor(s)}
          />
        </div>
      )}

      {isPaintingText && (
        <div className={'fixed ml-[400px] mt-[40px]'}>
          <ColorPicker
            state={paintingText}
            fn={(s: string) => manager.color(s)}
          />
        </div>
      )}
      <div id={styles.TextareaWrapper}>
        <div
          onInput={(e: any) => {
            ;(ref! as any).current = e.target.innerHTML
          }}
          contentEditable={true}
          style={{ minHeight: sizes.h + 'px' }}
          className={`outline-none p-2 pr-0 break-all`}
        ></div>
      </div>
    </div>
  )
}

export default forwardRef<string, { properties: TE }>(TextEditor)

// let range = window.getSelection()
// console.log(range)
// let insert = document.createElement('strong')
//
// insert.innerHTML = new String(range).replace('\n', '<br>')
// console.log(range!.getRangeAt(0))
// range!.getRangeAt(0).deleteContents()
// range!.getRangeAt(0).insertNode(insert)
