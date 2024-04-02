import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { LayoutGrid } from "lucide-react";
import { CirclePlus } from "lucide-react";

const Sidebar = () => {
  return (
    <Card className="w-80 m-3 p-5">
      <CardContent className="flex flex-col items-center gap-5">
        <h1 className="text-2xl font-bold">
          <span className="text-red-600">D</span>-MC Dashboard
        </h1>
        <ul className="flex flex-col gap-5">
          <li>
            <Link href={"./"}>
              <Button className="flex gap-2 w-56 hover:bg-red-600 font-semibold">
                <LayoutGrid size={22} />
                Inicio
              </Button>
            </Link>
          </li>
          <li>
            <Link href={"./createSidePage"}>
              <Button className="flex gap-2 w-56 hover:bg-red-600 font-semibold">
                <LayoutGrid size={22} />
                Lista de Sitios
              </Button>
            </Link>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default Sidebar;
