import Iconify from './components/Iconify'
import Tootltip from './components/Tooltip'

type Props = {
  backgroundColor: 'red' | 'blue' | 'green'
  label: string
  padding: string
  textColor: 'primary' | 'secondary'
  rounded?: true | false
  size?: 'small' | 'medium' | 'large'
  //icon
  iconName?: string
  iconBackgroundColor?: 'red' | 'blue' | 'green' | 'transparant'
  iconSize?: number
  iconPlace?: 'left' | 'right'
  tooltipPlace?: 'left' | 'right' | 'top' | 'bottom'
  tooltipText?: string
}

export default function CustomButton({
  backgroundColor,
  label,
  padding,
  textColor,
  rounded = false,
  iconName,
  iconBackgroundColor = 'transparant',
  iconSize,
  iconPlace,
  tooltipPlace,
  tooltipText,
  size,
}: Props) {
  const sizeButton = {
    small: 'text-sm px-[10px] py-[5px]',
    medium: 'text-base px-[12px] py-[6px] ',
    large: 'text-lg px-4 py-[10px]',
  }

  const background = {
    red: 'bg-red-500 hover:bg-red-700 transition-all',
    blue: 'bg-blue-500 hover:bg-blue-700 transition-all',
    green: 'bg-green-500 hover:bg-green-700 transition-all',
  }

  const backgroundIcon = {
    red: 'bg-red-500',
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    transparant: 'bg-transparant',
  }

  const btnColor = ` ${textColor === 'primary' ? 'text-black' : 'text-white'}`
  const isIcon = `${
    iconName ? 'flex items-center justify-between space-x-4' : 'none'
  }`
  const isRounded = `${rounded ? 'rounded-lg' : 'rounded-none'}`
  const iconIsPlaced = `${
    iconPlace === 'left'
      ? 'flex-row-reverse space-x-4 space-x-reverse'
      : 'flex-row'
  }`

  const backgroundColorClass = iconBackgroundColor
    ? `${backgroundIcon[iconBackgroundColor]}`
    : ''

  return (
    <button
      className={`${
        background[backgroundColor]
      } ${padding} ${btnColor} ${isIcon} ${isRounded} ${iconIsPlaced} relative group ${
        sizeButton[size!]
      }`}
    >
      <p>{label}</p>
      {iconName && (
        <Iconify
          icon={iconName}
          iconSize={iconSize}
          iconBackgroundColor={backgroundColorClass}
        />
      )}
      <Tootltip tooltipPlace={tooltipPlace!} tooltipText={tooltipText!} />
    </button>
  )
}
