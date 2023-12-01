// /* eslint-disable import/no-default-export */
// /* eslint-disable max-len */
// import { useRef, useEffect, useState } from 'react'
// import { twMerge } from 'tailwind-merge'

// interface ISwiperPaginationProps {
//   count: number
//   activeIndex: number
//   className?: string
//   // eslint-disable-next-line no-unused-vars
//   onClick?: (index: number) => void
// }

// const array_move = (arr: Array<HTMLElement | undefined>, old_index: number, new_index: number) => {
//   if (new_index >= arr.length) {
//     let k = new_index - arr.length + 1
//     while (k--) {
//       arr.push(undefined)
//     }
//   }

//   arr.splice(new_index, 0, arr.splice(old_index, 1)[0])

//   return arr
// }

// const SwiperPagination = (props: ISwiperPaginationProps) => {
//   const [show, setShow] = useState<boolean>(false)

//   const width = 59,
//     height = 16,
//     space = 24,
//     firstWidth = 59,
//     style = 'border-2 border-elephant-900',
//     firtStyle = 'bg-elephant-900'

//   const containerWidth = (props.count - 1) * width + firstWidth + (props.count - 1) * space

//   const ref = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const childrens: Array<HTMLElement> = Array.from(ref.current?.children || []) as Array<HTMLElement>

//     const temp_childrens = array_move(childrens, 0, props.activeIndex)

//     for (let i = 0; i < temp_childrens.length; i++) {
//       const children = temp_childrens[i]

//       if (!children) continue

//       let sumPreviusChildren = 0

//       for (let j = 0; j < temp_childrens.length && j < i; j++) {
//         const temp_children = temp_childrens[j]

//         if (!temp_children) continue

//         sumPreviusChildren += temp_children.offsetWidth + space
//       }

//       children.style.transform = `translateX(${sumPreviusChildren}px)`
//     }

//     setShow(true)
//   }, [props.activeIndex])

//   return (
//     <div
//       className={twMerge(`flex relative`, !show ? 'opacity-0' : '', props.className)}
//       style={{ width: containerWidth, height }}
//       ref={ref}
//     >
//       {Array.from({ length: props.count }).map((_, index) => (
//         <div
//           key={index}
//           style={{ width: 0 === index ? firstWidth : width, height, marginRight: 0 === index ? space : 0 }}
//           className={`cursor-pointer absolute rounded-full after:opacity-0 transition-all duration-[500ms] ease-[cubic-bezier(0.24,0.68,0.57,1.15)] ${
//             0 === index ? firtStyle : style
//           }`}
//           onClick={() => {
//             if (index === 0) return

//             if (index <= props.activeIndex) {
//               props.onClick && props.onClick(index - 1)
//             } else {
//               props.onClick && props.onClick(index)
//             }
//           }}
//         />
//       ))}
//     </div>
//   )
// }

// export default SwiperPagination

/* eslint-disable import/no-default-export */
/* eslint-disable max-len */
import { useIsMobile } from '@/hooks/useIsMobile'
import { useRef, useEffect, useState, useMemo } from 'react'
import { twMerge } from 'tailwind-merge'

interface ISwiperPaginationProps {
  count: number
  activeIndex: number
  className?: string
  // eslint-disable-next-line no-unused-vars
  onClick?: (index: number) => void
}

const array_move = (arr: Array<HTMLElement | undefined>, old_index: number, new_index: number) => {
  if (new_index >= arr.length) {
    let k = new_index - arr.length + 1
    while (k--) {
      arr.push(undefined)
    }
  }

  arr.splice(new_index, 0, arr.splice(old_index, 1)[0])

  return arr
}

const SwiperPagination = (props: ISwiperPaginationProps) => {
  const isMobile = useIsMobile()

  const [show, setShow] = useState<boolean>(false)
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const [space, setSpace] = useState(0)
  const [firstWidth, setFirstWidth] = useState(0)

  const style = 'border-2 border-elephant-900',
    firtStyle = 'bg-elephant-900'

  const containerWidth = useMemo(
    () => (props.count - 1) * width + firstWidth + (props.count - 1) * space,
    [props.count, width, firstWidth, space]
  )

  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isMobile) {
      setWidth(40)
      setHeight(12)
      setSpace(16)
      setFirstWidth(40)
    } else {
      setWidth(53.409)
      setHeight(14.484)
      setSpace(21.73)
      setFirstWidth(53.409)
    }
  }, [isMobile])

  useEffect(() => {
    const childrens: Array<HTMLElement> = Array.from(ref.current?.children || []) as Array<HTMLElement>

    const temp_childrens = array_move(childrens, 0, props.activeIndex)

    for (let i = 0; i < temp_childrens.length; i++) {
      const children = temp_childrens[i]

      if (!children) continue

      let sumPreviusChildren = 0

      for (let j = 0; j < temp_childrens.length && j < i; j++) {
        const temp_children = temp_childrens[j]

        if (!temp_children) continue

        sumPreviusChildren += temp_children.offsetWidth + space
      }

      children.style.transform = `translateX(${sumPreviusChildren}px)`
    }

    setShow(true)
  }, [props.activeIndex, space, firstWidth, width, containerWidth])

  return (
    <div
      className={twMerge(`flex relative`, !show ? 'opacity-0' : '', props.className)}
      style={{ width: containerWidth, height }}
      ref={ref}
    >
      {Array.from({ length: props.count }).map((_, index) => (
        <div
          key={index}
          style={{ width: 0 === index ? firstWidth : width, height, /** marginRight: 0 === index ? space : 0 */ }}
          className={`cursor-pointer absolute rounded-full after:opacity-0 transition-transform duration-[500ms] ease-[cubic-bezier(0.24,0.68,0.57,1.15)] ${
            0 === index ? firtStyle : style
          }`}
          onClick={() => {
            if (index === 0) return

            if (index <= props.activeIndex) {
              props.onClick && props.onClick(index - 1)
            } else {
              props.onClick && props.onClick(index)
            }
          }}
        />
      ))}
    </div>
  )
}

export default SwiperPagination
