import { Navigate, Route, Routes, } from 'react-router-dom';
import { Layout } from '../layouts';

import { Dashboard } from '../pages/Dashboard';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { Todo } from '../pages/Todo';
import { CreateTodo } from '../pages/CreateTodo';
import { Profile } from '../pages/Profile';
import { Planner } from '../pages/Planner';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace={true} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<Layout />}>
        <Route path="/home" element={<Dashboard />} />
        <Route path="/todos/:todoId" element={<Todo />} />
        <Route path="/todos/create" element={<CreateTodo />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/planner" element={<Planner />} />
      </Route>
    </Routes>
  )
}