type Props = {
  checkList: readonly boolean[];
  labels: readonly string[];
  onCheck: (index: number) => void;
};

const CheckBoxes = ({ checkList, labels, onCheck }: Props) => {
  return (
    <ul>
      {labels.map((label, idx) => (
        <li key={idx}>
          <label>
            <input
              type="checkbox"
              checked={checkList[idx]}
              onChange={() => onCheck(idx)}
            />
            {label}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default CheckBoxes;
