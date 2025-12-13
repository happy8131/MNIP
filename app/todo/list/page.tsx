import TodoListCP from '@/components/todo/todoListCP';

interface IParams {
    searchParams: string;
}

export default async function TodoListPage({ searchParams }: IParams) {
    const query = await searchParams;

    const page = query?.page || '1';

    const queryObj = new URLSearchParams();
    queryObj.set('page', page);

    const res = await fetch(
        `http://localhost:8080/api/todos/list?page=${page}`
    );
    const result = await res.json();

    console.log(page);

    return (
        <div>
            <div>Todo List</div>
            <TodoListCP data={result} queryObj={queryObj} />
        </div>
    );
}
