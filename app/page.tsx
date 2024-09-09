'use client'
import Header from "@components/Header";
import Footer from "@components/Footer";
import Search from "@sections/Search";
import { useFormState } from "react-dom";
import { useState } from "react";
import { handleSubmit } from "./utils/actions/fetch-data";


export default function Home() {

  const [formState, formAction] = useFormState(handleSubmit, { data: '' })
  const [modal, setModal] = useState('hidden')

  return (
    <div className="md:flex md:flex-col justify-center text-white">
      <Header />
      <main className="h-full">
        <Search
          formState={formState}
          formAction={formAction}
          modal={modal}
          setModal={setModal} />
      </main>
      <Footer />
    </div>
  );
}
