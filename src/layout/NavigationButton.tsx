interface Iprops {
  onClick: Function;
  label: string;
}
function NavigationButton({ onClick, label }: Iprops) {
  return (
    <button className="py-2 font-semibold md:py-3" onClick={() => onClick()}>
      {label}
    </button>
  );
}

export default NavigationButton;
