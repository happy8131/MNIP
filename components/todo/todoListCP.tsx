import Link from 'next/link';
import TodoPagingCP from './todoPagingCP';

interface Todo {
    tno: number;
    title: string;
    writer: string;
    completed: boolean;
    createdDate: string;
}

interface TodoData {
    list: Todo[];
    total: number;
}

interface IParams {
    data: TodoData;
    queryObj: URLSearchParams;
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function TodoListCP({ data, queryObj }: IParams) {
    const { list, total } = data;

    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">📋 Todo List CP</h2>

            <ul className="divide-y divide-gray-200">
                {list.map((todo: any) => (
                    <li key={todo.tno} className="py-3">
                        <Link
                            href={`/todo/read/${
                                todo.tno
                            }?${queryObj.toString()}`}
                            className="flex justify-between items-center text-gray-700 hover:text-indigo-600 transition-colors"
                        >
                            <div className="flex-1 overflow-hidden">
                                <span className="font-semibold">
                                    #{todo.tno}. {todo.title}
                                </span>
                                <span className="block text-sm text-gray-500 mt-1">
                                    작성자: {todo.writer}
                                </span>
                            </div>
                            <span className="text-sm font-medium text-indigo-500">
                                보기 &gt;
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>

            <div className="mt-6 flex justify-center">
                <TodoPagingCP
                    totalCount={total}
                    size={10}
                    page={queryObj.get('page')}
                />
            </div>
        </div>
    );
}
