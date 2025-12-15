import TodoReadCP from '@/components/todo/todoReadCP';

type PageParams = { [key: string]: string };
type SearchParams = { [key: string]: string };

interface IParams {
    params: Promise<PageParams>;
    searchParams: Promise<SearchParams>;
}

export default async function TodoReadPage({ params, searchParams }: IParams) {
    const paramObj = await params;
    const query = await searchParams;

    const page = query?.page || '1';
    const queryObj = new URLSearchParams();

    queryObj.set('pages', page);

    const res = await fetch(`http://localhost:8080/api/todos/${paramObj?.tno}`);
    const todo = await res.json();

    // console.log(todo);

    return (
        <div>
            <TodoReadCP todo={todo} queryObj={queryObj} />
        </div>
    );
}
