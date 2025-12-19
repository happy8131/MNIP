import TodoEditCP from '@/components/todo/todoEditCP';

type PageParams = { [key: string]: string };
type SearchParams = { [key: string]: string };

interface IParams {
    params: Promise<PageParams>;
    searchParams: Promise<SearchParams>;
}

export default async function TodoEditPage({ params, searchParams }: IParams) {
    //params:동적 경로 처리시 변수 처리, searchParams:주소창의 쿼리 스트링 처리

    const paramObj = await params;

    const query = await searchParams;

    //쿼리 스트링은 문자열이므로
    const page = query?.page || '1';

    const queryObj = new URLSearchParams();
    queryObj.set('page', page);

    //API 서버에서 조회
    const res = await fetch(`http://localhost:8080/api/todos/${paramObj.tno}`);

    const todo = await res.json();

    return (
        <div>
            <div>TodoEditPage</div>
            <TodoEditCP todo={todo} queryObj={queryObj} />
        </div>
    );
}
