type Props = {
  tooltipText?: string
  tooltipPlace: 'top' | 'bottom' | 'left' | 'right'
}

export default function Tootltip({ tooltipPlace, tooltipText }: Props) {
  return (
    <>
      {tooltipPlace === 'top' && (
        <div
          className={`absolute top-0 left-0 right-0  ${
            tooltipText && tooltipText?.length > 12
              ? '-translate-y-20'
              : '-translate-y-12'
          } hidden group-hover:flex justify-center items-center`}
        >
          <div className="bg-red-600 rounded-md py-2 px-2">
            <p>{tooltipText}</p>
          </div>
        </div>
      )}
      {tooltipPlace === 'bottom' && (
        <div
          className={`absolute bottom-0 left-0 right-0 w-full ${
            tooltipText && tooltipText.length > 12
              ? 'translate-y-20'
              : 'translate-y-11'
          } hidden group-hover:flex justify-center items-center`}
        >
          <div className="bg-red-600 rounded-md py-2 px-10">
            <p className="text-sm">{tooltipText}</p>
          </div>
        </div>
      )}
      {tooltipPlace === 'right' && (
        <div
          className={`absolute right-0 top-0 bottom-0 ${
            tooltipText && tooltipText?.length > 12
              ? 'translate-x-64'
              : 'translate-x-32'
          } hidden group-hover:flex justify-center items-center`}
        >
          <div className="bg-red-600 rounded-md py-2 px-10">
            <p className="text-sm">{tooltipText}</p>
          </div>
        </div>
      )}
      {tooltipPlace === 'left' && (
        <div
          className={`absolute left-0 top-0 bottom-0 ${
            tooltipText && tooltipText?.length > 12
              ? '-translate-x-44'
              : '-translate-x-32'
          } hidden group-hover:flex justify-center items-center`}
        >
          <div className="bg-red-600 rounded-md py-2 px-10">
            <p className="text-sm">{tooltipText}</p>
          </div>
        </div>
      )}
    </>
  )
}
