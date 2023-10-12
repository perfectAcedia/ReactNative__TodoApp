const url = "https://todo-lsit.p.rapidapi.com/todoList";

const postOptions = {
  method: "POST",
  headers: {
    "content-type": "application/json",
    "X-RapidAPI-Key": "2d2ab8ee6dmsh9fb569d50165b05p1f8346jsn153ce5fd9ef0",
    "X-RapidAPI-Host": "todo-lsit.p.rapidapi.com",
  },
  body: {
    data: "CREATED",
    status: "201",
  },
};

const getOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "2d2ab8ee6dmsh9fb569d50165b05p1f8346jsn153ce5fd9ef0",
    "X-RapidAPI-Host": "todo-lsit.p.rapidapi.com",
  },
};

export const getTodos = () => {
    try {
        const response = fetch(url, getOptions);
        const result = response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
};

const createTodo = (id) => {
    try {
        const response = fetch(`${url} + /${id}`, postOptions);
    } catch (error) {
        console.error(error);
    }
}
