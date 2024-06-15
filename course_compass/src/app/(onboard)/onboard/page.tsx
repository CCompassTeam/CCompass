import MultiForm from '@/components/forms/multiForm';

export default function Onboard() {
  return (
    <div className="flex flex-row ">
      <section className="w-1/5 bg-gradient-to-b from-blue-300 to-violet-700">
        this is gonna be the sidebar
      </section>
      <section className="w-4/5">
        <MultiForm />
      </section>
    </div>
  );
}
