'use server';

export async function postTodo(prevState, formData) {
    console.log('PostTodo');
    console.log(formData);

    formData.set('completed', false);

    const res = await fetch('http://localhost:8080/api/todos', {
        method: 'POST',
        body: formData,
    });

    const serverResult = await res.json();

    console.log(serverResult);

    return { result: 'success' };
}
