import Link from 'next/link';

interface IParams {
    totalCount: number;
    page?: number;
    size?: number;
}

export default function TodoPagingCP({ totalCount, page, size }: IParams) {
    const tempEnd = Math.ceil(page / 10.0) * 10;

    const start = tempEnd - 9;

    const totalPages = Math.ceil(totalCount / Number(size));

    const prev = start > 1;
    const next = tempEnd < totalPages;

    const end = totalPages < tempEnd ? totalPages : tempEnd;

    const pages = Array.from(
        { length: end - start + 1 },
        (_, idx) => start + idx
    );

    return (
        <div>
            <ul className="flex">
                {prev && (
                    <li className="m-2 p-2 bg-blue-200">
                        <Link href={`/todo/list?page=${start - 1}`}>prev</Link>
                    </li>
                )}

                {pages.map((num) => (
                    <li key={num} className="m-2 p-2 bg-blue-200">
                        <Link href={`/todo/list?page=${num}`}>{num}</Link>
                    </li>
                ))}

                {next && (
                    <li className="m-2 p-2 bg-blue-200">
                        <Link href={`/todo/list?page=${end + 1}`}>Next</Link>
                    </li>
                )}
            </ul>
        </div>
    );
}
