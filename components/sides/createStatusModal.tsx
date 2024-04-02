"use client";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useState } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { AlertDialogAction } from "@radix-ui/react-alert-dialog";

interface DataStatus {
  statusList: [id: number, name: string];
}

const CreateSitioModal = ({ statusList }: DataStatus) => {
  const router = useRouter();

  const [sitio, setSitio] = useState({
    id: 0,
    name: "",
    status: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSitio({
      ...sitio,
      [e.target.name]: e.target.value,
    });

    console.log(sitio);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { id, name, status } = sitio;

    const res = await fetch("http://localhost:3000/api/sides", {
      method: "POST",
      body: JSON.stringify({ id, name, status }),
    });
    router.refresh();
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger>Crear Sitio</AlertDialogTrigger>
      <AlertDialogContent>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <Label>ID del Sitio</Label>
            <Input placeholder="123456" name="id" onChange={handleChange} />
          </div>
          <div className="flex flex-col gap-2">
            <Label>Nombre del Sitio</Label>
            <Input
              type="text"
              placeholder="Contao"
              name="name"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label>Estado del Sitio</Label>
            <select name="status" onChange={handleChange}>
              <option disabled>--- Selecciona una Opcion ---</option>
              {statusList.map((list) => (
                <option key={list.id} value={list.name}>
                  {list.name}
                </option>
              ))}
            </select>
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>
              <Button>Crear</Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CreateSitioModal;
