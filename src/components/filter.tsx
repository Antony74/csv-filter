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
                defaultValue={csv.filter}
                onChange={(event) => {
                    csv.setFilter(event.target.value);
                }}
            >
                {['no filter', ...csv.headers].map((option) => {
                    return <option key={option}>{option}</option>;
                })}
            </select>{' '}
            is empty
        </div>
    );
};
