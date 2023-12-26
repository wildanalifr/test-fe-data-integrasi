import { Icon } from '@iconify/react'

type Props = {
  icon: string
  iconBackgroundColor?: string
  iconSize?: number
}

export default function Iconify({
  icon,
  iconBackgroundColor,
  iconSize,
}: Props) {
  return (
    <Icon
      icon={icon}
      className={`${iconBackgroundColor}`}
      height={iconSize}
      width={iconSize}
    />
  )
}
