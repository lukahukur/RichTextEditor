import React, { Dispatch, FC, SetStateAction, useRef } from 'react'
import { BiFontSize } from 'react-icons/all'

let colors = ['red', 'green', 'white', 'black', 'skyblue', 'purple']
let fontSizes = [1, 2, 3, 4, 5, 6, 7]

export const ColorPicker: FC<{
  fn: (a: string) => void
  state: Dispatch<SetStateAction<boolean>>
}> = ({ fn, state }) => {
  return (
    <div
      className={`w-44 h-fit border border-slate-300
                  bg-white rounded-md flex flex-col justify-between
                  shadow-md shadow-slate-200 `}
    >
      <div
        style={{ listStyleType: 'none', padding: 0 }}
        className={`grid grid-cols-3 w-full h-20`}
      >
        {colors.map((e, k) => {
          return (
            <button
              key={k}
              onClick={() => {
                fn(e)
                state(false)
              }}
              style={{ background: e }}
              className={
                'w-6 h-6 border rounded-full place-self-center border-neutral-800'
              }
            ></button>
          )
        })}
      </div>
    </div>
  )
}

export const FontDropDown: FC<{ fn: (n: number) => void }> = ({
  fn,
}) => {
  return (
    <>
      <BiFontSize />
      <div
        style={{
          width: '55px',
        }}
        className={`fixed hover:text-slate-900 ml-8 mt-[180px] border 
                          bg-white h-40
                          drop-shadow-md overflow-y-scroll overflow-hidden
                `}
      >
        <div className="flex flex-col -ml-2 justify-start items-start">
          {fontSizes.map((e, k) => (
            <div key={k} onClick={() => fn(e)}>
              {e}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export const InputLink: FC<{
  text?: string
  fn: (url: string) => void
  state: Dispatch<SetStateAction<boolean>> //view state
}> = ({ text, fn, state }) => {
  const url = useRef<string | null>(null)
  return (
    <span
      className={`fixed ml-[270px] mt-[40px] border border-slate-300 h-fit bg-white
          flex flex-col rounded-lg w-38 justify-start overflow-hidden 
            p-1 box-border shadow-md shadow-slate-200
          `}
    >
      <span>{text}</span>
      <input
        className={`border border-slate-300 rounded-md outline-none px-1
           bg-slate-50`}
        type="text"
        onChange={(e) => (url!.current = e.target.value)}
      />
      <span className={'flex justify-center'}>
        <button
          className={`
              border bg-sky-600 w-14 rounded-md mt-1 text-white
         `}
          onClick={() => {
            if (url.current) {
              fn(url.current)
            } else {
            }
            state(false)
          }}
        >
          Create
        </button>
      </span>
    </span>
  )
}
