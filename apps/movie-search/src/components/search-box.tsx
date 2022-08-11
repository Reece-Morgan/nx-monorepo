import { Dispatch, SetStateAction } from "react";

interface Props {
    value: string;
    onChange: (value: string) => void;
}

export const SearchBox = ({ value, onChange }: Props) => {
    return (
        <div>
            <input 
                defaultValue={value}
                onChange={(event) => onChange(event.target.value)}
                placeholder='Start typing to search...'
            />
        </div>
    )
}