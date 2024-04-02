"use client";
import { Card, CardContent } from "@/components/ui/card";
import { PieChart } from "@mui/x-charts/PieChart";

const Home = () => {
  return (
    <Card className="w-full m-3 p-5">
      <CardContent>
        <PieChart
          series={[
            {
              data: [
                {
                  id: 0,
                  color: "#ff0000",
                  value: 10,
                  label: "En Visita Inicial",
                },
                { id: 1, value: 15, label: "Realizar Visita Inicial" },
                { id: 2, value: 20, label: "Cotizando Material" },
                { id: 3, value: 20, label: "Proceso de OC" },
                { id: 4, value: 20, label: "En Fabricación" },
                { id: 5, value: 20, label: "Trabajando en Sitio" },
                { id: 6, value: 20, label: "Realizando Side Folder" },
              ],
              innerRadius: 30,
              outerRadius: 100,
              paddingAngle: 5,
              cornerRadius: 5,
              startAngle: -90,
            },
          ]}
          width={600}
          height={400}
        />
      </CardContent>
    </Card>
  );
};

export default Home;
