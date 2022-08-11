interface Props {
    value: string;
    onChange: () => void;
}

export const SearchBox = ({ value, onChange }: Props) => {
    return (
        <div>
            <input 
                value={value}
                onChange={onChange}
                placeholder='Start typing to search...'
            />
        </div>
    )
}