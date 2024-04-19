import MainHome from "@/components/Main";

export default function Home({searchParams}) {


  return (
    <main className="bg-lightDark">
     <MainHome page={searchParams.page} />
    </main>
  )
}
