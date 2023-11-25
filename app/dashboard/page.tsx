/* eslint-disable import/no-default-export */
import { Content } from '@/components/Dashboard/Layout/Content'
import { Header } from '@/components/Dashboard/Layout/Header'
import { Sidebar } from '@/components/Dashboard/Layout/Sidebar'

export default function Dashboard() {
  return (
    <main>
      <Header />
      <div className="flex">
        <Sidebar />
        <Content />
      </div>
    </main>
  )
}

