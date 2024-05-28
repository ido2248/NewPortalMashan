import { IoMdArrowForward, IoMdArrowDown, IoMdArrowBack } from "react-icons/io";

function BusNode({ header, first, last }) {
  return (
    <div
      className={`${first ? "bg-green-500" : ""} ${last ? "col-end-4 bg-red-500" : ""} ${
        !first && !last ? "bg-slate-200" : ""
      } flex items-center justify-center rounded-lg py-4 text-slate-900 shadow shadow-slate-950`}
    >
      <span className="text-sm font-semibold">{header}</span>
    </div>
  )
}

export default function BusDiagram() {
  return (
    <div className="grid grid-cols-3 gap-y-4">
      <BusNode
        first
        header="כניסה משער שלכת (בתוך המחנה)"
      />
      <IoMdArrowBack className="m-auto h-8 w-8 text-slate-700" />
      <BusNode header='חט"ל' />
      <IoMdArrowDown className="col-span-3 h-8 w-8 place-self-end text-slate-700" />
      <BusNode header='בקו"ם' />
      <IoMdArrowForward className="m-auto h-8 w-8 text-slate-700" />
      <BusNode header='אט"ל/אכ"א' />
      <IoMdArrowDown className="col-span-3 h-8 w-8 text-slate-700" />
      <BusNode header="צומת המשולש" />
      <IoMdArrowBack className="m-auto h-8 w-8 text-slate-700" />
      <BusNode header="בסיס ציוד" />
      <IoMdArrowDown className="col-span-3 mr-auto h-8 w-8 text-slate-700" />
      <BusNode header="צומת המשולש" />
      <IoMdArrowForward className="m-auto h-8 w-8 text-slate-700" />
      <BusNode header="שער דרום" />
      <IoMdArrowDown className="col-span-3 h-8 w-8 text-slate-700" />
      <BusNode header='מב"ס 781' />
      <IoMdArrowBack className="m-auto h-8 w-8 text-slate-700" />
      <BusNode header="לשכת גיוס" />
      <IoMdArrowDown className="col-span-3 mr-auto h-8 w-8 text-slate-700" />
      <BusNode
        last
        header="יציאה מקיראון"
      />
    </div>
  )
}
