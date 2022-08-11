import { Dispatch, SetStateAction } from "react";

interface Props {
    value: string;
    onChange: Dispatch<SetStateAction<string>>;
}

export const SearchBox = ({ value, onChange }: Props) => {
    return (
        <div>
            <input 
                value={value}
                onChange={() => onChange}
                placeholder='Start typing to search...'
            />
        </div>
    )
}