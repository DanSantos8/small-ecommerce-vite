import classNames from "classnames"

interface ITextProps {
  label: string
  classes?: string
  as?: string
}

export function Text(props: ITextProps) {
  const { label, classes = [], as } = props
  const Tag: any = as || "span"

  return (
    <Tag className={classNames("text-base font-semibold", classes)}>
      {label}
    </Tag>
  )
}
