import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";

export default function TaskPage() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const navigate = useNavigate();
  return (
    <div className="h-screen w-screen bg-slate-500 p-6">
      <div className="w-[400px] space-y-4">
        <div className="flex justify-center relative">
          <button
            onClick={() => navigate(-1)}
            className="bg-slate-400 text-white p-2 rounded-md mr-4 absolute left-0 top-0"
          >
            <ChevronLeftIcon />
          </button>
          <Title>Task Detail</Title>
        </div>

        <div className="bg-slate-200 p-4 rounded-md shadow-md">
          <h2 className="text-xl font-semibold text-slate-600">{title}</h2>
          <p className="mt-2 text-slate-500">{description}</p>
        </div>
      </div>
    </div>
  );
}
