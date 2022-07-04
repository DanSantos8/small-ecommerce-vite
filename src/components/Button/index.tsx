import classNames from "classnames"

interface IButtonProps {
  label: string
  onClick: () => void
  classes?: string
}

export function Button(props: IButtonProps) {
  const { label, classes = [], onClick } = props
  return (
    <button
      className={classNames("rounded-lg w", classes)}
      onClick={() => onClick()}
    >
      {label}
    </button>
  )
}

export function BtnAddProductCart(props: { productId: number }) {
  const { productId } = props
  return (
    <Button
      label="Add Cart"
      classes="bg-white text-base font-semibold p-1 w-36"
      onClick={() => console.log("Botão clicado", productId)}
    />
  )
}
