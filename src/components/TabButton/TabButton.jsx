export default function TabButton({ children, isSelected, ...probs }) {
  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...probs}>
        {children}
      </button>
    </li>
  );
}
