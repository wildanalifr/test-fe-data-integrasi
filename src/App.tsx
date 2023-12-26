import CustomButton from './CustomButton'

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      {/* <CustomButton /> */}
      <CustomButton
        backgroundColor="blue"
        label="halo"
        padding={'px-12 py-4'}
        textColor="secondary"
        iconName="mdi:human"
        iconSize={40}
        // iconBackgroundColor="green"
        iconPlace="right"
        rounded
        tooltipPlace="top"
        tooltipText="ini tool"
        size="small"
      />
    </div>
  )
}

export default App
