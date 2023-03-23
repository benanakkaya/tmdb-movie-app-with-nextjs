import MainHome from "@/components/Main";
import Carausel from "@/components/Main/components/Carausel";



export default function Home({paramsPage}) {
  return (
    <main className="bg-lightDark flex flex-col">
     <MainHome paramsPage={paramsPage} />
    </main>
  )
}
