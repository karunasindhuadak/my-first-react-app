

export const loadTodos = () => {
    const data = localStorage.getItem("todos")
    if (!data) return []
    const parsed = JSON.parse(data)
    return Array.isArray(parsed) ? parsed : []
}

export const saveTodos = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos))
}