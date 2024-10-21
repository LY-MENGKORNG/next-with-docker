import { addTask } from "@/actions/actions"

interface Task {
  id: number
  title: string
  completed: boolean
}
export default  function Home() {
  const tasks: Task[] = [
    {
      id: 1,
      title: "Task 1",
      completed: false,
    },
    {
      id: 2,
      title: "Task 1",
      completed: true,
    },
  ]
  return (
    <main className='flex flex-col justify-center items-center min-h-svh'>
      <h1 className='text-2xl'>Welcome to Next.js with Docker</h1>
      <ul className='my-4 text-xl flex flex-col gap-2'>
        {tasks.map(({ id, title, completed }) => (
          <li
            key={id}
            className={`bg-cyan-200 text-slate-600 px-3 rounded-full  ${
              completed ? "text-red-500" : ""
            }`}>
            {title}
          </li>
        ))}
      </ul>
      <form action={addTask} className='mt-5 flex gap-2 justify-center items-center'>
        <input type="text" className="bg-transparent border py-2 px-4 rounded-full min-w-[250px] focus:border-0 focus:outline-1 focus:outline-cyan-300" placeholder="Your task"   />

        <button type="submit" className='border-[.5px] rounded-full px-10 py-2'>
          Submit
        </button>
      </form>
    </main>
  )
}
