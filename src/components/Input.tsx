
type Props = {
    placeholder: string;
    field: number;
    setField: React.Dispatch<React.SetStateAction<number>>;
}

export const Input = ({ placeholder, field, setField }: Props) => {


    return (
        <input className="w-full border-b-2 border-b-pink-500 border-opacity-50  py-2.5 px-0.5 mb-5 focus:outline-0 text-sm rounded"
            type="number"
            placeholder={placeholder}
            value={field > 0 ? field : ''}
            onChange={e => setField(e.target.valueAsNumber)}
        />
    );
}