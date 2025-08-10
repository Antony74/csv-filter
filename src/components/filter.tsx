import { CsvHook } from '../hooks/useCsv';

export const Filter = ({ csv }: { csv: CsvHook }) => {
    if (!csv.content.length) {
        return <></>;
    }

    return (
        <div className="pad">
            Filter rows where{' '}
            <select
                aria-label="Sketch"
                defaultValue="no filter"
                // onChange={(event) => {
                //     setSketch(event.target.value);
                // }}
            >
                {csv.headers.map((option) => {
                    return <option key={option}>{option}</option>;
                })}
            </select>{' '}
            is empty
        </div>
    );
};
