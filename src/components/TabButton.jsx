export default function TabButton({ children, isSelected, ...props }) {
  console.log("TABBUTTON COMPONENT EXECUTING");
  return (
    <li>
      <button className={isSelected && "active"} {...props}>
        {children}
      </button>
    </li>
  );
}
