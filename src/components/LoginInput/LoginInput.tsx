import './LoginInput.css';

interface Props {
  type: string;
  placeholder: string;
  value: string;
  setValue(value: string): void;
}

export const LoginInput = (props: Props) => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={(e) => {
        props.setValue(e.target.value);
      }}
    />
  );
};
