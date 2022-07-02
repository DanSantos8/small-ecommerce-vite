import classNames from "classnames"

interface ITextProps {
  label: string
  classes?: string[]
}

export function Text(props: ITextProps) {
  const { label, classes = [] } = props
  return (
    <span
      className={classNames("text-white text-base font-semibold", ...classes)}
    >
      {label}
    </span>
  )
}
