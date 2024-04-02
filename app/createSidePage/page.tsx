import CreateSitioModal from "@/components/sides/createStatusModal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const loadSides = async () => {
  const res = await fetch("http://localhost:3000/api/sides", {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

const loadStatus = async () => {
  const res = await fetch("http://localhost:3000/api/status", {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

interface DataSides {
  id: number;
  name: string;
  status: string;
}

const page = async () => {
  const dataSides = await loadSides();
  const dataStatus = await loadStatus();

  return (
    <Card className="w-full m-3 p-5">
      <CardContent className="w-full flex flex-col gap-5 items-start">
        <div className="bg-gray-950 text-white p-3 rounded-lg">
          <CreateSitioModal statusList={dataStatus} />
        </div>
        <div className="flex flex-wrap gap-5">
          {dataSides.map((sides: DataSides) => (
            <Card key={sides.id} className="w-full flex items-center gap-6 p-5">
              <div className="w-full flex justify-between items-center gap-5">
                <div className="flex items-center gap-10">
                  <div className="w-[200px] flex gap-5">
                    <p className="font-medium">{sides.id}</p>
                    <p className="font-medium">{sides.name}</p>
                  </div>
                  {sides.status === "En Visita Inicial" ? (
                    <div className="bg-red-300 text-red-600 font-medium px-4 py-2 rounded-full">
                      {sides.status}
                    </div>
                  ) : (
                    ""
                  )}
                  {sides.status === "Realizar Visita Inicial" ? (
                    <div className="bg-orange-300 text-orange-600 font-medium px-4 py-2 rounded-full">
                      {sides.status}
                    </div>
                  ) : (
                    ""
                  )}
                  {sides.status === "Cotizando Material" ? (
                    <div className="bg-yellow-300 text-yellow-600 font-medium px-4 py-2 rounded-full">
                      {sides.status}
                    </div>
                  ) : (
                    ""
                  )}
                  {sides.status === "Proceso de OC" ? (
                    <div className="bg-green-300 text-green-600 font-medium px-4 py-2 rounded-full">
                      {sides.status}
                    </div>
                  ) : (
                    ""
                  )}
                  {sides.status === "En Fabricación" ? (
                    <div className="bg-emerald-300 text-emerald-600 font-medium px-4 py-2 rounded-full">
                      {sides.status}
                    </div>
                  ) : (
                    ""
                  )}
                  {sides.status === "Trabajando en Sitio" ? (
                    <div className="bg-blue-300 text-blue-600 font-medium px-4 py-2 rounded-full">
                      {sides.status}
                    </div>
                  ) : (
                    ""
                  )}
                  {sides.status === "Realizando Side Folder" ? (
                    <div className="bg-violet-300 text-violet-600 font-medium px-4 py-2 rounded-full">
                      {sides.status}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="flex gap-5">
                  <Button variant={"outline"}>Editar</Button>
                  <Button>Eliminar</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default page;
