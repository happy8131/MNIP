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

export async function putTodo(prevState, formData) {
    console.log('Edit Todo...');

    const tno = formData.get('tno');

    const res = await fetch(`http://localhost:8080/api/todos/${tno}`, {
        method: 'PUT',
        body: formData,
    });

    const serverResult = await res.json();

    console.log(serverResult);

    return { result: serverResult.tno };
}

export async function deleteTodo(prevState, formData) {
    console.log('Edit Todo...');

    const tno = formData.get('tno');

    const res = await fetch(`http://localhost:8080/api/todos/${tno}`, {
        method: 'DELETE',
    });

    const serverResult = await res.json();

    return { result: serverResult.tno };
}
