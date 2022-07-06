import classNames from "classnames"

interface IButtonProps {
  label: string
  onClick: () => void
  classes?: string
  disabled?: boolean
}

export function Button(props: IButtonProps) {
  const { label, classes = [], onClick, disabled } = props
  return (
    <button
      className={classNames("rounded-lg bg-white", classes)}
      onClick={() => onClick()}
      disabled={disabled}
    >
      {label}
    </button>
  )
}
