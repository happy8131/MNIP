'use client';
import { postTodo } from '@/actions/todoActions';
import { useActionState } from 'react';

export default function TodoAddCP() {
    const [state, formAction, isPending] = useActionState(postTodo, {
        result: '',
    });

    return (
        <form action={formAction}>
            <div>
                <p>Title</p>
                <input type="text" name="title"></input>
            </div>
            <div>
                <p>Writer</p>
                <input type="text" name="writer"></input>
            </div>
            <div>
                <button type="submit">SAVE</button>
            </div>
        </form>
    );
}
